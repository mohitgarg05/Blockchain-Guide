
import style from '../styles/Home.module.css'
import Card from './card'

export default function Home() {
  return (
   <div className={style.container}>
    <div className={style.h1_heading}>
        <h1>Your Blockchain Guide</h1>
        <p>This website make it easy for you know about Blockchain and most importantly the working of blockchain by visualizing everything  </p>
    </div>
    <div className={style.card_flex}>
      <Card color = "rgb(228,245,254)"/>
      <Card color="rgb(216,242,233)"/>
      <Card color="rgb(240,247,226)" />
      <Card color="rgb(255,254,227)" />
      <Card color= "rgb(255,243,221)" />
      <Card color="rgb(253,228,226)" />
      <Card color= "rgb(253,218,232)" />
      <Card color= " rgb(244,227,254)"/>
    </div>
     
   </div>
  )
}
