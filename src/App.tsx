import './styles/globals.css'

import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import apps from '@/utils/registry';
import Loading from '@/components/loading/loading';
import Environment from "@/utils/environment"
import Error from './components/error/error';
import { useOrientation } from '@/hooks/useOrientation';
import { useStore } from '@/hooks/useStore';
import Evexi from 'evexi';
import Navbar from './components/navbar/navbar';

const App: Component = () => {

  const orientation = useOrientation()
  const { setInfo, setLoading } = useStore()

  onMount(async () => {
    const environment = await Environment.retrieve()
    const info = await Evexi.info()
    setInfo(info)

    setLoading(false)
  })

  return (
    <div class="wrapper">
      <Navbar />
      <Loading />
      <Error />
    </div>
  );
};

export default App;
