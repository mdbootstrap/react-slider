import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/range-slider">
        <MDBBtn className="m-3">Range Slider</MDBBtn>
      </Link>
      <Link to="/carousel-slider">
        <MDBBtn className="m-3">Carousel Slider</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
