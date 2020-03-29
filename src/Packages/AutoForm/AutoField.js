import React from "react";
import TextField from "./TextField";
import CheckBox from "./CheckBox";
import FreeBirdPicker from "../FormBuilder/components/FreeBirdPicker";
import { Radio } from 'antd';

function returnFieldComponent(props) {
  switch (props.type) {
    case "ShortAnswer":
      return <TextField placeholder={props.placeHolder} />;
    case "CheckBox":
      return <CheckBox />;
    case "MultipleChoice":
      return (
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Choice 1 </Radio>
          <Radio value={2}>Choice 2</Radio>
          <Radio value={3}>Choice 3</Radio>
          <Radio value={4}>Choice 4</Radio>
        </Radio.Group>
      );
  }
}

export default function AutoField(props) {
  return <div>{returnFieldComponent(props)}</div>;
}
