import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle } from "@ionic/react"
import image from '../assets/img/image.jpg'

export default function Publicacion({ descripcion, post }) {
  return (
    <IonCard>
      <img src={post == null? image : post} />
      <IonCardHeader>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        {descripcion}
      </IonCardContent>
    </IonCard>
  )
}
