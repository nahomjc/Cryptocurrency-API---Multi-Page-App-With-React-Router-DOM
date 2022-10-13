import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import './Coins.css'
import Coin from '../routes/Coin'
const Coins=(props)=> {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p className='coin-name'>Price</p>
                <p className='coin-name'>24h</p>
                <p className='hide-mobile'>Volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className='hide-mobile'>Mkt Cap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins} />
                    </Link>

                )
            })}

        </div>
    </div>
)
}

export default Coins