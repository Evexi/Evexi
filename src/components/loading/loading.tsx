import styles from './style.module.css'

import { useStore } from "@/hooks/useStore";
import { Component } from "solid-js";
import Logo from "/logo.svg"

const Loading: Component = () => {
  const { loading } = useStore()
  return (
    <div class={styles.loading} classList={{ [styles.visible]: loading() }}>
      <div class={styles.corner} data-pos="tl" />
      <div class={styles.corner} data-pos="tr" />
      <div class={styles.corner} data-pos="bl" />
      <div class={styles.corner} data-pos="br" />

      <div class={styles.content}>
        <div class={styles.logoWrap}>
          <img src={Logo} alt="Logo" />
        </div>
        <svg class={styles.loader} viewBox="0 0 50 50" aria-hidden="true">
          <circle class={styles.track} cx="25" cy="25" r="20" />
          <circle class={styles.arc} cx="25" cy="25" r="20" />
        </svg>
        <span class={styles.label}>Loading<span class={styles.dots} /></span>
      </div>
    </div>
  )
}

export default Loading;
