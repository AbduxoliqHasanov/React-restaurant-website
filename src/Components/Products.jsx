import React from 'react'
import Productbox from './Productbox'
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
export default function Products() {
    return (
        <div id='products'>
            <h1>CHOOSE&ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor quibusdam veritatis eaque impedit sed.</p>
            <div className='a-container'>
                <Productbox img={pimage1} title="Luger Burger"/>
                <Productbox img={pimage2} title="Le Pigeon Burger"/>
                <Productbox img={pimage1} title="Luger Burger"/>
            </div>
        </div>
    )
}
