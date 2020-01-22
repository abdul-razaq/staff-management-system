import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CreateStaff from './components/createStaff';

const App = () => {
  const [staffs, setStaffs] = useState([]);

  const addStaffData = staffData => {
    setStaffs([staffData]);
    localStorage
  };

  return (
    <>
      <Router>
      <Header />
      <Main />
        <Route
          path="/staff/create"
          render={() => <CreateStaff addStaffData={addStaffData} />}
        />
      </Router>
    </>
  );
};

export default App;
