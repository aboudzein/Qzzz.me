import React from "react";

import { Tabs  , Button , PageHeader } from 'antd';

import {
PlusOutlined
} from "@ant-design/icons";
import QuestionsList from "./QuestionsList/QuestionsList";
import ExamCreatePage from "./ExamCreate/ExamCreatePage";


const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}



const operations = <Button><PlusOutlined /> Create Question</Button>;

export default function MyBankPage() {
  return (
    <div className="page">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="My Bank"
      subTitle="Questions & Exams Bank"
    />
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="My Questions" key="1">
        <QuestionsList/>
      </TabPane>
      <TabPane tab="Exams" key="2">
        <ExamCreatePage/>
      </TabPane>
    </Tabs>
    </div>
  
  );
}
