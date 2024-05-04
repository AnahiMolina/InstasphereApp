import { useState } from "react";
import { IonPage, IonContent, IonHeader, IonGrid, IonRow, IonCol, IonButton, IonAvatar, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react"
import Titulo from "../components/Titulo"
import { IonIcon } from '@ionic/react';
import { gridOutline, albumsOutline } from 'ionicons/icons';
import Mispost from "./Misposts";
import Misetiquetas from "./Misetiquetas";

export default function Perfil() {

   const [pagina, setPagina] = useState('publicaciones')
   const vista = () => {
      let value = e.target.value
      setPagina(value)
   }

   return (
      <IonPage>
         <IonHeader>
            <Titulo />
         </IonHeader>
         <IonContent className="ion-padding">
            <IonGrid>
               <IonRow>
                  <IonCol size="4">
                     <IonAvatar>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                  </IonCol>
                  <IonCol size="2">
                     <IonLabel>
                        18
                        <br />
                        Post
                     </IonLabel>
                  </IonCol>
                  <IonCol size="3">
                     <IonLabel>
                        18
                        <br />
                        Seguidores
                     </IonLabel>
                  </IonCol>
                  <IonCol size="3">
                     <IonLabel>
                        10
                        <br />
                        Siguiendo
                     </IonLabel>
                  </IonCol>
               </IonRow>
               <IonRow>
                  <IonCol size='6'>
                     <IonButton size="small" expand="block">
                        Editar Perfil
                     </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                     <IonButton size="small" expand="block">
                        Compartir Perfil
                     </IonButton>
                  </IonCol>
               </IonRow>
            </IonGrid>
            <IonRow>
               <IonSegment value="publicaciones">
                  <IonSegmentButton value="publicaciones" onClick={vista}>
                     <IonLabel>
                        <IonIcon icon={gridOutline}></IonIcon>
                     </IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="etiquetas" onClick={vista}>
                     <IonLabel>
                        <IonIcon icon={albumsOutline}></IonIcon>
                     </IonLabel>
                  </IonSegmentButton>
               </IonSegment>
            </IonRow>
            <IonRow>
               {pagina == 'publicaciones' ? <Mispost /> : <Misetiquetas />}
            </IonRow>
         </IonContent>
      </IonPage>
   )
}
