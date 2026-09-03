import { useOrientation } from '@/hooks/useOrientation';
import styles from './style.module.css'
import { Component } from "solid-js";

import Logo from "/logo.svg"
import { useStore } from '@/hooks/useStore';

const Error: Component = () => {
  const orientation = useOrientation()
  const { error } = useStore()
  return (
    <div class={styles.error} classList={{
      [styles.visible]: orientation() === 'portrait' || !!error()
    }}>
      <img src={Logo} alt="Logo" />
      <h1>{error() ? error() : "This Evexi application doesn't support portrait orientation. Please run the application in landscape."}</h1>
    </div>
  )
}

export default Error
