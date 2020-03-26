import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  HomeOutlined,
  DatabaseOutlined,
  BookOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  TeamOutlined,
  FieldTimeOutlined
} from "@ant-design/icons";
import HomePage from "../../../../Pages/Landing/HomePage";
import MyBankPage from "../../../../Pages/Teacher/MyBankPage";
import QuestionBuilderPage from "../../../../Pages/Builder/QuestionBuilder/QuestionBuilderPage";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



export default function SideBarLayout(props) {
  return (
   
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Create Quiz Page</Menu.Item>
            <Menu.Item key="3">Favourites</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <HomeOutlined />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/myBank">
                  <DatabaseOutlined />
                  My Bank
                </Link>
              </Menu.Item>

              <Menu.Divider />
              <Menu.Item key="3">
                <Link to="/exam_sessions">
                  <FieldTimeOutlined />
                  Exam Sessions
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/courses">
                  <BookOutlined />
                  Courses
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/classes">
                  <TeamOutlined />
                  Classes
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/students">
                  <TeamOutlined />
                  Students
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="7">
                <Link to="/billing">
                  <DollarCircleOutlined /> Billing
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/settings">
                  <SettingOutlined />
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/logout">
                  <LogoutOutlined /> Logout
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>My Bank</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {
                props.children  
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
  
  );
}
