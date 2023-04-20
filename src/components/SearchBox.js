import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// import songdata from "./data"

function SearchBox(props) {
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState(props.songdata);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <Link to="/song-list/">
        <p>
          {" "}
          <i className="back-icon">&laquo;</i> Back
        </p>
      </Link>
      <h1>Scale: {props.scale}</h1>
      <div></div>

      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search..."
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Song Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchBox;
