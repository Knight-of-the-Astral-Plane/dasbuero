# DAS BÜRO · Update 06

## Auf GitHub hochladen
Den Inhalt dieses Pakets direkt auf die oberste Ebene des Repositorys hochladen und die bisherigen Dateien ersetzen. index.html und buero-config.json müssen dort nebeneinander liegen. assets und games enthalten schützende Ersatzdateien für die früheren direkten Foto- und Spiel-URLs. Nach der Pages-Veröffentlichung die Seite vollständig neu laden.

Die sechs bestehenden Namen und Passwörter bleiben gültig. Zusätzlich gibt es den gemeinsamen Zugang Gast; sein Passwort wird separat weitergegeben. Nach der Anmeldung führt der sichtbare Link Teamchat sowie Menü > Teamchat in die Kaffeeküche. Nachrichten werden im gemeinsamen Supabase-Projekt gespeichert und regelmässig aktualisiert. Enter sendet, Shift + Enter setzt eine neue Zeile. Es gibt einen gemeinsamen Raum für das Team und Gäste.

## Spiel v0.9
All attempts zeigt ab jetzt jeden gestarteten Levelversuch: abgeschlossen, oberhalb PAR, neu gestartet oder unterbrochen. Ein Versuch beginnt mit der ersten Spielaktion. Jeder Schritt wird lokal gesichert; zusätzlich gibt es einen regelmässigen Zwischenstand. Bei einer Unterbrechung bleiben die bisherigen Aufgaben und Schritte erhalten. Die Liste hat keine feste Anzahlgrenze; für Gerätesicherungen gibt es einen JSON-Export.

Die Synchronisierung zum gemeinsamen Speicher läuft während des Spiels. Bei Verbindungsausfällen bleiben ausstehende Versuche lokal gespeichert und werden bei erneutem Öffnen des Spiels mit demselben persönlichen Zugang nachgereicht. Der jeweilige Versuch bleibt dem ursprünglichen Zugang zugeordnet. Best Of berücksichtigt auch Personen mit weniger als zehn abgeschlossenen Levels. Nach Anzahl abgeschlossener Levels entscheiden Zeit und Schritte. PAR bleibt die Bedingung, um das nächste Level freizuschalten.

In Alias-Feldern werden Spielbefehle ausgesetzt. Alle Buchstaben, Leerzeichen und normale Bearbeitungstasten funktionieren. Vorhandene Bestzeiten und Level-Freischaltungen bleiben auf demselben Gerät erhalten. Frühere, damals nicht gespeicherte Fehlversuche lassen sich nicht nachträglich rekonstruieren.

## Zugang und Suchmaschinen
Die Website, Fotos und das Spiel bleiben in index.html verschlüsselt. Individuelle Dienste-Zugangsschlüssel sind jeweils separat mit dem persönlichen Passwort verschlüsselt. Passwörter und unverschlüsselte Dienste-Schlüssel stehen nicht im Website-Paket.

Die Anmeldung und der Inhalt enthalten noindex. Der direkte Link funktioniert weiterhin. Suchmaschinen-Ausschluss ist keine Garantie, dass niemand die URL entdeckt.

## Für die Verwaltung
buero-config.json enthält ausschliesslich die öffentliche Adresse des bereitgestellten Dienstes. Sie ist bereits eingerichtet. Keine geheimen Supabase-Schlüssel, Passwörter oder Zugangsdaten-Dateien auf GitHub hochladen.

Die Serverquellen werden separat aufbewahrt. Mitarbeiter können im Dienst gesperrt werden; bereits heruntergeladene Website-Inhalte lassen sich dadurch nicht zurückrufen. Zum Ändern des Website-Zugangs ist eine neu verschlüsselte Version erforderlich.

## Prüfung
Alle sechs bestehenden Passwörter und die Ablehnung falscher Passwörter wurden geprüft. Der laufende Dienst wurde mit allen sechs Zugängen geprüft. Nachrichtenaustausch, Wiederholung ohne Duplikat, serverseitige Absenderzuordnung, Speicherung unvollständiger Versuche und Rangliste für Teilkampagnen bestanden den Test. Temporäre Testdaten wurden anschliessend gelöscht. Ein vollständiger visueller Browsertest war in dieser Umgebung nicht verfügbar.
