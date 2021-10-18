import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import '../style/loading.css';

export default function Loading() {

  return (
    <div className="loading-container">
      <h1 style={{ color: '#EB6859' }}>Aguarde</h1>
      <BarLoader color={'#EB6859'} size={150} />
    </div>
  );
};
