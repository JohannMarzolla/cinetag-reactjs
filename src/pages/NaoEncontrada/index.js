import Titulo from '../../componentes/Titulo'
import styles from './NaoEncontrada.module.css'

function NaoEncontrada(){
    return(
     <section  className={styles.contanier}>
         <h2>OPS!</h2>
         <p>pagina não encontrada</p>

     </section>
       

    )
}

export default NaoEncontrada