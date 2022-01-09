import React from 'react'
import { FaDiscord, FaReddit, FaTelegramPlane } from "react-icons/fa";

function Socials() {
  return (
    <div className='crypto-socials'>
      <h3>Join the community channels</h3>
      <ul className="crypto-social-links">
        <li>
          <a href="https://t.me/+V6MuxAOE8UGn_Msk" target="_blank" rel='noreferrer' >
            <FaTelegramPlane />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel='noreferrer'>
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel='noreferrer'>
            <FaReddit />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
