import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function NewsFeed() {
  return (
    <MDBContainer className="py-5">
      <MDBCard className="d-flex" style={{ width: "48rem" }}>
        <MDBCardBody>
          <MDBTable hover forum responsive className="text-center">
            <MDBTableHead>
              <tr>
                <th></th>
                <th className="text-left">Topic</th>
                <th>Comments</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    Styling in the Shadow DOM With CSS Shadow Parts
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    5 obscure HTTP methods to impress your hipster friends
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    Rolling With The Punches: Shifting Attack Tactics &#38;
                    Dropping Packets Faster &#38; Cheaper At The Edge
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    Internship Experience: Cryptography Engineer
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    egghead: Nader Dabit - Full Stack Development in the Era of
                    Serverless Computing
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    10 Interesting JavaScript and CSS Libraries for April 2020
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    bash: Split a String into Parts with `cut` in Bash
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    Node v10.20.1 (LTS)
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row" className="text-nowrap">
                  <MDBBtn
                    outline
                    color="dark"
                    size="sm"
                    className="p-1 m-0 waves-effect"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-up" className="ms-1" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="danger"
                    size="sm"
                    className="p-1 m-0 waves-effect mx-1"
                  >
                    <span className="value">0</span>

                    <MDBIcon fas icon="thumbs-down" className="ms-1" />
                  </MDBBtn>
                </td>
                <td className="text-start">
                  <a href="#" className="font-weight-bold blue-text">
                    React Digest Issue #247
                  </a>
                  <div className="my-2">
                    <a href="#" className="blue-text">
                      <strong>MDBootstrap</strong>
                    </a>
                    <span className="badge bg-secondary mx-1">staff</span>
                    <span className="badge bg-primary mx-1">pro</span>
                    <span className="badge bg-warning mx-1">premium</span>
                    <span>a year ago</span>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-dark">
                    <span>0</span>
                    <MDBIcon fas icon="comments" className="ms-1" />
                  </a>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <div className="d-flex justify-content-center">
            <nav className="my-3 pt-2">
              <MDBPagination circle className="mb-0">
                <MDBPaginationItem>
                  <MDBPaginationLink
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Previous
                  </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">11</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">12</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem active>
                  <MDBPaginationLink href="#">
                    13 <span className="visually-hidden">(current)</span>
                  </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">14</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">15</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                  <MDBPaginationLink href="#">Next</MDBPaginationLink>
                </MDBPaginationItem>
              </MDBPagination>
            </nav>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
