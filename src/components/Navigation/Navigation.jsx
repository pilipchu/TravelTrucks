import {NavLink} from 'react-router-dom'
import clsx from 'clsx'
import css from './Navigation.module.css'

const getLinkClass = ({isActive}) => {
   return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
   return(
      <header className={css.header}>
         <svg className={css.icon} width='136' height='16'>
            <use href='../../imegas/symbol.svg#icon-Logo'></use>
            </svg>
         <nav className={css.nav}>
            <ul className={css.list}>
               <li>
                  <NavLink to= '/' className={getLinkClass}>Home</NavLink>
               </li>
               <li>
                  <NavLink to='/catalog' className={getLinkClass}>Catalog</NavLink>
               </li>
            </ul>
      </nav>
      </header>
   )
}