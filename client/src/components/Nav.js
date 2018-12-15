import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => (
  <header className='cd-morph-dropdown'>
    <div className='mobile-logo'>
      <Link to='/' className='label'>
        <div className='logo'>Logo</div>
      </Link>
    </div>
    <a href='#0' className='nav-trigger'>
      Open Nav
      <span aria-hidden='true' />
    </a>

    <div className='container p-0'>
      <nav className='main-nav'>
        <ul className='left'>
          <li>
            <Link to='/'>
              <div className='logo'>Logo</div>
            </Link>
          </li>
        </ul>
        <ul className='right'>
          <li>
            <Link to='/'>Link 1</Link>
          </li>

          <li>
            <Link to='/'>Link 2</Link>
          </li>

          <li>
            <Link to='/'>Link 3</Link>
          </li>
        </ul>
      </nav>
    </div>

    <div className='morph-dropdown-wrapper'>
      <div className='dropdown-list'>
        <ul>
          <li className='dropdown links'>
            <Link to='/portfolio' className='label'>
              Link 1
            </Link>
          </li>

          <li className='dropdown links'>
            <Link to='/' className='label'>
              Link 2
            </Link>
          </li>

          <li className='dropdown links'>
            <Link to='/' className='label'>
              Link 3
            </Link>
          </li>
        </ul>

        <div className='bg-layer' aria-hidden='true' />
      </div>
    </div>
  </header>
)

export default Nav
