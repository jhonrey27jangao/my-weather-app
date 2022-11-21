import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";
import "./button.index.css";

function AuthButton({ type }) {
  const { logout, loginWithRedirect } = useAuth0();

  if (type === "logout") {
    return (
      <Button onClick={logout} outline>
        Logout
      </Button>
    );
  }
  return (
    <Button onClick={loginWithRedirect} size="md" className="small-btn" outline>
      Login
    </Button>
  );
}

export default AuthButton;
