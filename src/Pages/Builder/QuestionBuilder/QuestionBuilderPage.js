import React from "react";
import QuestionEditor from "./components/QuestionEditor";
import QuestionInfo from "./components/QuestionInfo";
import QuestionType from "./components/QuestionType";
import { PageHeader, Divider  , Card } from "antd";
import { Row , Col} from 'antd';

export default function QuestionBuilderPage() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="New Question"
        subTitle="Add here the question you want"
      />
      <QuestionEditor />
    
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Question Details"
      >
        <Row>
        <Col span={24}>
        <h4 style={{ float: 'left' , lineHeight: '32px' , marginRight: '12px'}}>Type of Question  </h4>
        <QuestionType />  
        </Col>
        </Row>
        <Row>
        
        </Row> 
      </Card>
     
    </div>
  );
}
