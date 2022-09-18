import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/auth-context"

// import "./MainNav.css"

const MainNav = () => {
    const auth = useContext(AuthContext)

    const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false)

    const hamburgerHandler = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    let navLinks

    if (auth.isLoggedIn) {
        navLinks = (
            <header className="bg-gray-3 p-6 m-auto border-b-2 ">

                <div className="m-auto max-w-3xl">

                {/* MOBILE MENUS */}

                <section className="md:hidden">

                    {/* CLOSED HAMBURGER */}

                    {
                        !isHamburgerOpen && 
                        <div className="flex items-center" onClick={ hamburgerHandler }>

                            <div className="space-y-2 mr-6" >
                                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                            </div>

                            <NavLink to="/" className='self-center'>
                                <h1 className="text-4xl font-bold">GetFit</h1>
                            </NavLink>
                        </div>
                    }

                    {/* OPEN HAMBURGER */}

                    { isHamburgerOpen && 
                        <div className=""  onClick={ hamburgerHandler }>

                            <div>

                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>

                            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-start justify-between">

                                <li className="border-b border-black my-2 uppercase">
                                    <NavLink to="/workout/create">
                                        <p>Create</p>
                                    </NavLink>
                                </li>

                                <li className="border-b border-black my-2 uppercase">
                                    <NavLink to="/workout/all">
                                        <p>Workouts</p>
                                    </NavLink>
                                </li>

                                <li onClick={auth.logout} className="border-b border-black my-2 uppercase">
                                    <p>Logout</p>
                                </li>

                            </ul>

                        </div>
                    }
                    

                </section>

                {/* MEDIUM AND LARGER MENU */}

                <div className="hidden md:flex justify-between items-center">
                    <NavLink to="/">
                        <h1 className="text-4xl font-bold">GetFit</h1>
                    </NavLink>

                    <nav>
                        <ul className="flex">

                            {/* <li className="text-lg hover:scale-110">
                                <NavLink to="/learn">
                                    <p>Learn</p>
                                </NavLink>
                            </li> */}

                            <li className="ml-6 text-xl hover:scale-110 uppercase">
                                <NavLink to="/workout/create">
                                    <p>Create</p>
                                </NavLink>
                            </li>

                            <li className="ml-6 text-xl hover:scale-110 uppercase">
                                <NavLink to="/workout/all">
                                    <p>Workouts</p>
                                </NavLink>
                            </li>

                            <li onClick={auth.logout} className="hover:cursor-pointer ml-6 text-xl hover:scale-110 uppercase">
                                <p>Logout</p>
                            </li>
                        </ul>
                    </nav>
                </div>

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
        <div className="sticky top-0">
            {navLinks}
        </div>
    )
}

export default MainNav