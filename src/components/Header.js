import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h3 class="ui block header">Staff Management System</h3>
      <nav>
        <ul>
          <li>
            <Link to="/staff/create">
              <button class="ui green button">Add Staff</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
