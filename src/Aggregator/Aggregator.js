import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Aggregator() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5 border-bottom pb-4 mb-5">
        <MDBCol md="6" className="mb-4">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            News of the day
          </span>
          <h4>
            <strong>Facilis consequatur eligendi</strong>
          </h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis veritatis
            placeat unde animi laborum sapiente illo possimus, commodi
            dignissimos obcaecati illum maiores corporis.
          </p>
          <MDBBtn>Read More</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="gx-lg-5">
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
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
                iste aliquid. Sed id nihil magni, sint vero provident esse
                numquam perferendis ducimus dicta adipisci iusto nam temporibus
                modi animi laboriosam?
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
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/011.webp"
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
                <a href="" className="text-danger">
                  <MDBIcon fas icon="chart-pie" className="me-1" />
                  Business
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
                iste aliquid. Sed id nihil magni, sint vero provident esse
                numquam perferendis ducimus dicta adipisci iusto nam temporibus
                modi animi laboriosam?
              </p>
            </a>
            <hr />
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/034.webp"
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
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.webp"
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
                <a href="" className="text-warning">
                  <MDBIcon fas icon="code" className="me-1" />
                  Technology
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
                iste aliquid. Sed id nihil magni, sint vero provident esse
                numquam perferendis ducimus dicta adipisci iusto nam temporibus
                modi animi laboriosam?
              </p>
            </a>
            <hr />
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/011.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/012.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/013.webp"
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
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/014.webp"
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
        </MDBCol>
      </MDBRow>
      <nav aria-label="...">
        <MDBPagination circle className="mb-0 justify-content-center">
          <MDBPaginationItem>
            <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem active>
            <MDBPaginationLink href="#">
              2 <span className="visually-hidden">(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>
    </MDBContainer>
  );
}
