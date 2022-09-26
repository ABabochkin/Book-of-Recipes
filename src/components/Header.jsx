import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper  pink darken-3">
                <h1 className="brand-logo center" style={{marginTop: '15px'}} >Book of Recipes</h1>
                <div className='links right' >
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                </div>
            </div>
        </nav>
    )
}
