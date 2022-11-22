import { Breadcrumb, Dropdown, Layout, Menu, notification, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import nashtechLogo from "../assets/img/nashtech-logo.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const { Header, Content, Footer } = Layout;

const Main = () => {
  const navigate = useNavigate();
  const userManagementItems = [
    {
      key: "userProfile",
      label: "User Profile",
      url: "/",
    },
    {
      key: "logout",
      label: "Logout",
      url: "/logout",
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="">User Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );
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
  const asd = () => {
    console.log(items);
  };
  return (
    <Layout className="layout">
      <Header className="mainHeader">
        <Container fluid>
          <Row>
            <Col md={11} xs={12}>
              <img
                src={nashtechLogo}
                alt="nashtech company"
                className="img-logo"
              ></img>
            </Col>
            <Col className="menuHeader" md={1}>
              <div>
                {/* <a href="/login">
                  <Button type="button" className="loginButton" variant="dark">
                    Login
                  </Button>
                </a> */}
                <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Header>
      <Content className="content">
        <Container fluid className="mainContent">
          <Row>
            <Col md={3} xs={12}>
              <div className="menuItem">
                <Menu
                  style={{
                    listStyle: "none",
                  }}
                >
                  {items?.map((item) => (
                    <Menu.Item key={item.key}>
                      <Button className="button" variant="danger">
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
      <Footer className="mainFooter">
        <Container fluid className="footerContainer">
          © 2022 NashTech<br></br>
          Part of Nash Squared.
        </Container>
      </Footer>
    </Layout>
  );
};
export default Main;
