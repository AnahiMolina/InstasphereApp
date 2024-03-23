import { createRoot } from 'react-dom/client';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './assets/css/index.css';

/* Pages */
import Blank from './layouts/Blank.jsx';
import Tabs from './layouts/Tabs.jsx';
import Sidemenu from './layouts/Sidemenu.jsx';

import Acceso from './pages/Acceso.jsx';
import Registro from './pages/Registro.jsx';
import Pestanias from './pages/Pestanias.jsx';
import Mensajes from './pages/Mensajes.jsx';
import Perfil from './pages/Perfil.jsx';
import Buscar from './pages/Buscar';

setupIonicReact();

createRoot(document.getElementById('root')!).render(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Acceso />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/inicio">
          <Pestanias />
        </Route>
        <Route exact path="/perfil">
          <Perfil />
        </Route>
        <Route exact path="/mensajes">
          <Mensajes />
        </Route>
        <Route exact path="/buscar">
          <Buscar />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);