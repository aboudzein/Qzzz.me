import React from "react";
import { Card, Input, Row, Col, Menu, message, Select, Button } from "antd";
import {
    DownCircleFilled,
    CheckSquareFilled,
    EditFilled,
    FileFilled
  } from '@ant-design/icons';
import FreeIcon from "../../eTuzla.Icons/FreeIcon";
import AutoField from "../AutoField";

const { Option, OptGroup } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

// Google Card Container

export default function CardContainer() {
  return (
    <Card>
      <Row>
        <Col span={14}>
          <Input size="large" placeholder="Question"></Input>
        </Col>
        <Col span={2}></Col>
        <Col span={8}>
          <Select
            defaultValue="multiple_choice"
            style={{ width: 175 }}
            onChange={handleChange}
          >
            <OptGroup label="Types">
              <Option value="short_answer"><EditFilled/>{" "}Short Answer</Option>
              <Option value="paragraph">{" "}Paragraph</Option>
              <Option value="multiple_choice"><DownCircleFilled/> {" "}Multiple Choice</Option>
              <Option value="checkbox"><CheckSquareFilled/>{" "}Checkboxes</Option>
              <Option value="dropdown"><DownCircleFilled/>{" "}DropDown</Option>
              <Option value="fileUpload"><FileFilled/>{" "}FileUpload</Option>
            </OptGroup>
          </Select>
        </Col>
      </Row>
      <AutoField type="string" placeHolder="hello"/>
    </Card>
  );
}
