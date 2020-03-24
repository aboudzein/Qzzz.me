import FieldPicker from "../components/FieldPicker";
import AutoForm from "../../AutoForm/AutoForm";
import React, { useEffect, useState } from "react";
import FormInfo from "../components/FormInfo";
import { Row, Col } from "antd";

export default function FormCreatorPage() {
  // Update the Component State from Field Picker Data
  // Autoform will update their Component
  const [fields, setFieldsSchema] = useState([]);

  useEffect(() => {
    setFieldsSchema([]);
  }, []);

  // This Function Here to Get The Data from Field Picker

  const data = schemaObject => {
    // Spread operator, wrapper function
    setFieldsSchema(fields => [...fields, schemaObject]);
  };

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <FormInfo />
          <FieldPicker data={data} />
          <AutoForm schema={fields} />
        </Col>
      </Row>
    </div>
  );
}
