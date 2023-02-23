import React , { useRef } from 'react'
import Product from './Product';
import Update from './Update';
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../Actions/addProduct';

export default function Home({T}){
    const {products,obj2,upd} = useSelector(s=>s)
    const dispatch = useDispatch()
    
    const cmp = useRef({nb:-1})
    const obj = useRef({})
    function setAtt(att,val){
        obj.current[att] = val
    }

    return (
        <div className='container-fluid'>
            {console.log('render')}
            <div className="inputs">
                <h1>ADD Product</h1>
                {T.map((e,i)=>
                    <div key={i} className="form-floating my-2">
                        <input type="text" className="form-control" placeholder={e} onChange={(event)=>setAtt(e,event.target.value)}/>
                        <label>{e}</label>
                    </div>
                )}
                <div className="addP">
                    <span onClick={()=>dispatch(addProduct(obj.current,cmp.current))} className="add">add</span>
                </div>
            </div>
            
            <div className="products">
                {products.length>0
                    ?products.map((e,i)=>
                        <Product key={i} product={e}/>
                    )
                    :<span>No Products Yet</span>
                }
            </div>
            {upd===true&&<Update T={T} obj2={obj2}/>}
        </div>
    )
}