import { NavLink } from 'react-router-dom'
import css from './HomePage.module.css'

export default function HomePage (){
   return(
      <main>
         <div className={css.conteiner}>
            <div>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            </div>
            <NavLink to='/catalog'>View Now</NavLink>
         </div>
      </main>
   )
}