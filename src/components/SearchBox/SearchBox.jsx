import { useState } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={css.container}>
      <label className={css.local} htmlFor="location">
        Location
      </label>
      <svg
        className={css.icon}
        width="20"
        height="20"
        style={{
          fill: isFocused ? "#101828" : "#6C717B", // Зміна кольору при фокусі
        }}
      >
        <use href="../../imegas/symbol.svg#icon-Map"></use>
      </svg>
      <input
        type="text"
        className={css.city}
        placeholder="City"
        id="location"
        onFocus={() => setIsFocused(true)} // Фокус
        onBlur={() => setIsFocused(false)} // Втрата фокусу
      />
    </div>
  );
}
