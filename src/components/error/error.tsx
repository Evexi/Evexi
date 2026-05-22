import { useOrientation } from '@/hooks/useOrientation';
import './style.css'
import { Component } from "solid-js";

import Logo from "/logo.svg"

const Error: Component = () => {
  const orientation = useOrientation()
  return (
    <div class="error" classList={{
      "visible": orientation() === 'portrait'
    }}>
      <img src={Logo} alt="Logo" />
      <h1>This Evexi application doesn't support portrait orientation. Please run the application in landscape.</h1>
    </div>
  )
}

export default Error
