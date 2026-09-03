/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import App from './App';
import Evexi, { EvexiMock } from 'evexi';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

if (import.meta.env.DEV) {
  new EvexiMock(Evexi).fs().info().env({
    'type': "Hello World",
    'docs': "false",
    'helper': "false",
    "reports_url": "https://utility-service.evexi.technology/evexi-qa"
  }).info()
}

render(() => <App />, root!);
