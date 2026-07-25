import React, { useState } from 'react'
import './Navbar.css'
import menuOpenIcon from '../assets/images/menu_icon.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <div className='navbar'>
      <button className='navbar-brand'>Sabo</button>
      <ul className="nav-menu" style={{ right: menuOpen ? '0' : '-350px' }}>
        <button className='nav-mob-close' onClick={toggleMenu} type="button">
          ×
        </button>
        {['home', 'about', 'service', 'mywork', 'contact'].map((item) => (
          <li key={item}>
            <a className='anchor-link' href={`#${item}`}>
              <p
                onClick={() => {
                  setActiveMenu(item)
                  if (menuOpen) toggleMenu()
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <div className="connect">
        <a className='anchor-link' href='#contact'>Connect with Me</a>
      </div>
      <img
        src={menuOpenIcon}
        onClick={toggleMenu}
        alt="Toggle menu"
        className='menu-toggle'
      />
    </div>
  )
}

export default Navbar
