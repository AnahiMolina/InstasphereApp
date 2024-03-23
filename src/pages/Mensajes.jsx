import { IonContent, IonPage } from "@ionic/react"
import Titulo from "../components/Titulo"
export default function Mensajes() {
    return (
        <IonPage>
            <Titulo />
            <IonContent className="ion-padding">
                <h1>Mensajes</h1>
            </IonContent>
        </IonPage>
    )
}
