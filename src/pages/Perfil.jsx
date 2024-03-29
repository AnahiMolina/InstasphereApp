import { IonPage, IonContent, IonHeader, IonGrid, IonRow, IonCol, IonButton } from "@ionic/react"
import Titulo from "../components/Titulo"

export default function Perfil() {
  return (
    <IonPage>
      <IonHeader>
        <Titulo />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              Foto
            </IonCol>
            <IonCol size="2">
              Post
            </IonCol>
            <IonCol size="3">
              Seguidores
            </IonCol>
            <IonCol size="3">
              Siguiendo
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
      </IonContent>
    </IonPage>
  )
}
