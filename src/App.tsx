import './styles/globals.css'

import type { Component } from 'solid-js';
import apps from '@/utils/registry';
import Loading from '@/components/loading';
import Environment from "@/utils/environment"
import { useOrientation } from '@/hooks/useOrientation';

const App: Component = () => {

  const orientation = useOrientation()

  const environment = Environment.retrieve()

  return (
    <div class="wrapper" classList={{ 'portrait': orientation() === 'portrait', 'landscape': orientation() === 'landscape' }}>
      <Loading />
      <h1>Hello world!!!!</h1>
    </div>
  );
};

export default App;
