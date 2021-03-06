import React from "react";

function AboutUs() {
  return (
    <div className="tc">

    <h3 className='white'> About us: </h3><br/>



    <div id = 'container' className="flex flex-wrap justify-around">
      <div className = "grow dib">
        <img className = "shadow-5" alt='bene' src="./assets/Bene.jpeg" width="200" height="200"/>
        <p style={{color: 'White'}}> Benedetta Arinci
        </p>
        <a style={{color: '#ffff00'}} href ={'https://github.com/benearinci'}>Bene's GitHub</a>
      </div>

      <div className = "grow dib">
      <img className = "shadow-5" alt='anthony' src="./assets/Anthony.jpeg" width="200" height="200"/>
        <p style={{color: 'White'}}> Anthony Donovan
        </p>
        <a style={{color: '#ffff00'}} href ={'https://github.com/ad13380'}>Anthony's GitHub</a>
      </div>

      <div className = "grow dib">
        <img className = "shadow-5" alt='chris' src="./assets/Chris.jpeg" width="200" height="200"/>
        <p style={{color: 'White'}} > Chris Cooney
        </p>
        <a style={{color: '#ffff00'}} href ={'https://github.com/ChrisCooney05'}>Chris' GitHub</a>
      </div>

      <div className = "grow dib">
      <img className = "shadow-5" alt='ema' src="./assets/Ema.png" width="200" height="200"/>
        <p style={{color: 'White'}} > Emanuele Pace
        </p>
        <a style={{color: '#ffff00'}} href ={'https://github.com/Emanuele-20'}>Emanuele's GitHub</a>

      </div>
      </div>

    </div>


  )
}

export default AboutUs;
