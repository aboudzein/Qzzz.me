import React  , { useEffect , useState, Fragment } from 'react'
import FormCreatorPage from '../../../Packages/FormBuilder/pages/FormCreatorPage';


export default function ExamCreatePage() {


    // Update the Component State from Field Picker Data 
    // Autoform will update their Component
    const [ fields , setFieldsSchema] = useState([]);



    return (
        <Fragment>
            <FormCreatorPage/>
        </Fragment>
    )
}