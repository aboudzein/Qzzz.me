


export function generateSchema(data){
        let addedField = {}
        switch(data.type){
                case 'string':
                        addedField = {  type: 'string' , placeholder : 'Generated Text Field'}
                        break;
                 
        }
        return addedField;
}