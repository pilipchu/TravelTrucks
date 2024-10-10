import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={css.conteiner}>
        <div className={css.text}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text_item}>
            You can find everything you want in our catalog
          </p>
        </div>
        <NavLink className={css.link} to="/catalog">
          View Now
        </NavLink>
      </div>
    </main>
  );
}
