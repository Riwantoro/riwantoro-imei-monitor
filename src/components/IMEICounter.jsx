import React, { useState } from 'react';

const IMEICounter = ({ imeiCount }) => {
  return (
    <div className="imei-counter">
      <h2>IMEI Counter</h2>
      <p>Total Devices: {imeiCount}</p>
    </div>
  );
};

export default IMEICounter;
