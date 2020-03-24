import React from 'react'
import { Card  , Input } from 'antd';

const { TextArea } = Input;

export default function FormInfo() {
    return (
       <Card>
       <Input size="large" placeholder="Unititled Form" />
       <TextArea placeholder="Form Description" autoSize />
       </Card>
    )
}
