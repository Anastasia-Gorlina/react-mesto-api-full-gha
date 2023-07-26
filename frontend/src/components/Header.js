function Header({children}) {
    
    
    return (
        <header className="header">
            <img className="header__logo" src={require('../images/Logo.svg').default} alt="Site name" />
            {children}
        </header>
        )
    }
        
export default Header;