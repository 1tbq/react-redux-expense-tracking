import React from 'react';
import {Link} from 'react-router-dom';
const NotFoundPage = props => (
    <div>
      <h1>404!</h1>
      <Link to="/dashboard">Go to home</Link>
    </div>
  );
  export default NotFoundPage;