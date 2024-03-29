import { IonPage, IonContent, IonHeader, IonToolbar, IonTabBar, IonTabs, IonIcon, IonLabel, IonTabButton, IonRouterOutlet, } from "@ionic/react"
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, cubeOutline, person } from 'ionicons/icons';
import Inicio from "./Inicio.jsx";
import Mensajes from "./Mensajes.jsx";
import Buscar from "./Buscar.jsx";
import Perfil from "./Perfil.jsx";


export default function Pestanias() {
  return (
    <IonReactRouter basename={import.meta.env.BASE_URL}>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/inicio">
                <Inicio />
          </Route>
          <Route path="/buscar">
                <Buscar />
          </Route>
          <Route path="/perfil">
                <Perfil />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/inicio">
            <IonIcon aria-hidden="true" icon={cubeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/buscar">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/perfil">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}
