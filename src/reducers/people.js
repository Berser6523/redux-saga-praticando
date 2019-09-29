const initialState = {
    people: []
}

export default function people(state = initialState, action){
    switch(action.type){
        case 'GET_PEOPLE':
            return Object.assign({}, state, {
                people: action.people
              })

        default:
            return state
    }
}