import * as React from 'react'
import { callOut, callToAction, container } from "../pages/index.module.css"

const Hero = ({ blok }) => {
  return (
    <div>
      <div className={container}>
        <h1 className={callOut}>{ blok.headline }</h1>
        <p className={callToAction}>{ blok.description }</p>
      </div>
    </div>
  )
}

export default Hero