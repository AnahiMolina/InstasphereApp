import { useEffect, useState } from "react"
import Publicacion from "../components/Publicacion"
import { IonGrid } from "@ionic/react"

export default function Mispost() {
    const [post, setPost] = useState([])
  
    useEffect(() => {
      fetch('https://instasphere.vercel.app/publicaciones/')
        .then(response => response.json())
        .then(json => setPost(json))
    }, [])
  
    return (
      <IonGrid>
        {post.map((post, index) =>
          <Publicacion descripcion={post.descripcion} post={post.fecha} />
        )}
      </IonGrid>
    )
  }