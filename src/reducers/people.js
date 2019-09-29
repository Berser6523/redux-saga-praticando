const initialState = {
    people: [],
    filtro: '',
}

export default function people(state = initialState, action){
    switch(action.type){
        case 'GET_PEOPLE':
            return Object.assign({}, state, {
                people: action.people
              })

        case 'FILTRO':
            return Object.assign({}, state, {
                filtro: action.value
              })

        default:
            return state
    }
}