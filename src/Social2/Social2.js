import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function Social2() {
  return (
    <MDBContainer className="py-5">
      <MDBCard style={{ width: "48rem" }}>
        <div className="border border-left border-right px-0">
          <div className="p-3 border-bottom">
            <h4 className="d-flex align-items-center mb-0">
              Home
              <MDBIcon
                far
                icon="star"
                size="xs"
                color="primary"
                className="ms-auto"
              />
            </h4>
          </div>
          <MDBCard className="shadow-0">
            <MDBCardBody className="border-bottom pb-2">
              <div className="d-flex">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex align-items-center w-100 ps-3">
                  <div className="w-100">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-status border-0 py-1 px-0"
                      placeholder="What's happening"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <MDBTypography
                  listUnStyled
                  className="d-flex flex-row ps-3 pt-3"
                  style={{ marginLeft: "50px" }}
                >
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="image" className="pe-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon fas icon="photo-video" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon fas icon="chart-bar" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="smile" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="calendar-check" className="px-2" />
                    </a>
                  </li>
                </MDBTypography>
                <div className="d-flex align-items-center">
                  <MDBBtn rounded>Tweet</MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#!">
                  <h6 className="text-body">
                    Miley Cyrus
                    <span className="small text-muted font-weight-normal mx-1">
                      @mileycyrus
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      2h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Lorem ipsum dolor, sit amet <a href="#!">#consectetur </a>
                  adipisicing elit. Nobis assumenda eveniet ipsum libero
                  mollitia vero doloremque
                  <a href="#!"> #perspiciatis</a> molestiae omnis, quam iure
                  dicta reprehenderit distinctio facere labore atque, sit
                  <a href="#!"> #ratione</a> quo.
                </p>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">7</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">35</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Miley Cyrus
                    <span className="small text-muted font-weight-normal mx-1">
                      @mileycyrus
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      3h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Nobis assumenda eveniet ipsum libero mollitia vero doloremque
                  molestiae reprehenderit.
                </p>

                <MDBCard
                  className="border mb-3 shadow-0 "
                  style={{ maxWidth: "540px" }}
                >
                  <MDBRow className="g-0">
                    <MDBCol md="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (21).webp"
                        alt="Avatar"
                        className="img-fluid rounded-left"
                      />
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBCardBody>
                        <MDBCardText style={{ lineHeight: "1" }}>
                          Title of the news
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          <MDBIcon fas icon="link" size="xs" className="pe-1" />
                          example.pl
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">51</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">185</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (22).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Bob Marley
                    <span className="small text-muted font-weight-normal mx-1">
                      @bobmarley
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      5h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Lorem ipsum dolor, sit amet <a href="#!">#consectetur</a>{" "}
                  adipisicing elit. Officiis, <a href="#!"> #repellat</a>. Error
                  cumque temporibus eum pariatur ducimus facere? Obcaecati
                  fugit, nobis eos <a href="#!">#deserunt</a> odit libero
                  voluptatibus, iste laudantium, tempore ratione ut.
                </p>

                <MDBCard
                  className="border mb-3 shadow-0 "
                  style={{ maxWidth: "540px" }}
                >
                  <MDBRow className="g-0">
                    <MDBCol md="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (20).webp"
                        alt="Avatar"
                        className="img-fluid rounded-left"
                      />
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBCardBody>
                        <MDBCardText style={{ lineHeight: "1" }}>
                          Title of the news
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          <MDBIcon fas icon="link" size="xs" className="pe-1" />
                          example.pl
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">8</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">97</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (24).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Anna Doe
                    <span className="small text-muted font-weight-normal mx-1">
                      @annadoe
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      7h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Error cumque temporibus eum pariatur ducimus facere? Obcaecati
                  fugit, nobis eos <a href="#!">#deserunt</a> odit libero
                  voluptatibus, iste laudantium, tempore ratione ut.
                </p>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="img-fluid rounded mb-3"
                  alt="Fissure in Sandstone"
                />
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">11</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">65</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (3).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Mark Twain
                    <span className="small text-muted font-weight-normal mx-1">
                      @marktawin
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      10h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Obcaecati fugit, nobis eos odit libero voluptatibus, iste
                  laudantium, tempore ratione ut.
                </p>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">34</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">159</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
        </div>
      </MDBCard>
    </MDBContainer>
  );
}
