<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GamingWorld</title>
    <link rel="stylesheet" href="./styles/main.css">
</head>
<body>

   
    <menu>
        <div class="menu-izquierda">
            <img src="./Images/videojuegos-banner.png" alt="GamingWorld Logo">
        </div>

        <div class="menu-container">
            <div class="hamburger_icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-derecha">
                <a href="#juegos" class="enlaces-menu-derecha">Juegos</a>
                <a href="#consolas" class="enlaces-menu-derecha">Consolas</a>
                <a href="#contacto" class="enlaces-menu-derecha">Contacto</a>
            </div>
        </div>
    </menu>

   
    <section id="juegos">
        <h2>Juegos</h2>
        <p>Aquí podrás explorar una amplia variedad de juegos de todos los géneros.</p>
        <div class="main-accordion-container"></div>
    </section>

   
    <section id="consolas">
        <h2>Consolas</h2>
        <p>Conoce las consolas más populares y sus características impresionantes.</p>
        <div class="card-list"></div>
    </section>

  
    <section id="contacto">
        <h2>Contacto</h2>
        <p>Ponte en contacto con nosotros para cualquier consulta o comentario.</p>
        <form action="#" method="post">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <script src="./scripts/main.js"></script>
</body>
</html>
