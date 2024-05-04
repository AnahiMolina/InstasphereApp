import { useEffect, useState } from "react"
import { IonContent, IonPage } from "@ionic/react"
import Titulo from "../components/Titulo"
import Publicacion from "../components/Publicacion"

export default function Inicio() {
  return (
    <IonPage>
      <Titulo />
      <Contenido />
    </IonPage>
  )
}

export function Contenido() {

  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://instasphere.vercel.app/publicaciones/')
      .then(response => response.json())
      .then(json => setPost(json))
  }, [])

  return (
    <IonContent>
      {post.map((post, index) =>
        <Publicacion descripcion={post.descripcion} post={post.fecha} />
      )}
    </IonContent>
  )
}