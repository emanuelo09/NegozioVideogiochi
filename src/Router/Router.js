import { Route, Routes, Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu'
import { Home } from '../Home/Home';
import { Administrador } from '../Administrador/Administrador';

export function Router (){

    return(

        <>

        <header>
            <Menu/>
        </header>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/administrar' element={<Administrador/>} />
        </Routes>

        </>

    );

}