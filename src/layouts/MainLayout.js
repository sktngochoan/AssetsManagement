import { Breadcrumb, Layout, Menu, notification } from "antd";
import { React, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import nashtechLogo from "../assets/img/nashtech-logo.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const { Header, Content, Footer } = Layout;

const Main = () => {
  const [headerText, setHeaderText] = useState("Home");
  const items = [
    {
      key: "home",
      label: "Home",
      url: "/",
    },
    {
      key: "user",
      label: "Manager User",
      url: "/user",
    },
    {
      key: "assest",
      label: "Manager Assets",
      url: "/assets",
    },
    {
      key: "assignment",
      label: "Manager Assignment",
      url: "/assignment",
    },
    {
      key: "return",
      label: "Request for returning",
      url: "/return",
    },
    {
      key: "report",
      label: "Report",
      url: "/report",
    },
    {
      key: "login",
      label: "Login",
      url: "/login",
    },
  ];
  const handleClick = (item) => {
    setHeaderText(item?.label);
  };

  return (
    <Layout className="layout">
      <Header className="mainHeader">
        <Container fluid className="headerContainer">
          <img
            src={nashtechLogo}
            alt="nashtech company"
            className="img-logo"
          ></img>
          <div className="headerTag">
            <strong>{headerText}</strong>
          </div>
          <div className="userPosition">Username'position</div>
        </Container>
      </Header>
      <Content className="content">
        <Container fluid className="mainContent">
          <Row>
            <Col md={3} xs={12}>
              <div className="menuItem ">
                <Menu
                  style={{
                    listStyle: "none",
                  }}
                >
                  {items?.map((item) => (
                    <Menu.Item key={item.key}>
                      <Button
                        className="button"
                        variant="danger"
                        onClick={() => handleClick(item)}
                      >
                        {item.label}
                        <Link to={item.url} />
                      </Button>{" "}
                    </Menu.Item>
                  ))}
                </Menu>
              </div>
            </Col>
            <Col md={9}>
              <div className="outlet">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </Content>
      <div className="mainFooter">
        <Container fluid className="footerContainer">
          © 2022 NashTech<br></br>
          Part of Nash Squared.
        </Container>
      </div>
    </Layout>
  );
};
export default Main;
