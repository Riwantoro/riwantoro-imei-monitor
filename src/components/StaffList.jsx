import React from 'react';

const StaffList = ({ data }) => {
  return (
    <div className="staff-list">
      {data.map((staff) => (
        <div className="staff-item" key={staff.NOMOR}>
          <p><strong>Name:</strong> {staff.nama}</p>
          <p><strong>Position:</strong> {staff.jabatan}</p>
          <p><strong>Phone 1:</strong> {staff.Handphone1}</p>
          <p><strong>IMEI 1:</strong> {staff.imei1}</p>
          {staff.Handphone2 !== '-' && <p><strong>Phone 2:</strong> {staff.Handphone2}</p>}
          {staff.Imei2 !== '-' && <p><strong>IMEI 2:</strong> {staff.Imei2}</p>}
        </div>
      ))}
    </div>
  );
};

export default StaffList;
