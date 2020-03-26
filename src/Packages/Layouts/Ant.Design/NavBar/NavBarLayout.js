import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
export default function NavBarLayout(props) {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Unititled Form</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          { props.children }
        </Content>
        <Footer style={{ textAlign: "center" }}>
          eTuzla ©2020 Created by Ant Tuzla For Smart Apps
        </Footer>
      </Layout>
    </div>
  );
}
