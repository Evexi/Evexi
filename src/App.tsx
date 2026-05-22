import './styles/globals.css'

import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import Loading from '@/components/loading/loading';
import Environment from "@/utils/environment"
import Error from './components/error/error';
import { useStore } from '@/hooks/useStore';
import Evexi from 'evexi';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Logs from './components/logs/logs';
import Docs from './components/docs/docs';
import apps from './utils/registry';

const App: Component = () => {

  const { setInfo, setLoading, setDocsVisible, setActiveApp, setActiveAppTest } = useStore()

  onMount(async () => {
    const environment = await Environment.retrieve()
    const info = await Evexi.info()

    setInfo(info)
    setDocsVisible(environment.docs)
    setActiveApp(apps.fs.default)
    setActiveAppTest(apps.fs.default.tests[0])

    setLoading(false)
  })

  return (
    <div class="wrapper">
      <Loading />
      <Error />

      <Navbar />
      <div class='main-container'>
        <Sidebar />
        <Logs />
        <Docs />
      </div>
    </div>
  );
};

export default App;
