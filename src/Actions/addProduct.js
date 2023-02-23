export const addProduct = (obj,cmp) =>{
    return(
        {
            type:'add',
            payload:{
                obj:obj,
                cmp:cmp
            }
        }
    )
}