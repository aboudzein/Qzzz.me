import React from "react";

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }


export default function QuestionType() {
  return (
    <div>
      <Select
        defaultValue="textAnswer"
        style={{ width: 160 }}
        onChange={handleChange}
      >
        <Option value="textAnswer">Text Answer</Option>
        <Option value="multipleSelect">Multiple Select</Option>
        <Option value="multiSelect">Multi Select</Option>
      </Select>
    </div>
  );
}
