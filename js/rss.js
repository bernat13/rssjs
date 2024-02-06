fetch('rss.xml')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data =>  {
        var rss = data.querySelector('rss');

            // en data tengo el contenido del xml SIEMPRE que el RSS esté en mi mismo servidor.
            // Para eso, usaremos el live server de Visual Studio Code.
            console.log(rss);
    }


    );
