import React, { useState } from 'react';

import {songsData} from '../data';
import LinkBtn from './linkbtns';
import Header from './Header';




function SongList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    
  };

  const filteredSongs = songsData.filter((song) => {
    const songTitle = song.Song.toLowerCase();
    const songScale = song.Scale.toLowerCase();
    return songTitle.includes(searchTerm) || songScale.includes(searchTerm);
  });

  return (
    <div className="song-list">
        <Header/>
        <div className='content-flex'>
        <h1>Home page</h1>
        <LinkBtn />
      

      <h2>Songs List</h2>
      <input
        type="text"
        placeholder="Search by title or scale..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <table>
        <thead>
          <tr>
           
            <th>Title</th>
            <th>Scale</th>
          </tr>
        </thead>
        <tbody>
          {filteredSongs.map((song) => (
            <tr key={song.ID}>
              
              <td>{song.Song}</td>
              <td>{song.Scale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default SongList;
