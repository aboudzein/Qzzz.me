import React from 'react'
import TextField from './TextField';
import CheckBox from './CheckBox';
import FreeBirdPicker from '../FormBuilder/components/FreeBirdPicker';








function returnFieldComponent(props){

    
    switch(props.type){
        case 'string':
            return <TextField placeholder={props.placeHolder}/>
        case 'checkbox':
            return <CheckBox />
   } 
   
}



export default function AutoField(props) {
    return (
        <div>
           { returnFieldComponent(props) } 
        </div>
    )
}
