import React, { useState } from "react";
import Values from "values.js";            // importing Values tints and shades of a CSS color
import SingleColor from "./SingleColor";


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10)); // creating 10 shedes of color


  
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      
      let colors = new Values(color).all(10);
      console.log(color)
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">

        <h4 style={{fontFamily:'Agency FB'}}>color generator</h4>

        {/* form*/}
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={"#f15025"}
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>

      {/* iteration over list */}

      <section className="colors">
        {list.map((color, index) => {
          console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
