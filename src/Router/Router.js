import { Route, Routes, Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu'
import { Home } from '../Home/Home';
import { Administrador } from '../Administrador/Administrador';
import { Tienda } from '../Tienda/Tienda';
import { Footer } from '../Footer/Footer';

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
        </Routes>


        <footer>
            <Footer/>
        </footer>
        </>

    );

}