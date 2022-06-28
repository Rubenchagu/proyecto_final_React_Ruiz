import logo from "../../Assets/LogoNft.jpg"
import "./NavBar.css"

const NavBar= ({children}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <div className="collapse navbar-collapse"></div> 
            <div className="collapse navbar-collapse"><img src={logo} alt="Logo NFT e-commerce" /></div>  
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">NFT Ruiz Market</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="./">Home
                                <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">{children}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar