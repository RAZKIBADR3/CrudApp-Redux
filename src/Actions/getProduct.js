export const getProduct = (obj,bol) =>{
    return(
        {
            type:'getProduct',
            payload:{
                e:obj,
                upd:true
            }
        }
    )
}