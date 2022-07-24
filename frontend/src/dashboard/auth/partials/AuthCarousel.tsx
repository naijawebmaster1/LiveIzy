import React from 'react'
import { Fragment, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export const Carousel = () => {
  return (<>
    <div id="carouselExampleIndicators"
      className="carousel slide relative "
      data-bs-ride="carousel" >
             <p className='text-white text-2xl font-semibold mt-40'>
                 <Typewriter
                  //@ts-ignore
                  class="typewrite "
                  options={{
                    strings: [
                      '“If you want to go quickly, go alone. If you want to go far, go together.” – African Proverb',
                      '“If you want to go quickly, go alone. If you want to go far, go together.” – African Proverb'
                    ],
                    autoStart: true,
                    loop: true
                  }} />
              </p>
                   </div>
  </>
  )
}