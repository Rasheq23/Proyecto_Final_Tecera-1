console.log("Cards Cargado");

const dataCards = [
    {
        "title": "PlayStation 5",
        "url_image": "./Images/ps5.png",
        "desc": "La consola de última generación de Sony, con gráficos impresionantes y una biblioteca de juegos creciente.",
        "cta": "Ver más...",
        "link": "https://www.playstation.com/ps5"  
    },

    {
        "title": "Nintendo Switch",
        "url_image": "./Images/switch.png",
        "desc": "La consola híbrida de Nintendo que ha conquistado a los jugadores con su versatilidad y catálogo de juegos.",
        "cta": "Ver más...",
        "link": "https://www.nintendo.com/switch" 
    },

    {
        "title": "Xbox Series X",
        "url_image": "./Images/xbox.png",
        "desc": "La consola más potente de Microsoft, diseñada para juegos en 4K y con un rendimiento sin igual.",
        "cta": "Ver más...",
        "link": "https://www.xbox.com/series-x"  
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            //Llamar a la función
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class='card-item' id="card-number-${index}">
                <img src="${item.url_image}" alt="${item.title}"/>
                    <div class='card-info'>
                        <p class='card-title'>${item.title}</p>
                        <p class='card-desc'>${item.desc}</p>
                        <a class='card-cta' target='_blank' href='${item.link}'>${item.cta}</a>
                     </div>
                </div>`
            )
        } 
    }
    CARD.init();
})();
