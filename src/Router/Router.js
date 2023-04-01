import { Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu/Menu'
import { Home } from '../Home/Home';
import { Administrador } from '../Administrador/Administrador';
import { Tienda } from '../Tienda/Tienda';
import { Footer } from '../Footer/Footer';
import { AmpliarInfo } from '../AmpliarInfo/AmpliarInfo';

export function Router (){

    return(

        <>

        <header>
            <Menu/>
        </header>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/administrar' element={<Administrador/>} />
            <Route path='/productos' element={<Tienda/>} />
            <Route path='/compras' element={<AmpliarInfo/>}/>
        </Routes>


        <footer>
            <Footer/>
        </footer>
        </>

    );

}