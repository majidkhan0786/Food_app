import Image from "next/image";
import React from "react";
import Resturent from "./restaurant/page";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <React.Fragment>
      <Resturent />
    </React.Fragment>
  );
}
