import "../css/Navbar.css"
import logo from '../images/logo.png';
import uk from '../images/royaume-uni.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="Logo du portfolio de Basil L'hote" className="imgLogo"></img>
                </a>
                <a href="en/index.html">
                    <img src={uk} alt="Drapeau du royaume uni permettant d'avoir le site en anglais" className="drapeau"></img>
                </a>
            </div>
            <ul className="nav-links">
              <div className="menu">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="/">A propos de moi</a></li>
                <li className="services">
                  <a href="/">Projets</a>
                  <ul className="dropdown">
                    <li><a href="/">Dropdown 1 </a></li>
                    <li><a href="/">Dropdown 2</a></li>
                    <li><a href="/">Dropdown 2</a></li>
                    <li><a href="/">Dropdown 3</a></li>
                    <li><a href="/">Dropdown 4</a></li>
                  </ul>
                </li>
                <li><a href="/">CV</a></li>
                <li><a href="/">Contact</a></li>
              </div>
            </ul>
          </nav>
    );
}

export default Navbar;
