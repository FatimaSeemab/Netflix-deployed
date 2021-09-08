import React, { useState, useEffect } from 'react'
import "./nav.css"
function Nav() {
    const [handleshow, setHandleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",
            () => {
                if (window.scrollY > 100) { setHandleshow(true) }
                else { setHandleshow(false) }

            });
        return () => { window.addEventListener("scroll") };
    }, [])
    return (
        <div className={`nav ${handleshow && "nav__black"}`}>
            <img className="nav__image"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />


        </div>
    )
}

export default Nav
