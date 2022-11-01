import React from 'react'
import style from '../styles/card.module.css'
import Link from 'next/link'

const card = (props) => {
    console.log(props.color);
  return (
    
    <div className={style.card_wrap} style={{backgroundColor:props.color}}>
        <Link href='/lesson1' >
            <div>
                <img src='https://miro.medium.com/max/913/1*VDRVI-0EfU2v7c43k9IIeA.png'></img>
            </div>
            <h4>Lesson 1:</h4>
            <p>Hashing technique in Blockchain</p>
        </Link>
    </div>
  )
}

export default card