import styles from './style.module.css'

import { useStore } from "@/hooks/useStore";
import { Component } from "solid-js";
import Logo from "/logo.svg"

const Loading: Component = () => {
  const { loading } = useStore()
  return (
    <div class={styles.loading} classList={{ [styles.visible]: loading() }}>
      <img src={Logo} alt="Logo" />
      <svg class={styles.loader} viewBox="0 0 50 50" aria-hidden="true">
        <circle class={styles.track} cx="25" cy="25" r="20" />
        <circle class={styles.arc} cx="25" cy="25" r="20" />
      </svg>

      <span>Loading...</span>
    </div>
  )
}

export default Loading;
