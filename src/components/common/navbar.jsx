import React from "react";
import { Link} from "react-dom"

const NavBar = (props) => {
    const { active } = props; 

    return (
        <React.Fragment>
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/"> Home </Link>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </React.Fragment>

    );
}

export default NavBar;