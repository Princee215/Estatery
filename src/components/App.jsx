import React, { useState } from "react";
import Entry from "./Entry";
import Header from "./Header";
import emojipedia from "../emojipedia";
import Search from "./Search";
import SearchWithName from "./SearchWithName";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      img={emojiTerm.img}
      rate={emojiTerm.rate}
      name={emojiTerm.name}
      place={emojiTerm.place}
      rooms={emojiTerm.rooms}
      bathrooms={emojiTerm.bathrooms}
      area={emojiTerm.size}
    />
  );
}

function App() {
  const [array, setArray] = useState(emojipedia);

  function searchName(int) {
    let y = false;
    if (int === "") y = true;
    setArray(emojipedia);
    const x = parseInt(int[int.length - 1], 10);
    setArray((prevNotes) => {
      return prevNotes.filter((Item, i) => {
        return y || i === x;
      });
    });
  }

  function searchFor(object) {
    let x = false,
      y = false,
      z = false;
    if (object.place === "") x = true;
    if (object.price === "" || object.price === "All") y = true;
    if (object.property === "" || object.property === "All") z = true;
    setArray(emojipedia);
    console.log(object);
    setArray((prevNotes) => {
      return prevNotes.filter((Item) => {
        return (
          (x || object.place === Item.place) &&
          (z || object.property === Item.type) &&
          (y ||
            (object.price === "a" && Item.rate >= 1000 && Item.rate < 2000) ||
            (object.price === "b" && Item.rate >= 2000 && Item.rate < 3000) ||
            (object.price === "c" && Item.rate >= 3000 && Item.rate < 4000) ||
            (object.price === "d" && Item.rate >= 4000 && Item.rate < 5000))
        );
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="dictionary">
        <h1 className="heading">Search Properties to Rent</h1>
        <div className="searchName">
          <SearchWithName prince={searchName} />
        </div>
        <div className="searchBox">
          <Search prince={searchFor} />
        </div>
      </div>
      <dl className="dictionary">{array.map(createEntry)}</dl>
    </div>
  );
}

export default App;
