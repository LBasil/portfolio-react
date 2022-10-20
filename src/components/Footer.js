import "../css/Footer.css"

function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <h3>Si tu y as pensé, alors tu peux le coder.</h3>
                <p>La seule limite au web se trouve entre le clavier et la chaise.</p>
            </div>
             <div class="footer-bottom">
                <p>copyright &copy;2022 <a href="#">L'hôte Basil</a></p>
                <div class="footer-menu">
                    <ul class="f-menu">
                       <li><a href="index.html">Accueil</a></li>
                       <li><a href="">A propos de moi</a></li>
                       <li><a href="">Projets</a></li>
                       <li><a href="">CV</a></li>
                       <li><a href="">Contact</a></li>
                    </ul>
                   </div>
             </div>
        </footer>
    );
}

export default Footer;