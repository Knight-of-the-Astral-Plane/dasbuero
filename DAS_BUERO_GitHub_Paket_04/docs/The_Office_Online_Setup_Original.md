# The Office v0.8: Online Best Of einrichten

Die HTML-Datei ist vollständig spielbar, inklusive Pseudonym, lokal gespeicherten Bestleistungen, Rangliste und Enter zum nächsten Level. **Die weltweite Online-Tabelle ist noch nicht aktiv**, bis du dein eigenes Datenbankprojekt verbindest. Ohne Datenbank bleibt alles lokal auf dem jeweiligen Gerät.

## In wenigen Schritten

1. Erstelle ein Projekt bei [Supabase](https://supabase.com/).
2. Öffne im Projekt den **SQL Editor**. Kopiere den gesamten Inhalt aus `The_Office_Leaderboard_Setup.sql`, führe ihn aus und kontrolliere, ob das Skript ohne Fehler abgeschlossen wurde.
3. Suche im Supabase-Projekt unter **Connect** die **Project URL** und den **Publishable key** (`sb_publishable_...`). Niemals einen `service_role`- oder `sb_secret`-Schlüssel in das HTML einfügen.
4. Öffne `The_Office_Prototype_v0.8.html` in einem Texteditor. Suche ziemlich weit oben nach dieser Konfiguration:

   ```html
   <script>window.OFFICE_ONLINE={url:"",publishableKey:""};</script>
   ```

   Setze deine beiden Werte ein, z. B.:

   ```html
   <script>window.OFFICE_ONLINE={url:"https://DEIN-PROJEKT.supabase.co",publishableKey:"sb_publishable_DEIN_PUBLIC_KEY"};</script>
   ```

5. Lade die angepasste HTML-Datei auf einen **HTTPS-Webhost** wie GitHub Pages. Dann können andere den Link im Browser öffnen und unter **PLAYER** ihr Pseudonym speichern. Nach einem Levelabschluss mit Par oder besser wird ihr neuer Bestwert in die gemeinsame Datenbank geschrieben. Unter **BEST OF → GLOBAL** erscheinen die veröffentlichten Rekorde.

## Regeln und Wertung

- Alle **10 Levels** behalten das bisherige Par-System. Nur Par oder besser schaltet das nächste Level frei.
- Nach einem bestandenen Job bringt **Enter** dich ins nächste Level. Nach einem Fehlversuch wiederholt Enter den Job. Nach Level 10 erscheint die Scorecard.
- **BEST OF → LOCAL** zeigt Rekorde auf diesem Gerät, auch offline.
- **BEST OF → GLOBAL** zeigt die schnellsten Zeiten pro Level nach Pseudonym, falls Supabase verbunden ist.
- Die Kategorie **ALL 10 · TOTAL PB** zeigt nur Pseudonyme mit zehn abgeschlossenen Levels und summiert deren persönliche Bestzeiten. Das ist **keine einzelne zusammenhängende Speedrun-Zeit**.
- Alte persönliche Bestzeiten aus v0.7 lassen sich unter BEST OF über **SAVED PERSONAL BESTS** bewusst nachtragen, nachdem ein Pseudonym gespeichert wurde.
- Ein Pseudonym ist in dieser ersten Version **nicht exklusiv reserviert**. Zwei Spieler können denselben Namen verwenden. Die Rangliste fasst diese Namen zusammen.

## Vor einer öffentlichen Wettbewerbs-Version

Supabase speichert die Ergebnisse tatsächlich für alle Nutzer gemeinsam. Die in dieser Version öffentlich zugänglichen Eingaben können aber von technisch versierten Besuchern manipuliert werden. Datenbankregeln sperren nicht plausible Schrittzahlen und Zeiten aus, **prüfen jedoch nicht, ob wirklich gespielt wurde**. Eine wirklich faire öffentliche Rangliste braucht eine serverseitige Überprüfung der Züge, einen Spielerschutz gegen fremde Pseudonyme und Rate Limits gegen Spam. Die SQL-Konfiguration erlaubt Lesen und Eintragen, aber kein Ändern/Löschen über den öffentlichen Schlüssel.

**Tipp:** Das angehängte HTML enthält bereits den Ambient-Sound. Es müssen keine Audio-Dateien separat hochgeladen werden.
