"use client";

import React, { useState } from "react";
import { Button } from "reactstrap";

// Components
const Login = () => <div>Login Component</div>;
const SignUp = () => <div>SignUp Component</div>;

const Restaurent: React.FC = () => {
  const [isLoggin, setIsLoggin] = useState<boolean>(false);

  return (
    <React.Fragment>
      {isLoggin ? <Login /> : <SignUp />}
      <Button color="success" onClick={() => setIsLoggin(!isLoggin)}>
        {isLoggin
          ? "Don't have an account? Signup"
          : "Already have an account? Login"}
      </Button>
    </React.Fragment>
  );
};

export default Restaurent;
