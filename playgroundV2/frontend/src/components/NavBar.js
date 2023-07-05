import React from 'react'
import '../css/navBar.css'

const NavBar = ({ onChange }) => {

    const handleClick = (page) => {
        onChange(page);
    }

    return (
        <>
            <header class="clearfix">
            <div class="container">
                    <div class="header-left">
                        <h1>Your company</h1>
                    </div>
                    <div class="header-right">
                        <label for="open">
                            <span class="hidden-desktop"></span>
                        </label>
                        <input type="checkbox" name="" id="open" />
                        <nav>
                            <a onCLick={() => handleClick("Home")}>Home</a>
                            <a onCLick={() => handleClick("About")}>About</a>
                            <a onCLick={() => handleClick("Automotive")}>Automotive</a>
                            <a onCLick={() => handleClick("Peronal")}>Peronal</a>
                            <a onCLick={() => handleClick("Photoshoot")}>Photoshoot</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;