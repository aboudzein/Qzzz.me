import React from "react";
import { Button, Card, Menu , Affix } from "antd";
import { generateSchema } from "../utils/ManipulateSchema";
import {
  FontColorsOutlined,
  CloseSquareOutlined,
  PlusCircleOutlined,
  FontSizeOutlined,
  FileImageOutlined,
  GroupOutlined
} from "@ant-design/icons";
import "./FreeBirdPicker.css";
export default function FieldPicker(props) {
  const [SchemaObject, setSchemaObject] = React.useState({});

  return (
    <Affix offsetTop="10">
      <div className="FieldPickerMenu">
        <Button
          onClick={() => {
            props.data(
              generateSchema({
                type: "string",
                placeHolder: "Generated Text"
              })
            );
          }}
        >
          <PlusCircleOutlined />
        </Button>

        <Button
          onClick={() => {
            props.data(
              generateSchema({ type: "string", placeHolder: "Generated Text" })
            );
          }}
        >
          <FontColorsOutlined />
        </Button>
        <Button
          onClick={() => {
            props.data(
              generateSchema({ type: "string", placeHolder: "Generated Text" })
            );
          }}
        >
          <FontSizeOutlined />
        </Button>
        <Button
          onClick={() => {
            props.data(
              generateSchema({ type: "string", placeHolder: "Generated Text" })
            );
          }}
        >
          <FileImageOutlined />
        </Button>
        <Button
          onClick={() => {
            props.data(
              generateSchema({ type: "string", placeHolder: "Generated Text" })
            );
          }}
        >
          <GroupOutlined />
        </Button>
      </div>
    </Affix>
  );
}
