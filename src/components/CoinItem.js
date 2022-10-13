import React from 'react'
import './Coins.css'
const CoinItem=(props)=> {
  return (
    <div className='coin-row'>
    <p>{props.coins.market_cap_rank}</p>
    <div className='img-symbol'>
<img src ={props.coins.image } alt=""/>
<p> {props.coins.symbol}</p>
   
    </div>
    <p> {props.coins.current_price.toLocaleString()}</p>
    <p> {props.coins.price_change_24h.toFixed(2)}</p>
    <p> {props.coins.total_volume}</p>
    <p className='hide-mobile'> ${props.coins.market_cap}</p>
    <p className='hide-mobile'> ${props.coins.current_Price}</p>
    </div>


  )
}

export default CoinItem