import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
function App() {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favourite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];
  const options = [
    {
      label: "Red Hot Riding Hood",
      value: "red",
    },
    {
      label: "Green Nature",
      value: "green",
    },
    {
      label: "Shade of Blue",
      value: "blue",
    },
    {
      label: "Brightness of Yellow",
      value: "yellow",
    },
    {
      label: "Black Magic",
      value: "black",
    },
    {
      label: "Grey shade",
      value: "grey",
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button> */}
      <Header/>
      <Route path="/">
        <Accordion items={items} /> /
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        <div className="field" style={{ marginTop: "40px" }}>
          <div className={`ui header ${selected.value}`}>
            This text is {selected.value}.
          </div>
        </div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
