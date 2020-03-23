import React from 'react'
import TextField from './TextField';
import CheckBox from './CheckBox';
import FieldPicker from '../FormBuilder/components/FieldPicker';

const schema = [
    { 
        id: '1',
        type : 'string',
        placeHolder : 'Type the text you want'
     },
     { 
        id:'2',
        type : 'string',
        placeHolder : 'Type hahah you want'
     },
     { 
        id:'3',
        type : 'checkbox',
        placeHolder : 'Type hahah you want'
     },

]







function returnComponents(){
    
    
    return schema.map( item => { switch(item.type){
        case 'string':
            return <TextField key={item['id']} placeholder={item.placeHolder}/>
            break;
        case 'checkbox':
            return <CheckBox key={item['id']} />
   }} )
   
}



export default function AutoForm() {
    return (
        <div>
           
           { returnComponents() } 
        </div>
    )
}
