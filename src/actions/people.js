export function filterPeople(value){
    return{
        type: 'FILTRO',
        value,
    }
}

export function listPeople(){
    return {
            type: 'ASYNC_REQUEST_PEOPLE',
        }
}