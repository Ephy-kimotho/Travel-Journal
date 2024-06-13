import Logo from "../assets/Logos/Logo.png"

function Header(){
    return (
        <header className="header">
            <img src={Logo} alt="A logo"  className="header--logo"/>
            <h1 className="header--text">my travel journal.</h1>           
        </header>
    )
}

export default Header