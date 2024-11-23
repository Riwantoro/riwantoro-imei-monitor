import React from "react";
import "./StaffList.css"; // Tambahkan style di sini

const StaffList = ({ filteredStaff, onImeiClick, clickedIMEIs }) => {
  return (
    <div className="staff-list">
      {filteredStaff.map((staff) => (
        <div key={staff.NOMOR} className="staff-item">
          <h3>{staff.nama}</h3>
          <p>Jabatan: {staff.jabatan}</p>
          <div className="imei-list">
            {staff.imei1 && (
              <div
                className={`imei ${
                  clickedIMEIs[staff.imei1] ? "clicked" : ""
                }`} // Tambahkan kelas 'clicked' jika aktif
                onClick={() => onImeiClick(staff.imei1)}
              >
                IMEI 1: {staff.imei1}
                {clickedIMEIs[staff.imei1] && " ✅"}
              </div>
            )}
            {staff.Imei2 && staff.Imei2 !== "-" && (
              <div
                className={`imei ${
                  clickedIMEIs[staff.Imei2] ? "clicked" : ""
                }`}
                onClick={() => onImeiClick(staff.Imei2)}
              >
                IMEI 2: {staff.Imei2}
                {clickedIMEIs[staff.Imei2] && " ✅"}
              </div>
            )}
            {staff.Imei3 && staff.Imei3 !== "-" && (
              <div
                className={`imei ${
                  clickedIMEIs[staff.Imei3] ? "clicked" : ""
                }`}
                onClick={() => onImeiClick(staff.Imei3)}
              >
                IMEI 3: {staff.Imei3}
                {clickedIMEIs[staff.Imei3] && " ✅"}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;
