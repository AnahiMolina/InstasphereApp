import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRouterOutlet,
    IonSplitPane
} from '@ionic/react';

import { heartSharp } from 'ionicons/icons';


export default function Sidemenu() {
    return (
        <IonReactRouter>
            <IonSplitPane contentId="main">
                <Menu />
                <IonRouterOutlet id="main">
                    <Route path="/menu" exact={true}>
                        <Page title="Inicio" >
                            <h1>Inicio</h1>
                        </Page>
                    </Route>
                    <Route path="/menu/pagina1" exact={true}>
                        <Page title="Pagina1">
                            <h1>Pagina1</h1>
                        </Page>
                    </Route>
                    <Route path="/menu/pagina2" exact={true}>
                        <Page title="Pagina2">
                            <h1>Pagina2</h1>
                        </Page>
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    )
}


export function Menu() {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Inbox</IonListHeader>
                    <IonNote>hi@ionicframework.com</IonNote>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink="/menu" routerDirection="none" lines="none" detail={false}>
                            <IonIcon aria-hidden="true" slot="start" icon={heartSharp} />
                            <IonLabel>Inicio</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/menu/pagina1" routerDirection="none" lines="none" detail={false}>
                            <IonIcon aria-hidden="true" slot="start" icon={heartSharp} />
                            <IonLabel>Pagina1</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/menu/pagina2" routerDirection="none" lines="none" detail={false}>
                            <IonIcon aria-hidden="true" slot="start" icon={heartSharp} />
                            <IonLabel>Pagina2</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export function Page({ children, title }) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div id="container">
                    {children}
                </div>
            </IonContent>
        </IonPage>
    )
}