const PAISES = prompt("a que pais quieres viajar")

const GROSERIAS_COLOMBIANAS = ["un hijueputa","una gonorrea", "un malparido", "un carechimba", "un pirobo", "un cacorro"]

const GROSERIAS_ESPANOLAS = ["Gilipollas", "retrasado", "imbecil", "un tonto de cojones"]

const GROSERIAS_MEXICANAS = ["un Hijo de puta", "un culero", "un meco", "un pendejo"]

if(PAISES == "Colombia" || PAISES == "colombia" || PAISES == "COLOMBIA"){
    for(let i = 0; i < GROSERIAS_COLOMBIANAS.length; i++){

        let groseriasColombianas = GROSERIAS_COLOMBIANAS[i];
        
        document.write(`si viajaras a ${PAISES}, serías <b>${groseriasColombianas}</b> <br>`)
        
        }

    }

else if(PAISES == "ESPAÑA" || PAISES == "españa" || PAISES == "España"){
    for(let i = 0; i < GROSERIAS_ESPANOLAS.length; i++){

        let groseriasDeEspania = GROSERIAS_ESPANOLAS[i];
        
        document.write(`si viajaras a ${PAISES}, serías <b>${groseriasDeEspania}</b> <br>`)
        
        
    }
}

else if(PAISES == "MEXICO" || PAISES == "mexico" || PAISES == "Mexico"){
    for(let i = 0; i < GROSERIAS_MEXICANAS.length; i++){
        
        let groseriasMexicanas = GROSERIAS_MEXICANAS[i]

        document.write(`si fueras a ${PAISES}, serías ${groseriasMexicanas}<br>`)
        
    }
}





