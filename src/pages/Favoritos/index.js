import Banner from "../../componentes/Banner"
import Card from "../../componentes/Card"
import Titulo from "../../componentes/Titulo"
import styles from './Favoritos.module.css'
import { useFavoritoContext } from "../../contextos/Favoritos"


function Favoritos(){

    const {favorito} = useFavoritoContext();


    return(
        <>
        <Banner imagem = 'favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.contanier}>
        {favorito.map((fav)=>{
          return <Card {...fav} key={fav.id} />
          })}
        </section>

        </>

    )
}
export default Favoritos