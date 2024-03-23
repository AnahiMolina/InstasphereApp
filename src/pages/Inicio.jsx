import { IonContent, IonPage } from "@ionic/react"
import Titulo from "../components/Titulo"
import Publicacion from "../components/Publicacion"

export default function Inicio() {
    return (
        <IonPage>
            <Titulo />
            <IonContent>
                <Publicacion />
                <Publicacion />
                <Publicacion />
            </IonContent>
        </IonPage>
    )
}
