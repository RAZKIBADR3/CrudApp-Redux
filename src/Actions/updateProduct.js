export const updateProduct = (obj) =>{
    return(
        {
            type:'getProduct',
            payload:{
                e:obj,
                upd:false
            }
        }
    )
}