import {NavLink} from 'react-router-dom'
import clsx from 'clsx'
import css from './Navigation.module.css'

const getLinkClass = ({isActive}) => {
   return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
   return(
      <nav className={css.nav}>
         <svg className={css.icon} width='136' height='16'>
            <use href='../../imegas/symbol.svg#icon-Logo'></use>
            </svg>
            <ul>
               <li>
                  <NavLink to= '/' className={getLinkClass}>Home</NavLink>
               </li>
               <li>
                  <NavLink to='/catalog' className={getLinkClass}>Catalog</NavLink>
               </li>
            </ul>
      </nav>
   )
}