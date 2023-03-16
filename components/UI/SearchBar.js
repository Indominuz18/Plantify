import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

const DUMMY_DATA = ["mango", "apples", "oranges", "watermelon", "mfjldjfldf"];

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  function changeHandler(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const filtered_arr = DUMMY_DATA.filter((item) => {
      return item.startsWith(value);
    });
    setResults(filtered_arr);
  }, [value]);

  return (
    <div>
      <input placeholder="Search" value={value} onChange={changeHandler} />
      {value && (
        <div className={classes.results}>
          <ul>
            {results.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
