import { useState } from "react";
import css from "./Filter.module.css";

export default function Filter() {
  const [isActive, setIsActive] = useState(false);

  const handle = (event) => {
    setIsActive(event.target.checked);
    console.log(event.target.value);
  };

  return (
    <div className={css.container}>
      <h2 className={css.filter}>Filter</h2>
      <div className={css.filter_content}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.checkboxs}>
          <label htmlFor="AC" className={css.checkbox}>
            <svg className={css.icon} width="32" height="32">
              <use href="../../imegas/symbol.svg#icon-wind"></use>
            </svg>
            AC
          </label>
          <input
            className={css.input}
            type="checkbox"
            id="AC"
            name="Vehicle equipment"
            value={"AC"}
            checked={isActive}
            onChange={handle}
          />
          <label htmlFor="Automatic" className={css.checkbox}>
            <svg className={css.icon} width="32" height="32">
              <use href="../../imegas/symbol.svg#icon-diagram"></use>
            </svg>
            Automatic
          </label>
          <input
            className={css.input}
            type="checkbox"
            id="Automatic"
            name="Vehicle equipment"
            value={"Automatic"}
            checked={isActive}
            onChange={handle}
          />
          <label htmlFor="Kitchen" className={css.checkbox}>
            <svg className={css.icon} width="32" height="32">
              <use href="../../imegas/symbol.svg#icon-cup-hot"></use>
            </svg>
            Kitchen
          </label>
          <input
            className={css.input}
            type="checkbox"
            id="Kitchen"
            name="Vehicle equipment"
            value={"Kitchen"}
            checked={isActive}
            onChange={handle}
          />
          <label htmlFor="TV" className={css.checkbox}>
            <svg className={css.icon} width="32" height="32">
              <use href="../../imegas/symbol.svg#icon-tv"></use>
            </svg>
            TV
          </label>
          <input
            className={css.input}
            id="TV"
            type="checkbox"
            name="Vehicle equipment"
            value={"TV"}
            checked={isActive}
            onChange={handle}
          />
          <label htmlFor="Bathroom" className={css.checkbox}>
            <svg className={css.icon} width="32" height="32">
              <use href="../../imegas/symbol.svg#icon-bi_droplet"></use>
            </svg>
            Bathroom
          </label>
          <input
            className={css.input}
            type="checkbox"
            id="Bathroom"
            name="Vehicle equipment"
            value={"Bathroom"}
            checked={isActive}
            onChange={handle}
          />
        </div>
      </div>
    </div>
  );
}
