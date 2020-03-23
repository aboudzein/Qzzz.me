import React from 'react'
import { Input } from 'antd';

export default function TextField(props) {
    return (
       <Input 
       placeholder={props.placeholder}
       size={props.size}
       />
    )
}
