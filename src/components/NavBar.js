import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2  mb-3 shadow-xl">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
             <NavLink className="px-1 py-2 flex items-center text-lg uppercase font-bold leading-snug text-dark hover:opacity-75" to='/home'>E-nventory</NavLink>
              <button
                className="text-dark cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                <NavLink className="px-4 pt-4 flex items-center text-xs uppercase font-bold leading-snug text-dark hover:opacity-75" to='/employee'>Assets</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="px-4 pt-4 flex items-center text-xs uppercase font-bold leading-snug text-dark hover:opacity-75" to='/dashboard'>Dashboard</NavLink>
                </li>
                <li className="nav-item">
                <p className="px-4 pt-3 flex items-center text-xs  font-bold leading-snug text-dark hover:opacity-75">Name <br/> Role</p>
                </li>
                <button className="px-4 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar
