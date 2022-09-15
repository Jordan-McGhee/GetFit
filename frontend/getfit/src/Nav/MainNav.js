import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/auth-context"

// import "./MainNav.css"

const MainNav = () => {
    const auth = useContext(AuthContext)

    let navLinks

    if (auth.isLoggedIn) {
        navLinks = (
            <header className="bg-gray-3 p-6">
                <div className="flex justify-between items-center">
                    <NavLink to="/">
                        <h1 className="text-4xl font-bold">GetFit</h1>
                    </NavLink>
    
                    <nav>
                        <ul className="flex max-w-lg border-black">
    
                            <li className="text-lg hover:scale-110">
                                <NavLink to="/learn">
                                    <p>Learn</p>
                                </NavLink>
                            </li>
    
                            <li className="ml-6 text-lg hover:scale-110">
                                <NavLink to="/workout/create">
                                    <p>Create</p>
                                </NavLink>
                            </li>
    
                            <li className="ml-6 text-lg hover:scale-110">
                                <NavLink to="/workout/all">
                                    <p>Workouts</p>
                                </NavLink>
                            </li>
    
                            <li onClick = { auth.logout } className = "hover:cursor-pointer ml-6 text-lg hover:scale-110">
                                <p>Logout</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    } else {
        navLinks = (
            <header className="bg-gray-3 p-6 flex">
                <h1 className="text-4xl font-bold m-auto">GetFit</h1>
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