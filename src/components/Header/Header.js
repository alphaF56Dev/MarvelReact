import { Menu } from 'semantic-ui-react';
import './Header.scss';
import { useState } from 'react';
import {useNavigate, useLocation} from 'react-router';

export default function Header() {
    const currentPath = useLocation(); //Nos da el path actual
    const finalCurrentPath = currentPath.pathname.replace("/", ""); 

    const [activeItem, setActiveItem]  = useState("inicio");
    const history = useNavigate();

    const handleItemClic = (e, {name}) => {
        //console.log(e);
        //console.log(name);
        setActiveItem(name);
        history(name); //cambia a la pagina indicada
        //console.log('clickeando funcion');
    };

    return (
        <div className='header-menu'>
            <Menu secondary>
                <Menu.Item name='inicio' active={activeItem === "inicio"} onClick={handleItemClic} />
                <Menu.Item name='series' active={activeItem === "series"} onClick={handleItemClic} />
                <Menu.Item name='comics' active={activeItem === "comics"} onClick={handleItemClic} />
            </Menu>
        </div>
    );
}