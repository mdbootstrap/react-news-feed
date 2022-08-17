import React from "react";
import {
  MDBCard,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Blog() {
  return (
    <MDBContainer className="py-5">
      <MDBCard className="px-3 pt-3" style={{ maxWidth: "32rem" }}>
        <div>
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="img-fluid"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBRow className="mb-3">
            <MDBCol col="6">
              <a href="" className="text-info">
                <MDBIcon fas icon="plane" className="me-1" />
                Travels
              </a>
            </MDBCol>
            <MDBCol col="6" className="text-end">
              <u> 15.07.2020</u>
            </MDBCol>
          </MDBRow>
          <a href="#!" className="text-dark">
            <h5>This is title of the news</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              iste aliquid. Sed id nihil magni, sint vero provident esse numquam
              perferendis ducimus dicta adipisci iusto nam temporibus modi animi
              laboriosam?
            </p>
          </a>
          <hr />
          <a href="#!" className="text-dark">
            <MDBRow className="mb-4 border-bottom pb-2">
              <MDBCol size="3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="img-fluid shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
              </MDBCol>

              <MDBCol size="9">
                <p className="mb-2">
                  <strong>Lorem ipsum dolor sit amet</strong>
                </p>
                <p>
                  <u> 15.07.2020</u>
                </p>
              </MDBCol>
            </MDBRow>
          </a>
          <a href="#!" className="text-dark">
            <MDBRow className="mb-4 border-bottom pb-2">
              <MDBCol size="3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  className="img-fluid shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
              </MDBCol>

              <MDBCol size="9">
                <p className="mb-2">
                  <strong>Lorem ipsum dolor sit amet</strong>
                </p>
                <p>
                  <u> 15.07.2020</u>
                </p>
              </MDBCol>
            </MDBRow>
          </a>
          <a href="#!" className="text-dark">
            <MDBRow className="mb-4 border-bottom pb-2">
              <MDBCol size="3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                  className="img-fluid shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
              </MDBCol>

              <MDBCol size="9">
                <p className="mb-2">
                  <strong>Lorem ipsum dolor sit amet</strong>
                </p>
                <p>
                  <u> 15.07.2020</u>
                </p>
              </MDBCol>
            </MDBRow>
          </a>
          <a href="#!" className="text-dark">
            <MDBRow className="mb-4 border-bottom pb-2">
              <MDBCol size="3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                  className="img-fluid shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
              </MDBCol>

              <MDBCol size="9">
                <p className="mb-2">
                  <strong>Lorem ipsum dolor sit amet</strong>
                </p>
                <p>
                  <u> 15.07.2020</u>
                </p>
              </MDBCol>
            </MDBRow>
          </a>
        </div>
      </MDBCard>
    </MDBContainer>
  );
}
