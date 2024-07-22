import { Link } from "react-router-dom"
import logo from './logo.png';
import styles from './Cabecalho.module.css'
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho(){
    
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    HOME
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    FAVORITOS
                </CabecalhoLink>
            </nav>
        </header>
    )

}
export default Cabecalho