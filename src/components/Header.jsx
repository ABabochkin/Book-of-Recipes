import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper teal lighten-1 " >
                <span className="brand-logo center"> Recipes </span>
                <ul id="nav-mobile" className="right">
                    <Link className='home' to='/' >Home </Link>
                </ul>
            </div>
        </nav>
    )
}
