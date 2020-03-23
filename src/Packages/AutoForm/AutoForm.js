import React from 'react'
import TextField from './TextField';
import CheckBox from './CheckBox';
import FieldPicker from '../FormBuilder/components/FieldPicker';








function returnComponents(props){
    
    let fieldsArray = props.schema || []
    
    return fieldsArray.map( item => { switch(item.type){
        case 'string':
            return <TextField key={item['id']} placeholder={item.placeHolder}/>
            break;
        case 'checkbox':
            return <CheckBox key={item['id']} />
   }} )
   
}



export default function AutoForm(props) {
    return (
        <div>
           
           { returnComponents(props) } 
        </div>
    )
}
