import { useState } from "react";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  const [value, setValue] = useState(); //state
  const [a, seta] = useState("r");
  const [b, setb] = useState([]);
  const [c, setc] = useState({
    a: "1",
    b: "2",
    c: "3",
  });
  const data = [
    { name: "hamza", age: 20 },
    { name: "kamal", age: 25 },
    { name: "waseem", age: 30 },
    { name: "hamza", age: 20 },
    { name: "kamal", age: 25 },
    { name: "wa123", age: 30 },
    { name: "hhzama", age: 20 },
    { name: "kamal", age: 25 },
    { name: "waseem", age: 30 },
  ];
  // const [condition, setCondition] = useState(false);

  // const keysgetter = () => {
  //   for(const key in c )
  //   //
  //   // if (keys.includes(a)) return true;
  //   // return false;
  // };
// const filterDate=()=>{
  const result = data.filter((item) => item.name.startsWith(value));
  console.log(result);
// }
const filterData=result.length > 0? result  : data
  return (
    <>
      <div>
        <button onClick={() => seta(5)}>Value</button>
        <button onClick={() => setb([...b, 123, 123, 456, 789, 234, 567, 890])}>
          Array Push
        </button>
        <button
          onClick={() =>
            setc({ ...c, d: "4", e: "23", f: "23", G: "23", h: "23" })
          }
        >
          Object value
        </button>
        {/* <button onClick={() => setCondition(keysgetter())}>
          Function Calling Method.
        </button> */}
      </div>
      {/* {a == 5 &&
        (() => {
          console.log("aaad", a);
          console.log("baaa", b);
          console.log("caaa", c);

          return alert("Clicked and consoled!");
        })()} */}

      {a === 5 && <div>This is a div for a value in the variable</div>}
      {b.includes(123) && (
        <div>This is a div in the array of the followling </div>
      )}
      {/* {c.values(a) && <div>This is a div in the array of the followling </div>} */}

      <input
        type="text"
        placeholder="Search operation"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* {condition == true && <span>after getting values from objects</span>} */}
      {filterData.map((item) => {
        return <div className="">{item.name}</div>;
      })}
    </>
  );
}

export default App;
