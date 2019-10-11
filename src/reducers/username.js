const username = (state = '?', action) => {
    switch(action.type) {
        case 'SET_USERNAME':
            return action.text
        default:
            return state
    }
}
