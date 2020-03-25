import React from "react";
import { Card, Input } from "antd";

const { TextArea } = Input;

export default function FormInfo() {
  const styles = {
    cardStyles: {
      marginTop: "20px",
      marginBottom : "10px",
      borderTop: "10px solid",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopColor: "#1DA57A"

    },
    formTitle: {
      fontSize: "32px",
      color: "black",
      padding: "10px",
      lineHeight: "30px",
    }
  };

  return (
    <Card style={styles.cardStyles}>
      <Input style={styles.formTitle} size="large" placeholder="Form Title" value="Unititled Form" />
      <TextArea placeholder="Form Description" autoSize />
    </Card>
  );
}
