# NetzeDigital Component Factory

Storybook, welches die auf Material UI Design basierenden Komponentent im Kleid der Netze BW CI / CD - Richtlinien zeigt.
Basierend auf React Material UI, Styled Components und Next.js.

Beispiele und Dokumentation der Komponenten finden sich in Storybook.

Stellt per npm package (Name und Ort ist noch zu definiereren) die dargestellten Komponenten, das Theme und weitere Assets und Helferlein zentral zur Verfügung.

Zu Dummyzwecken wird aktuell die Bibliothek als .tgz-Datei zur Verfügung gestellt.

### npm-Skripte

-   **npm run storybook** - Startet Storybook
-   **npm run build-storybook** - Buildet Storybook
-   **npm run build**
    -   Baut die Bibliothek (tsc compile, Anpassung package.json etc.)
-   **npm run pack** - Packt die Inhalte von /dist als .tgz zur lokalen Installation der Bibliothek
-   **npm run publish** - Führt prettier per CLI im Terminal aus; Dateien werden formatiert.
