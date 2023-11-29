import { Link } from "react-router-dom";

const Nav = (props) =>{
    return(
    <nav>
        <ul>
            <li><Link to ="/">Inicio</Link></li>
            <li><Link to ="/especialidades">Especialidades</Link></li>
            <li><Link to ="/trabajos">Trabajos</Link></li>
            <li><Link to ="/contactanos">Contactanos</Link></li>
            <li><Link to ="/ubicacion">Ubicacion</Link></li>
        </ul>
    </nav>
    )
}


export default Nav;