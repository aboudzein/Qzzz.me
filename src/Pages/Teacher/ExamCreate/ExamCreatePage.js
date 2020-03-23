import React  , { useEffect , useState } from 'react'
import AutoForm from '../../../Packages/AutoForm/AutoForm'
import FieldPicker from '../../../Packages/FormBuilder/components/FieldPicker'

export default function ExamCreatePage() {


    // Update the Component State from Field Picker Data 
    // Autoform will update their Component
    const [ fields , setFieldsSchema] = useState([]);


    useEffect(() => {
        setFieldsSchema([])
    } , [])

    // This Function Here to Get The Data from Field Picker 

    const data = (schemaObject) => {
        // Spread operator, wrapper function 
        setFieldsSchema(fields => [...fields  , schemaObject])
    
    }


    return (
        <div>
            <FieldPicker data={data}/>
            <AutoForm schema={fields}/>
        </div>
    )
}
