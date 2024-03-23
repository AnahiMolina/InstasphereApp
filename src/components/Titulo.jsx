import { IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonIcon } from "@ionic/react"
import logo from '../assets/img/logo2.png'
import { paperPlane, person } from 'ionicons/icons';
import { Link } from "react-router-dom";

export default function Titulo({ mostrar = true }) {
  return (
    <IonHeader translucent={true}>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol size="11">
              <h1 className="instasphere">
                <img src={logo} width='24' alt='24' style={{ marginRight: 13 }} />
                InstaSphere
              </h1>
            </IonCol>
            <IonCol size="1">
              {mostrar &&
                <Link to='/mensajes'>
                  <IonIcon icon={paperPlane} style={{ paddingTop: '8px', color:'white', fontSize:'20px'}} />
                </Link>
              }
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  )
}
