import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Contanier from "../../componentes/Contanier";
import FavoritosProvider from "../../contextos/Favoritos";
import Rodape from "../../componentes/Rodape";

function PaginaBase(){
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Contanier>
                    <Outlet/>
                </Contanier>
            </FavoritosProvider>
            <Rodape/>


        </main>
    )
}
export default PaginaBase