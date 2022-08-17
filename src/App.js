import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Blog">
        <MDBBtn className="ms-3 mt-3">Blog</MDBBtn>
      </Link>
      <Link to="/Aggregator">
        <MDBBtn className="ms-3 mt-3">Aggregator</MDBBtn>
      </Link>
      <Link to="/NewsFeed">
        <MDBBtn className="ms-3 mt-3">News Feed</MDBBtn>
      </Link>
      <Link to="/Social1">
        <MDBBtn className="ms-3 mt-3">Social 1</MDBBtn>
      </Link>
      <Link to="/Social2">
        <MDBBtn className="ms-3 mt-3">Social 2</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
