import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainPages = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainPages;