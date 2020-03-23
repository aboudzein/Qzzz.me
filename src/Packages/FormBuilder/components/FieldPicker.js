import React from 'react'
import { Button  , Card} from 'antd';
import { generateSchema } from '../utils/ManipulateSchema';







export default function FieldPicker(props) {
    const [ SchemaObject ,  setSchemaObject ] = React.useState({})

   

    return (
        <div>
            <Card style={{ marginBottom: '20px'}}>
            <Button onClick={()=> { 
                props.data(generateSchema({'type': 'string'}));
                }}> Text Field </Button>
            </Card>
          
        </div>
    )
}
