import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/auth-context"

import "./MainNav.css"

const MainNav = () => {
    const auth = useContext(AuthContext)

    let navLinks

    if (auth.isLoggedIn) {
        navLinks = (
            <header className="nav-header">
                <div className="nav-content">
                    <NavLink to="/">
                        <h1 className="text-4xl font-bold">GetFit</h1>
                    </NavLink>
    
                    <nav>
                        <ul>
    
                            <li>
                                <NavLink to="/learn">
                                    <p>Learn</p>
                                </NavLink>
                            </li>
    
                            <li>
                                <NavLink to="/workout/create">
                                    <p>Create</p>
                                </NavLink>
                            </li>
    
                            <li>
                                <NavLink to="/workout/all">
                                    <p>Workouts</p>
                                </NavLink>
                            </li>
    
                            <li onClick = { auth.logout }>
                                <p>Logout</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    } else {
        navLinks = (
            <header className="nav-header">
                <div className="nav-content">
                    <h1>GetFit</h1>
                </div>
            </header>
        )
    }

    


    return (
        <div>
            { navLinks }
        </div>
    )
}

export default MainNav