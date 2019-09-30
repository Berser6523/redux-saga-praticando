const FILTRO = 'FILTRO'
const REQUEST_PEOPLE_LIST = 'REQUEST_PEOPLE_LIST'

export function filterPeople(value){
    return{
        type: FILTRO,
        value,
    }
}

export function requestPeopeList(){
    return{
            type: REQUEST_PEOPLE_LIST,
        }
}