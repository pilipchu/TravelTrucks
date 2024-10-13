import css from "./Type.module.css";

export default function Type() {
  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.checkboxs}>
        <label htmlFor="Van" className={css.checkbox}>
          <svg className={css.icon} width="32" height="32">
            <use href="../../imegas/symbol.svg#icon-bi_grid-1x2"></use>
          </svg>
          Van
        </label>
        <input
          className={css.input}
          type="radio"
          id="AC"
          name="Vehicle type"
          value={"Van"}
        />
        <label
          htmlFor="Fully-Integrated"
          style={{
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
          className={css.checkbox}
        >
          <svg className={css.icon} width="32" height="32">
            <use href="../../imegas/symbol.svg#icon-bi_grid"></use>
          </svg>
          Fully Integrated
        </label>
        <input
          className={css.input}
          type="radio"
          id="Fully-Integrated"
          name="Vehicle type"
          value={"Fully Integrated"}
        />
        <label htmlFor="Alcove" className={css.checkbox}>
          <svg className={css.icon} width="32" height="32">
            <use href="../../imegas/symbol.svg#icon-bi_grid-3x3-gap"></use>
          </svg>
          Alcove
        </label>
        <input
          className={css.input}
          type="radio"
          id="Alcove"
          name="Vehicle type"
          value={"Alcove"}
        />
      </div>
    </div>
  );
}
