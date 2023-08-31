import React from "react";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = localStorage.getItem("AUTH_TOKEN");

      if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuthRedirect;
