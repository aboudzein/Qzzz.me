


export function generateSchema(data){
        let addedField = {}
        switch(data.type){
                case 'string':
                        addedField = { id : '5' , type: 'string' , placeholder : 'Generated Text Field'}
                        break;
                 
        }
        return addedField;
}