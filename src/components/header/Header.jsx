import './Header.css';
import logo from '../../img/Logo.png';


const Header = () =>{
    return (
        <nav className="header">
             <div className="logo">
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <a href="/">
                <h1 className='titulo'>
                    Terra Marte Express
                </h1>
            </a>
        </nav>
    )
};

export default Header;