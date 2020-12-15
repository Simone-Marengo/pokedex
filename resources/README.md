These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/


IDEE
    - pokemon detail:
        usare lo slide, all'interno del singolo dettaglio permetterr slide a sinistra e a destra
        lo slide effettuato apre un componente uguale che carica il dettaglio in base all'id,
        a sinistra precedente e a destra maggiore
        ( ricaricare solo i dati o crearea tre slide, la prima e l'ultima (logiche) che servono
            solo a caricare i dati e a mostrare gli skeleton text, parte la chiamata, 
            se risponsde carica tutto altrimenti torna nella slide che conteneva i dati iniziali
            o precendentemente caricati)

        creare metodo che mostri, suddivisi per logica, tutti gli sprites, i default già presenti in pagina,
        per generations etc etc

        per ogni lista creare una search che non filtri (non può dato che i dati sono paginati) ma che 
        faccia una ricerca per stringa come nome o come id direttamente da api
        