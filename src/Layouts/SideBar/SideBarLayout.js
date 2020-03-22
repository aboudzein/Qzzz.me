import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
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
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function SideBarLayout() {
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
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
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
            <Menu.Item key="1"><HomeOutlined />Home</Menu.Item>
            <Menu.Item key="2"><DatabaseOutlined />My Bank</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3"><FieldTimeOutlined />Exam Sessions</Menu.Item>
            <Menu.Item key="4"><BookOutlined />Courses</Menu.Item>
            <Menu.Item key="5"><TeamOutlined />Classes</Menu.Item>
            <Menu.Item key="6"><TeamOutlined />Students</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="7"><DollarCircleOutlined /> Billing</Menu.Item>
            <Menu.Item key="8"><SettingOutlined />Settings</Menu.Item>
            <Menu.Item key="9"><LogoutOutlined /> Logout</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
