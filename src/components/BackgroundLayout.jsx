import React, { useEffect, useState } from 'react'
import { weatherState } from '../state/atom'
 import Clear from "../assets/images/Clear.jpg"
 import Cloudy from "../assets/images/Cloudy.jpg"
 import Fog from "../assets/images/fog.png"
 import Rainy from "../assets/images/Rainy.jpg"
 import Snow from "../assets/images/snow.jpg"
 import Stormy from "../assets/images/Stormy.jpg"
 import Sunny from "../assets/images/Sunny.jpg"
import { useRecoilValue } from 'recoil'



const BackgroundLayout = () => {
  const [image,setImage]= useState(Clear)
  const weather= useRecoilValue(weatherState)
  useEffect(()=>{
    if(weather.conditions){
      let imageString= weather.conditions
      if ( imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }if ( imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }if ( imageString.toLowerCase().includes('fog')){
        setImage(Fog)
      }if ( imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }if ( imageString.toLowerCase().includes('snow')){
        setImage(Snow)
      }if ( imageString.toLowerCase().includes('storm')){
        setImage(Stormy)
      }if ( imageString.toLowerCase().includes('sun')){
        setImage(Sunny)
      }
    }


  },[weather])

  return (
    <img src={image} alt=" weather-image" className='h-screen w-full fixed  left-0 top-0 -z-10 '  />
  )
}

export default BackgroundLayout