// import React from 'react'
// import "./Card.css"
// import Item from '../item/Item'
// import { categories } from "../../helper/data";

// const Card = () => {
//     return (
//         <div className="card-container">
//              {categories.map((category,index) => {
//                 return (
//                     <Item category={category} key= {index}/>
//                 )
//             })
//             } 
//         </div>
//     )
// }

// export default Card;

import React from 'react'
import './Card.css'
import {categories} from '../../helper/data'
import Item from '../item/Item'

const Card = () =>{
    return(
        <div className="card-container">
           {
               categories.map((category,index)=>{
                    return(
                        <Item category={category} key= {index}/>
                    )
               })
           } 
        </div>
    )
}

export default Card;