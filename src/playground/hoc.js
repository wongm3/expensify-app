import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>This info is: { info }</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return ({ isAdmin, ...props }) => (
    <div>
      { isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return ({ isAuthenticated, ...props }) => (
    <div>
      {
        isAuthenticated ?
          <WrappedComponent {...props} /> :
          <p>Please login to view the info</p>

      }
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info={"There are the details"} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info={"There are the details"} />, document.getElementById('app'));
