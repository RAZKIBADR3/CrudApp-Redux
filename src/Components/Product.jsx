import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../Actions/deleteProduct';
import { getProduct } from '../Actions/getProduct';

export default function Product({product}){
    const dispatch = useDispatch()
    return (
        <div className='product'>
            <p>ref : {product.cmp}</p>
            <p>name : {product.name}</p>
            <p>categorie : {product.categorie}</p>
            <p>prix : {product.prix}</p>
            <p>quanity : {product.quanity}</p>
            <span onClick={()=>dispatch(deleteProduct(product))}>
                <i className="fa-solid fa-trash"></i>
                Delete
            </span>
            <span className="update1" onClick={()=>dispatch(getProduct(product))}>
                <i className="fa-solid fa-pen"></i>
                Update
            </span>
        </div>
    )
}