export const deleteProduct = (obj) =>{
    return(
        {
            type:'delete',
            payload:{
                e:obj
            }
        }
    )
}