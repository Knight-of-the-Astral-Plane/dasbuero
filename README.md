# DAS BÜRO · Geschützter Zugang 05

Der gesamte Inhalt der Website, Fotos und Spiel liegen AES-256-GCM-verschlüsselt in index.html. Sechs persönliche Passwörter öffnen denselben Inhalt. Passwörter stehen nicht im Website-Paket. Die Schlüssel werden mit PBKDF2-SHA-256 und 600000 Durchläufen abgeleitet. HTTPS und ein aktueller Browser sind erforderlich.

## Auf GitHub ersetzen

Den gesamten Inhalt dieses Ordners direkt auf die oberste Repository-Ebene hochladen und vorhandene Dateien ersetzen. index.html, app.js, style.css, assets und games gehören auf diese Ebene. Alle Ersatzdateien sind notwendig: Sie überschreiben die bisherigen unverschlüsselten Fotos und die separate Spiel-Datei. Weitere, selbst angelegte Kopien alter Fotos oder HTML-Dateien ebenfalls entfernen. Repository privat lassen. Nach erfolgreicher Pages-Veröffentlichung vollständig neu laden.

Die alten externen Foto-URLs enthalten danach nur ein leeres Pixel, der alte Spiel-Link führt zur Anmeldung. Bereits heruntergeladene Kopien können nicht zurückgerufen werden.

## Anmeldung

Vollständigen Vor- und Nachnamen sowie das persönliche Passwort eingeben. Gross-/Kleinschreibung und Akzente sind beim Namen tolerant. Passwörter müssen exakt stimmen. Jede Person kann die ganze Website öffnen. Neuladen und Abmelden sperren sie wieder. Keine Passwörter in dieses Repository hochladen.

## Grenzen

Dies sind individuelle Entschlüsselungszugänge für eine statische Website, keine serververwalteten Benutzerkonten. Kontenverwaltung, Passwortänderungen und gemeinsamer Chat benötigen einen späteren Ausbau. Zum Sperren eines Zugangs muss eine neue Version mit neuem Inhaltsschlüssel erzeugt werden. Bereits erhaltene Inhalte bleiben der jeweiligen Person bekannt. Der Chat bleibt als Vorschau gekennzeichnet. Spielstand und Bestenliste sind lokal, bis ein Online-Dienst verbunden wird. Die frühere Sites-Vorschau wird durch diesen GitHub-Export nicht verändert.
