import logo from "../../Assets/LogoNft.jpg"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink} from "react-router-dom"

const species = [
    {
        id: 0,
        path: "/",
        specie: "Inicio"
    },
    {
        id: 1,
        path: "human",
        specie: "Humanos"
    },
    {
        id: 2,
        path: "alien",
        specie: "Aliens"
    },
    {
        id: 3,
        path: "humanoid",
        specie: "Humanoides"
    },
    {
        id: 4,
        path: "mythological creature",
        specie: "Mitológicos"
    }
]
const NavBar= () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/"><img style={{width:"70px", height:"70px", margin:"10px"}} src={logo} alt="Logo RnM"/></NavLink>
                    <NavLink className="navbar-brand" to="/">Rick y Morty NFTs</NavLink>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {species.map((specie) => 
                                <NavLink key={specie.id} className="nav-link" to={specie.path}>{specie.specie}</NavLink>
                            )}
                            
                        </ul>
                    </div>

                    <NavLink to="/Cart"><CartWidget/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar