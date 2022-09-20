import React from "react";
import { MDBContainer, MDBRange } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer>
      <MDBRange defaultValue={50} id="customRange" label="Example range" />
    </MDBContainer>
  );
}
