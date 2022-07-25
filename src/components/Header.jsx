import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import search from '../assets/search.svg'
import menu from '../assets/menu.svg'

export function Header(){
  return(
    <header>
      <nav>
         <ul className='flex items-center justify-between h-24'>
            <img src={logo} alt="Pizza shid" className='w-32 md:w-40'/>
            
            <div className='hidden lg:flex lg:items-center lg:justify-center lg:gap-9'>
              <li>
                <NavLink to='/' className='text-primary'>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to='/'>
                  Menu
                </NavLink>
              </li>

              <li>
                <NavLink to='/'>
                  Delivery
                </NavLink>
              </li>

              <li>
                <NavLink to='/'>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to='/'>
                  Blog
                </NavLink>
              </li>
            </div>
            
            <div className='hidden lg:flex lg:items-center lg:justify-center lg:gap-6'>
              <li>
                <NavLink to='/'>
                  <img src={search} alt="Search for products" />
                </NavLink>
              </li>
              
              <li>
                <NavLink to='/'>
                  <img src={cart} alt="Go to cart" />
                </NavLink>
              </li>

              <li>
                <NavLink to='/'>
                  <div className='w-[100px] h-10 flex items-center justify-center bg-primary font-medium uppercase text-white rounded-3xl'>
                    sign in
                  </div>
                </NavLink>
              </li>
            </div>

            <button className='lg:hidden'>
              <img src={menu} className="w-6"/>
            </button>
         </ul>
      </nav>
    </header>
  ) 
}