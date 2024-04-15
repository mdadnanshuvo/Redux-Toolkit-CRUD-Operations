import React from 'react'
import { Link } from 'react-router-dom'
import './navstyle.css';

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul className='nav-link'>
                <li><Link className='nav-item' to={'/'} >Home</Link></li>
                <li><Link className='nav-item' to={'/add-course'}>Add Course</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar