import React from "react";
import { Button, Card, Menu } from "antd";
import { generateSchema } from "../utils/ManipulateSchema";
import {
  FontColorsOutlined,
  CloseSquareOutlined,
  PlusCircleOutlined,
  FontSizeOutlined,
  FileImageOutlined,
  GroupOutlined
} from "@ant-design/icons";
import "./FieldPicker.css";
export default function FieldPicker(props) {
  const [SchemaObject, setSchemaObject] = React.useState({});

  return (
    <div>
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

      <Card style={{ marginBottom: "20px" }}>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Multiple Choise{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> CheckBoxes{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> DropDown{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Linear Scale{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Multiple Choise Grid{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Tick Box Grid{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Date{" "}
        </Button>
        <Button
          onClick={() => {
            props.data(generateSchema({ type: "checkbox" }));
          }}
        >
          <CloseSquareOutlined /> Time{" "}
        </Button>
      </Card>
    </div>
  );
}
