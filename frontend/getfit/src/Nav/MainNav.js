import React, { useContext } from "react"
import { NavLink } from "react-router-dom"

import "./MainNav.css"

const MainNav = () => {

    let navLinks

    navLinks = (
        <header className="nav-header">
            <div className="nav-content">
                <NavLink to="/">
                    <h1>GetFit</h1>
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
                            <NavLink to="/workout/62df2c8a3926fe1b542baacd/view">
                                <p>Workouts</p>
                            </NavLink>
                        </li>

                        <li>
                            <p>User</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )


    return (
        <div>
            { navLinks }
        </div>
    )
}

export default MainNav