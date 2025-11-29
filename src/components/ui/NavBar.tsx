import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='py-4'>
      <div className=' flex items-center justify-between'>
        <img src={logo} alt='Positivus logo' width={230} />

        <button className='lg:hidden block' onClick={() => setOpen(!open)}>
          {open ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>

        <ul className='hidden lg:flex gap-10 items-center text-xl'>
          <li>
            <NavLink to='/'>About us</NavLink>
          </li>
          <li>
            <NavLink to='/'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/'>Use Cases</NavLink>
          </li>
          <li>
            <NavLink to='/'>Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/'>Blog</NavLink>
          </li>
          <Button variant='light'>Request a quote</Button>
        </ul>
      </div>

      {open && (
        <div className='lg:hidden mt-4 px-4'>
          <ul className='flex flex-col gap-5 text-lg'>
            <li>
              <NavLink to='/'>About us</NavLink>
            </li>
            <li>
              <NavLink to='/'>Services</NavLink>
            </li>
            <li>
              <NavLink to='/'>Use Cases</NavLink>
            </li>
            <li>
              <NavLink to='/'>Pricing</NavLink>
            </li>
            <li>
              <NavLink to='/'>Blog</NavLink>
            </li>
            <Button variant='light'>Request a quote</Button>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
