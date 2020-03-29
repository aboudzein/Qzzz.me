import React from "react";
import { Card, Input } from "antd";
import './FormInfo.css';
const { TextArea } = Input;

export default function FormInfo() {
 
  return (
    <Card className="card">
      <Input
        className="input-title"
        size="large"
        placeholder="Form Title"
        value="Unititled Form"
      />
      <TextArea placeholder="Form Description" autoSize />
    </Card>
  );
}
