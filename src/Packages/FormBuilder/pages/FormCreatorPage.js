import FreeBirdPicker from "../components/FreeBirdPicker";
import AutoForm from "../../AutoForm/AutoField";
import React, { useEffect, useState } from "react";
import FormInfo from "../components/FormInfo";
import { Row, Col } from "antd";
import AutoContainer from "../../AutoForm/AutoContainer";

const form  = {
    "formTitle": "Unititled Form",
    "type":"google_forms",
    "designSystem":"ant.Design",
    "autoGenerated":{
        "sections": [
            {
               "title": "Section1",
               "description": "Section1 Description" ,
                "fieldCards": [
                    {
                        "type": "fieldCardType - Multiple Question",
                        "headingTitle": "Question 1", 
                        "headingDescription": "Question Description",
                        "required": ""
                    }
                ]
            },
             {
                "title": "Section3",
                "description": "Section3 Description" ,
                "fieldCards": []
             }
        ]
    }
}   





export default function FormCreatorPage() {
  // Update the Component State from Field Picker Data
  // Autoform will update their Component
  const [sections, setSections] = useState(form.autoGenerated.sections);

  useEffect(() => {
    setSections([]);
  }, []);

  // This Function Here to Get The Data from Field Picker

  const data = sectionObject => {
    // Spread operator, wrapper function
    setSections(sections => [...sections, sectionObject]);
  };



  return (
    <div>
      <Row>
        <Col span={14} offset={5}>
        <FreeBirdPicker data={data} />
        <div style={{ width: '92%'}}>
          <FormInfo />
         
          <AutoContainer sections={form.autoGenerated.sections}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}
