// import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div>
      <p>Filter</p>
      <div>
        <label>Vehicle equipment</label>
        <input type="checkbox" name="Vehicle equipment" value={"AC"} />
        <input type="checkbox" name="Vehicle equipment" value={"Automatic"} />
        <input type="checkbox" name="Vehicle equipment" value={"Kitchen"} />
        <input type="checkbox" name="Vehicle equipment" value={"TV"} />
        <input type="checkbox" name="Vehicle equipment" value={"Bathroom"} />
      </div>
    </div>
  );
}
