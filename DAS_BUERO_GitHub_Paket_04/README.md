# DAS BÜRO

Vierter Stand mit Inter von Google Fonts, responsiven Unterseiten, den neu gelieferten Teambildern und dem Bürospiel Version 0.8. Der zuvor verwendete Bildsatz wurde vollständig ersetzt.

## Öffnen

index.html direkt im Browser öffnen. Die Navigation funktioniert auch ohne Server über URL-Fragmente.

## Vorbereitet

- Startseite
- Menschen: ein Teamfoto in 16:9 und sechs Porträts in 5:7
- Niklaus Gassmann: das ebenfalls mitgelieferte Aussendienst-Foto
- Räume: interaktive schematische Raumübersicht
- Philosophie
- Was wir machen: für die spätere Ausarbeitung vorbereitet
- Miteinander: Richtlinienentwurf, Ansprechpersonen und Meldeverfahren noch offen
- Das Spiel: direkt eingebundene Datei The_Office_Prototype_v0.8.html, mit Vollbildoption, Pseudonymen, Best Of und Enter zum nächsten Level
- Intern und Zugang: Gestaltungsvorschau für sechs persönliche Konten und einen gemeinsamen Chat

## Fotos einsetzen

Die zugeordneten Fotos liegen in assets. Als Quellen dienen Team Büro.png, Cäsar Künzi.png, Alejandra Gaviria.png, Daniel Rabenstein.png, Jürgen Baumann.png, Fausto Kraut_Spedition.png und Niklaus Gassmann_Aussendienst.jpg. Sie wurden für die Website komprimiert. Die gelieferten Motive wurden nicht verändert. Die Bildpfade stehen in photos am Anfang von app.js.

Schlüssel: team, caesar, alejandra, daniel, juergen, fausto, niklaus.

Die Bildflächen behalten ihr Seitenverhältnis. Der 16:9-Ausschnitt des neuen Teamfotos wurde nach oben ausgerichtet, damit alle Köpfe sichtbar bleiben. Die Porträts verwenden einen leicht nach oben ausgerichteten Bildausschnitt in 5:7.

## Spiel

games/das-buero.html enthält unverändert die Datei The_Office_Prototype_v0.8.html aus dem Bürospiel-Chat. Sie wird in einem iframe eingebunden. Ton, Pseudonyme, lokale Bestleistungen, Best Of und Enter zum nächsten Level bleiben Bestandteil des Originalspiels. Für die gemeinsame Online-Bestenliste müssen die beiden Konfigurationswerte im Spiel gesetzt und die SQL-Datei aus docs im eigenen Supabase-Projekt ausgeführt werden. Die mitgelieferte Originalanleitung betrifft die Rangliste; sie richtet weder die sechs Büro-Logins noch den Teamchat ein.

## GitHub-Paket

Das exportierte GitHub-Paket enthält die Dateien aus dist direkt auf der obersten Ebene und die Online-Unterlagen im Ordner docs. Es enthält keine Sites-Projektkennung, keine Git-Historie, keine echten Passwörter und keine privaten API-Schlüssel. Die zusätzliche Datei START_HIER.md beschreibt Upload und offenen Hosting-Anschluss.

## Persönliche Konten

Es wurden bisher keine persönlichen Konten angelegt. Die sechs Namen in der Anmeldemaske sind Gestaltungselemente. Für Cäsar, Alejandra, Daniel, Jürgen, Fausto und Niklaus existiert noch kein aktives Passwort. Die genannten Tiernamen wurden nicht als Zugangsdaten aktiviert.

## Privatsphäre und Anmeldung

Der Entwurf enthält keine echten Passwörter, Authentifizierung oder Chatverbindung. Die Anmeldemaske prüft keine Zugangsdaten und speichert nichts. Der Link zum Öffnen des Entwurfs ist für die Gestaltungsvorschau gedacht.

Die private Sites-Vorschau ist durch den Zugriffsschutz der Plattform geschützt. Dieser Schutz ist unabhängig von der gezeichneten Anmeldemaske.

Für die endgültige Website mit sechs persönlichen Logins muss die gesamte Auslieferung einschliesslich Unterseiten, Bilder und Spieldatei serverseitig geschützt werden. Ein privates GitHub-Repository oder eine JavaScript-Anmeldemaske alleine schützt eine veröffentlichte statische Website nicht. Nicht als öffentliche GitHub-Pages-Website veröffentlichen.

Für das spätere private GitHub-Repository kann der Inhalt dieses Ordners übernommen werden. Die endgültige Bereitstellung und Anmeldung werden an das gewählte Hosting angeschlossen.
