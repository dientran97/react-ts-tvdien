import "./App.css";

import { Layout } from "antd";
import { ReactElement } from "react";

import { siteName } from "./assets/appConfig.json";
import BodyContainer from "./components/BodyContent/BodyContainer";
import DataTable from "./components/BodyContent/DataTable";

const { Header, Footer, Content } = Layout;

export default function App(): ReactElement {
  return (
    <Layout>
      <Header className="appHeader">
        <h1>{siteName}</h1>
      </Header>
      <Content className="appContent">
        <BodyContainer />
        <DataTable />
      </Content>
      <Footer className="appFooter">Footer</Footer>
    </Layout>
  );
}
