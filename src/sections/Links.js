import React from 'react'
import cryptoLogo from '../pics/crypto-com.png'
import cryptoDido from '../pics/crypto-dido.jpg'

function Links() {
  return (
    <div className='links'>

      <div className='crypto-com'>
        <h3 className='linkTitle'>Crypto.com</h3>
        <div className='image-container'>
          <img src={cryptoLogo} alt="crypto.com" />
        </div>
        <a className='linkLink' target="_blank" href='https://crypto.com/app/y8yjabr8my' rel='noreferrer' >
          crypto link
        </a>
      </div>

      <div className='crypto-dido'>
        <h3 className='linkTitle'>Youtube Channel</h3>
        <div className='image-container'>
          <img src={cryptoDido} alt='crypto dido' />
        </div>
        <a className='linkLink' href='https://www.youtube.com/channel/UCfgNvLLaiB3v96h8nQ4jFsA' target="_blank" rel='noreferrer'>
          Youtube link
        </a>
      </div>

    </div>
  )
}

export default Links
