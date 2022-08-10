// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],action) =>{
    const {type,payload} = action
    switch (type) {
        
        case 'CREATE_REVIEWS':
            return payload
        default:
            return state;
    }
}