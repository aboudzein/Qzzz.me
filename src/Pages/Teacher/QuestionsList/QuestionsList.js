import React from "react";

import { Table, Tag, Row, Col, Button } from "antd";

import { PlusOutlined , FilterOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Question Text",
    dataIndex: "question_text",
    key: "question_text",
    render: text => <Link to="">{text}</Link>
  },
  {
    title: "Question Type",
    key: "question_type",
    dataIndex: "question_type",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "multiple_choice") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Archive {record.name}</a>
        <a>Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    question_text: "What it is the multiple of 2 ?",
    question_type: ["multiple_choise", "multiple_select"]
  },
  {
    key: "2",
    question_text: "how many weeks in a year ?",
    question_type: ["text_answer", "number_answer"]
  },
  {
    key: "3",
    question_text: "what is my the local ip  address ?",
    question_type: ["text_answer", "number_answer"]
  }
];

export default function QuestionsList() {
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <Row>
          <Col span={19}> 
          
          <Button> <FilterOutlined /> Filter </Button>
          <Button> <FilterOutlined /> Sort  </Button>


          </Col>
          <Col span={5}>
            <Button type="dashed" style={{ float: 'right'}}>
             <Link  to="/create-question"><PlusOutlined /> Create Question{" "} </Link> 
            </Button>
          </Col>
        </Row>
      </div>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
