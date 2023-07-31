import { useRef } from 'react';
import { useState } from 'react';
import './Navbar.css'


function Navbar() {

    const navRef = useRef();

    const abertoNavBar = () => {
        navRef.current.classList.toggle("responsivo_nav")
    }

    const [navOpen, setnavOpen] = useState(false);

    const navOpener = ()=>{
        abertoNavBar();
        setnavOpen(!navOpen);
    }

    return (
        <div className='divBase'>
            <h1>Enpp</h1>
            <nav className='navegacao' ref={navRef}>
                <a href="/#">Inicio</a>
                <a href="/#">Edições anteriores</a>
                <a href="/#">Cronograma</a>
                <a href="/#">Incrições</a>                   
                <a href="/#">Submissão de trabalhos</a>
                <a href="/#">Organização</a>
            </nav>
            <div id={navOpen ? "" : "none"} className='div-botao-fechado'>
                <button className='nav-btn menu-celular-fechado' onClick={navOpener}>
                    <img src="imgs/Vector.svg" alt="Menu-fechado"/>
                </button>
                </div>
            <div id={navOpen ? "none" : ""} className='div-botao-aberto'>
            <button  className='nav-btn' onClick={navOpener}>
                    <img src="imgs/menu-hambuger.svg" alt="Menu-aberto"/>
            </button>
            </div>
        </div>
    );
    
}

export default Navbar;