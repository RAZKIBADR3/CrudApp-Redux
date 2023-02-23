import React , {useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { updateProduct } from '../Actions/updateProduct';

export default function Update({T}) {
    const dispatch = useDispatch()
    const obj2 = useSelector(s=>s.obj2)

    const obj = useRef(obj2)

    function setAtt(att,val){
        obj.current[att] = val
    }

    return(
        <div className='updateC'>
            <div className="inputs">
                <h1>Update Product</h1>
                {T.map((e,i)=>
                    <div key={i} className="form-floating my-2">
                        <input type="text" defaultValue={obj.current[e]} className="form-control" placeholder={e} onChange={(event)=>setAtt(e,event.target.value)}/>
                        <label>{e}</label>
                    </div>
                )}
                <span className="updateP" onClick={()=>{dispatch(updateProduct(obj.current))}}>
                    <span className="update2">Update</span>
                </span>
            </div>
        </div>
    )
}
