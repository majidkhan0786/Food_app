"use client";

import React, { useState } from "react";
import { Button } from "reactstrap";

// Componets
import Login from "../../../_Components/Login";
import SignUp from "../../../_Components/SignUp";

const Resturent = () => {
  const [isLoggin, setisLoggin] = useState(false);
  return (
    <React.Fragment>
      {isLoggin ? <Login /> : <SignUp />}

      <Button color="success" onClick={() => setisLoggin(!isLoggin)}>
        {isLoggin
          ? "Don't have account? Signup"
          : "Already have an Account!! Login"}
      </Button>
    </React.Fragment>
  );
};

export default Resturent;
