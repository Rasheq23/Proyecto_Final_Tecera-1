console.log("Accordion Cargado");

const dataAccordion = [
    {
        "title": "Juegos más Vendidos",
        "desc": "Explora los juegos más vendidos de la historia, desde clásicos hasta los últimos lanzamientos.",
        "url": "https://vandal.elespanol.com/noticia/1350759936/los-juegos-mas-vendidos-de-la-historia-hasta-la-fecha-2023//juegos-mas-vendidos"
    },
    {
        "title": "Consolas Populares",
        "desc": "Descubre las consolas que han marcado la historia del gaming, desde la NES hasta la PS5.",
        "url": "https://www.pccomponentes.com/consolas-mas-vendidas-ranking?msockid=21260cff3f27635c34671cfe3e4b6210//consolas-populares"
    },
    {
        "title": "Géneros de Videojuegos",
        "desc": "Conoce los diferentes géneros de videojuegos, desde RPGs hasta shooters y más.",
        "url": "https://www.ligadegamers.com/tipos-de-videojuegos//generos-videojuegos"
    },
];

(function () {

    let ACCORDION = {
        init: function () {
            let _self = this;
            //Llamamos a las funciones
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map(function (item) {
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            arrayRefs.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    _self.showTab(event.target);
                    _self.redirectToPage(event.target);
                });
            });
        },

        tplAccordionItem: function (item) {
            return (`<div class='accordion-item'>
                <div class='accordion-title'><p>${item.title}</p></div>
                <div class='accordion-desc'><p>${item.desc}</p></div>
                </div>`
            )
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active');
            if (activeTab) {
                activeTab.classList.remove('tab-active');
            }
            refItem.parentElement.classList.toggle('tab-active');
        },

        redirectToPage: function (refItem) {
            let itemTitle = refItem.textContent.trim();
            let itemData = dataAccordion.find(item => item.title === itemTitle);
            if (itemData && itemData.url) {
                window.location.href = itemData.url;
            }
        },
    }
    ACCORDION.init();
})();
