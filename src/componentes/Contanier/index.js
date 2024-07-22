import styles from './Contanier.module.css'

function Contanier({children}){
    return(
        <section className={ styles.contanier}>
            {children}
        </section>

    )
}
export default Contanier