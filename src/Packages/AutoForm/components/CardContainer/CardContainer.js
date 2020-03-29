import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Row,
  Col,
  Menu,
  message,
  Select,
  Button,
  Divider
} from "antd";
import {
  DownCircleFilled,
  CheckSquareFilled,
  EditFilled,
  FileFilled,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  MoreOutlined,
  DeleteOutlined,
  CopyOutlined
} from "@ant-design/icons";
import { Switch } from "antd";
import FreeIcon from "../../../eTuzla.Icons/FreeIcon";
import AutoField from "../../AutoField";
import "./CardContainer.css";
const { Option, OptGroup } = Select;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

// Google Card Container

export default function CardContainer(props) {
  const type = props.data.type;
  console.log(type);

  const [cardQuestionType, setQuestionType] = useState({ ...props.data.type });

  function handleCardTypeChange(value) {
    setQuestionType(value);
  }

  useEffect(() => {
    setQuestionType(props.data.type);
  }, [props.data.type]);

  return (
    <Card hoverable className="focus-card">
      <Row justify="space-between" className="padding-10">
        <Col span={14}>
          <Input size="large" className="question-title-input" placeholder="Question"></Input>
        </Col>
        <Col span={2}></Col>
        <Col span={8}>
          <Select
          size="middle"
            defaultValue="ShortAnswer"
            style={{ width: "100%" , lineHeight: 20  }}
            onChange={handleCardTypeChange}
          >
            <OptGroup label="Types">
              <Option value="ShortAnswer">
                <EditFilled /> Short Answer
              </Option>
              <Option value="Paragraph"> Paragraph</Option>
              <Option value="MultipleChoice">
                <DownCircleFilled /> Multiple Choice
              </Option>
              <Option value="CheckBox">
                <CheckSquareFilled /> Checkboxes
              </Option>
              <Option value="DropDown">
                <DownCircleFilled /> DropDown
              </Option>
              <Option value="FileUpload">
                <FileFilled /> FileUpload
              </Option>
            </OptGroup>
          </Select>
        </Col>
      </Row>

      <div className="auto-field">
        <AutoField type={cardQuestionType} />
      </div>

      <Divider />
      <Row>
        <Col span={25}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button className="card-bottom-button" shape="circle">
              <DeleteOutlined />
            </Button>
            <Button className="card-bottom-button" shape="circle">
              <CopyOutlined />
            </Button>
            <div className="card-required-button">
              <h4>Required</h4>
              <Switch style={{ alignSelf: "center" }} onChange={onChange} />
            </div>
            <Button className="card-bottom-button" shape="circle">
              <MoreOutlined />
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
