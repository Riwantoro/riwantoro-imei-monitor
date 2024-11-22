import React, { useState } from 'react';
import './InmateSearch.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import StaffList from './components/StaffList';
import DarkModeToggle from './components/DarkModeToggle';
import staffData from './data/kerobokanstaff.json';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsLoading(true);

    setTimeout(() => {
      const results = staffData['Form Responses 1'].filter(staff => 
        staff.nama.toLowerCase().includes(query.toLowerCase()) || 
        staff.imei1.toString().includes(query)
      );
      setFilteredData(results);
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <div className="search-container">
        <SearchBox onSearch={handleSearch} />
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && searchQuery && (
          <StaffList data={filteredData} />
        )}
        {!isLoading && searchQuery && filteredData.length === 0 && (
          <div className="no-data">Data not found</div>
        )}
      </div>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
