import './style.css'

import { useStore } from "@/hooks/useStore";
import { Component } from "solid-js";
import Logo from "/logo.svg"

const Loading: Component = () => {
  const { loading } = useStore()
  return (
    <div class="loading" classList={{ visible: loading() }}>
      <img src={Logo} alt="Logo" />
      <svg class="loader" viewBox="0 0 50 50" aria-hidden="true">
        <circle class="track" cx="25" cy="25" r="20" />
        <circle class="arc" cx="25" cy="25" r="20" />
      </svg>

      <span>Loading...</span>
    </div>
  )
}

export default Loading;
