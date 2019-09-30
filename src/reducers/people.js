const INTIAL_STATE = {
    data: [],
    loading: false,
    error: false,
    filtro: '',
}

export default function people(state = INTIAL_STATE, action){
    switch (action.type) {
        case 'REQUEST_PEOPLE_LIST':
            return {...state, loading: true}

        case 'SUCCESS_PEOPLE_LIST':
            return {data: action.data, loading: false, error: false}

        case 'FAILUIRE_PEOPLE_LIST':
            return {data: [], loading: false, error: true}
            
        case 'FILTRO':
                return Object.assign({}, state, {filtro: action.value})
        default:
            return state
    }
}