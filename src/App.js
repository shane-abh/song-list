import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import React, { useState } from "react";
import scaleA, { minor_chords } from "./data"
import SongList from './components/Allsongs';
import { Routes, Route } from 'react-router-dom';
import { chordSongs } from './data';


const App = () => {
  // const [searchValue, setSearchValue] = useState("");
  // const [data, setData] = useState(songdata);

  // const handleSearch = event => {
  //   setSearchValue(event.target.value);
  // };

  // const filteredData = data.filter(
  //   item => item.name.toLowerCase().includes(searchValue.toLowerCase())
  // );
  console.log(minor_chords.Cm);
  return (
    // <SearchBox scale="A"/>
    <div>
      <div>
       
        <Routes>
          <Route path="/" element={<SongList/>} />
          {/* Major Chord routes */}
          <Route path="/A" element={<SearchBox scale="A" songdata={chordSongs.A}/>} />
          <Route path="/B" element={<SearchBox scale="B" songdata={chordSongs.B}/>} />
          <Route path="/C" element={<SearchBox scale="C" songdata={chordSongs.C}/>} />
          <Route path="/D" element={<SearchBox scale="D" songdata={chordSongs.D}/>} />
          <Route path="/E" element={<SearchBox scale="E" songdata={chordSongs.E}/>} />
          <Route path="/F" element={<SearchBox scale="F" songdata={chordSongs.F}/>} />
          <Route path="/G" element={<SearchBox scale="G" songdata={chordSongs.G}/>} />

          {/* Minor chord routes */}
          <Route path="/Cm" element={<SearchBox scale="Cm" songdata={minor_chords.Cm}/>} />
          <Route path="/Dm" element={<SearchBox scale="Dm" songdata={minor_chords.Dm}/>} />
          <Route path="/Em" element={<SearchBox scale="Em" songdata={minor_chords.Em}/>} />
          <Route path="/Fm" element={<SearchBox scale="Fm" songdata={minor_chords.Fm}/>} />
          <Route path="/Gm" element={<SearchBox scale="Gm" songdata={minor_chords.Gm}/>} />
      </Routes>
      {/* other routes */}
    
      
    </div>
  
     
      {/* <SongList/> */}
    </div>
    
);
};

export default App;
