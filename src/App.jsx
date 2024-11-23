import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import StaffList from "./components/StaffList";
import DarkModeToggle from "./components/DarkModeToggle";
import IMEICounter from "./components/IMEICounter";
import staffData from "./data/kerobokanstaff.json";
import "./App.css";
import "./InmateSearch.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedIMEIs, setClickedIMEIs] = useState({}); // Track clicked state of each IMEI
  const [totalIMEIs, setTotalIMEIs] = useState(0); // Track total active IMEIs

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = staffData["Form Responses 1"].filter((staff) =>
      staff.nama?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  // Updated IMEI click handler with toggle functionality
  const handleIMEIClick = (imei) => {
    if (imei && imei !== "-") {
      setClickedIMEIs((prev) => {
        const wasClicked = prev[imei];
        // Toggle clicked state
        return { ...prev, [imei]: !wasClicked };
      });
      
      setTotalIMEIs((prevTotal) => {
        // If IMEI was already clicked, subtract 1; otherwise add 1
        return clickedIMEIs[imei] ? prevTotal - 1 : prevTotal + 1;
      });
    }
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      <Header />
      <SearchBox onSearch={handleSearch} />
      <IMEICounter imeiCount={totalIMEIs} />
      
      {searchQuery.trim() === "" ? null : searchResults.length > 0 ? (
        <StaffList 
          filteredStaff={searchResults} 
          onImeiClick={handleIMEIClick}
          clickedIMEIs={clickedIMEIs} // Pass clicked state to StaffList
        />
      ) : (
        <p className="no-data">No data found</p>
      )}
    </div>
  );
};

export default App;