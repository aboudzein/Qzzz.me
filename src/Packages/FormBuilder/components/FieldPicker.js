import React from 'react'
import { Button  , Card} from 'antd';
import { generateSchema } from '../utils/ManipulateSchema';



export default function FieldPicker() {
    return (
        <div>
            <Card style={{ marginBottom: '20px'}}>
            <Button onClick={()=> {generateSchema({'type': 'string'})}}> Text Field </Button>
            </Card>
          
        </div>
    )
}
