import React from "react";
import "./StaffList.css";

const StaffList = ({ filteredStaff, onImeiClick }) => {
  return (
    <div className="staff-container">
      {filteredStaff.length > 0 ? (
        filteredStaff.map((staff, index) => (
          <div key={index} className="staff-item">
            <h3>Nama: {staff.nama || "N/A"}</h3>
            <p>Jabatan: {staff.jabatan || "N/A"}</p>
            <p>
              Handphone 1: {staff.Handphone1 !== "-" ? staff.Handphone1 : "N/A"} - 
              <span
                className="imei-number"
                onClick={() => onImeiClick(staff.imei1)}
              >
                {staff.imei1 !== "-" ? staff.imei1 : "N/A"}
              </span>
            </p>
            <p>
              Handphone 2: {staff.Handphone2 !== "-" ? staff.Handphone2 : "N/A"} - 
              <span
                className="imei-number"
                onClick={() => onImeiClick(staff.Imei2)}
              >
                {staff.Imei2 !== "-" ? staff.Imei2 : "N/A"}
              </span>
            </p>
            <p>
              Handphone 3: {staff.Handphone3 !== "-" ? staff.Handphone3 : "N/A"} - 
              <span
                className="imei-number"
                onClick={() => onImeiClick(staff.Imei3)}
              >
                {staff.Imei3 !== "-" ? staff.Imei3 : "N/A"}
              </span>
            </p>
          </div>
        ))
      ) : (
        <p className="no-data">No staff found matching your search.</p>
      )}
    </div>
  );
};

export default StaffList;
