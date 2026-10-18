-- THE OFFICE v0.8 - Public Best Of leaderboard
-- Paste into your Supabase project's SQL Editor, then click Run.
-- This is an append-only PUBLIC scoreboard. It does not authenticate pseudonyms
-- or prove that a run was genuinely played. A production launch needs a
-- server-validated run submission system and abuse/rate limiting.

create table if not exists public.office_runs (
    id bigint generated always as identity primary key,
    pseudonym text not null
       check (char_length(trim(pseudonym)) between 3 and 20
              and pseudonym !~ '[[:cntrl:]<>]'),
    level smallint not null check (level between 1 and 10),
    steps smallint not null check (steps > 0),
    time_ms integer not null check (time_ms between 1000 and 3600000),
    created_at timestamptz not null default now(),
    constraint office_steps_within_game_limits check (
       steps >= (array[26,38,38,78,78,70,78,108,80,108])[level]
       and steps <= (array[31,43,42,82,82,74,81,111,83,111])[level]
    )
);

create index if not exists office_runs_player_level_idx
    on public.office_runs (lower(pseudonym), level, time_ms, steps, created_at);
create index if not exists office_runs_level_time_idx
    on public.office_runs (level, time_ms, steps);

alter table public.office_runs enable row level security;
revoke all on table public.office_runs from anon, authenticated;
grant select on table public.office_runs to anon, authenticated;
grant insert (pseudonym, level, steps, time_ms) on table public.office_runs to anon, authenticated;

drop policy if exists "Office results can be read" on public.office_runs;
create policy "Office results can be read"
 on public.office_runs for select to anon, authenticated using (true);

drop policy if exists "Qualifying runs can be submitted" on public.office_runs;
create policy "Qualifying runs can be submitted"
 on public.office_runs for insert to anon, authenticated
 with check (
    char_length(trim(pseudonym)) between 3 and 20
    and pseudonym !~ '[[:cntrl:]<>]'
    and level between 1 and 10
    and time_ms between 1000 and 3600000
    and steps >= (array[26,38,38,78,78,70,78,108,80,108])[level]
    and steps <= (array[31,43,42,82,82,74,81,111,83,111])[level]
 );

-- Only the best result per pseudonym and level is shown.
-- Security invoker ensures the underlying table's RLS still applies.
create or replace view public.office_best_of
with (security_invoker=true) as
select pseudonym, level, steps, time_ms
from (
    select pseudonym, level, steps, time_ms,
        row_number() over (
           partition by lower(pseudonym), level
           order by time_ms asc, steps asc, created_at asc, id asc
        ) as n
    from public.office_runs
) ranked
where n=1;

revoke all on table public.office_best_of from anon, authenticated;
grant select on table public.office_best_of to anon, authenticated;

-- PostgreSQL RLS protects read and append-only writes, but anyone knowing
-- the PUBLIC publishable key can submit invented qualifying scores.
-- For public competition or prizes, deploy authenticated identities,
-- replay validation, rate limiting, and moderation on the server first.
