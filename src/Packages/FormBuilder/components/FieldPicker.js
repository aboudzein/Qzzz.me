import React from 'react'
import { Button  , Card} from 'antd';
import { generateSchema } from '../utils/ManipulateSchema';
import {
    FontColorsOutlined , 
    CloseSquareOutlined
    } from "@ant-design/icons";







export default function FieldPicker(props) {
    const [ SchemaObject ,  setSchemaObject ] = React.useState({})

   

    return (
        <div>
            <Card style={{ marginBottom: '20px'}}>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'string' , placeHolder: 'Generated Text'}));
                }}> <FontColorsOutlined />Short Answer </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'string' , placeHolder: 'Generated Text'}));
                }}> <FontColorsOutlined />Paragraph </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Multiple Choise </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> CheckBoxes </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> DropDown </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Linear Scale </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Multiple Choise Grid </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Tick Box Grid </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Date </Button>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'checkbox'}));
                }}><CloseSquareOutlined /> Time </Button>
            
            </Card>
          
        </div>
    )
}
