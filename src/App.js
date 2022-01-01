import { FaDiscord, FaReddit, FaTelegramPlane } from "react-icons/fa";
import banner from './pics/banner.jpg'
import cryptoLogo from './pics/crypto-com.png'
import cryptoDido from './pics/crypto-dido.jpg'
import './App.css';

function App() {
  return (
    <div className="App">

    {/* section one */}
    <section className='banner'>

      <img src={banner} alt='what is life' />

    </section>

    <div className='description'>
      <h2>Getting Started</h2>
      <p>
        Alright well this is going to be something I would like to share with my friends and family. <strong>Crypto.com</strong> is going to be one of the biggest places where most people in america are going to be buying and selling crypto currency. I have been using crypto.com for about two years now. And would like to try and help out and create a community where if you are new to crypto, you wont feel lost. Click on the <a href='https://crypto.com/app/y8yjabr8my' target="_blank" rel='noreferrer'>links</a> below to get the app and create an account. Use my refferal code <code>y8yjabr8my</code> so we both can get $25 to start off this journey. And be sure to get your hands on the ruby red card. If you want to know more about it check out my youtube channel. Join the community.<br /> <strong>Fortune favours the brave </strong>
      </p>
    </div>

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


    <div className='crypto-socials'>
      <h3>Join the community channels</h3>
      <ul className="crypto-social-links">
        <li>
          <a href="#" target="_blank" rel='noreferrer' >
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


    </div>
  );
}

export default App;
