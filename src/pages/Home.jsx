import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Text from '../components/Text.jsx';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Text />
      </IonContent>
    </IonPage>
  )
}
