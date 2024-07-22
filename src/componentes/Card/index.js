import { useFavoritoContext } from '../../contextos/Favoritos'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar1.png'
import iconeDesfavotritar from'./desfavoritar.png'
import { Link } from 'react-router-dom';


function Card({id,titulo,capa}){
    const {favorito , adicionarFavorito} = useFavoritoContext();

    const ehFavorito = favorito.some((fav)=> fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavotritar

    return(
        <div className={styles.contanier}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img 
                src={icone} 
                alt='Favoritar filme' 
                className={styles.favoritar}
                onClick={()=>{
                    adicionarFavorito({id,titulo,capa})
                }}/>
        </div>
        
    )
}
export default Card