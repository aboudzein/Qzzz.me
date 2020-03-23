


export function generateSchema(data){
        let addedField = {}
        switch(data.type){
                case 'string':
                        addedField = {  type: 'string' , placeHolder : data.placeHolder}
                        break;
                case 'checkbox':
                        addedField = { type: 'checkbox'}
                 
        }
        return addedField;
}