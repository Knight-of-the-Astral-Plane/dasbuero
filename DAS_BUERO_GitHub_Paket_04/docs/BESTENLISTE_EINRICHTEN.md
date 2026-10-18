# Gemeinsame Bestenliste für DAS BÜRO

Diese Anleitung verbindet nur die Rangliste im Spiel. Sie richtet keine Büro-Logins und keinen Chat ein.

1. Ein eigenes Projekt bei https://supabase.com anlegen.
2. Im SQL Editor den vollständigen Inhalt von The_Office_Leaderboard_Setup.sql ausführen.
3. Die Project URL und den öffentlichen Publishable Key aus dem Supabase-Projekt kopieren.
4. In games/das-buero.html nach window.OFFICE_ONLINE suchen. Dort sind zwei leere Zeichenfolgen für url und publishableKey vorbereitet.
5. Die Project URL und den öffentlichen Publishable Key eintragen. Niemals einen service_role- oder sb_secret-Schlüssel in die Website übernehmen.
6. Die aktualisierte Datei in das private GitHub-Repository hochladen und über das geschützte Hosting bereitstellen.
7. Im Spiel unter PLAYER ein Pseudonym setzen. Ein bestandenes Level kann danach einen qualifizierenden Bestwert in der gemeinsamen Datenbank speichern. Unter BEST OF und GLOBAL erscheinen die gemeinsamen Ergebnisse.

Ohne Konfiguration bleibt die Rangliste lokal auf dem jeweiligen Gerät.

Die gemeinsame Tabelle verwendet Pseudonyme und ist in dieser Spielversion öffentlich über die Supabase-Schnittstelle les- und beschreibbar. Das Passwort der Büro-Website reserviert keine Spiel-Pseudonyme. Für eine ausschliesslich interne Rangliste muss die Datenbank zusätzlich an eure tatsächlichen Büro-Konten angebunden werden.

Die SQL-Prüfungen begrenzen Werte auf plausible Bereiche. Sie prüfen nicht den gesamten Spielverlauf. Die mitgelieferte Version ist deshalb für eine gemeinsame interne Bestenliste vorbereitet, nicht für einen Wettbewerb mit verifizierten Spielzügen.
