import React from "react";
import { Login } from "./login";

export const PrivateRoute = ({ isAuth, authDispatch, children }) => {
  if (!isAuth) {
    return <Login dispatch={authDispatch} />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #333",
        }}
      >
        <h3 style={{ margin: 0 }}>My Todo App</h3>

        <button
          onClick={() => authDispatch({ type: "LOGOUT" })}
          style={{
            background: "#dc143c",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

     
      {children}
    </>
  );
};
