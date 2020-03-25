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

function handleCardTypeChange(value) {
    console.log(`selected ${value}`);
  }



// Google Card Container

export default function CardContainer(props) {
  return (
    <Card>
      <Row>
        <Col span={14}>
          <Input size="large" placeholder="Question"></Input>
        </Col>
        <Col span={2}></Col>
        <Col span={8}>
          <Select
            defaultValue="MultipleChoice"
            style={{ width: 175 }}
            onChange={handleCardTypeChange}
          >
            <OptGroup label="Types">
              <Option value="ShortAnswer"><EditFilled/>{" "}Short Answer</Option>
              <Option value="Paragraph">{" "}Paragraph</Option>
              <Option value="MultipleChoice"><DownCircleFilled/> {" "}Multiple Choice</Option>
              <Option value="CheckBox"><CheckSquareFilled/>{" "}Checkboxes</Option>
              <Option value="DropDown"><DownCircleFilled/>{" "}DropDown</Option>
              <Option value="FileUpload"><FileFilled/>{" "}FileUpload</Option>
            </OptGroup>
          </Select>
        </Col>
      </Row>
      <AutoField type="string" placeHolder="hello"/>
    </Card>
  );
}
