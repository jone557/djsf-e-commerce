export default (orders =[],action) =>{
    const {type,payload} =  action
    switch(type){
        case 'CREATE':
            return [...orders,payload]
        default:
            return orders;
    }
}