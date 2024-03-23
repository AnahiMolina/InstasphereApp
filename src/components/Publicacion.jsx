import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from "@ionic/react"
import image from '../assets/img/image.jpg'

export default function Publicacion() {
  return (
    <IonCard>
      <img src={image} />
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  )
}
