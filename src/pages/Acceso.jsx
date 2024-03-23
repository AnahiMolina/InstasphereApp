import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg,
  IonText, IonItem, IonInput, IonButton
} from '@ionic/react';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';

export default function Acceso() {
  return (
    <IonPage>
      <IonContent>
        <div id='container'>
          <img src={logo} width={100} height={100} />
          <IonText>
            <h1>Iniciar Sesión</h1>
          </IonText>

          <p>¡Un gusto verte de nuevo!</p>
          <br />

          <IonItem>
            <IonInput label="Correo Electrónico" labelPlacement="floating" placeholder="hola@ejemplo text" color='danger'></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Contraseña" labelPlacement="floating" type="password" color='danger'></IonInput>
          </IonItem>
          <br /><br />

          <Link to='/inicio'>
            <IonButton color="tertiary" expand='block' style={{ margin: '0 10px' }}>
              Iniciar Sesión
            </IonButton>
          </Link>
          <br />

          <IonText color='primary'>
            <a href="">
              ¿Olvidaste tu constraseña?
            </a>
          </IonText>
          <br /><br /><br />

          <p>
            <IonText color=''>
              ¿No tienes cuenta? &nbsp;
              <IonText color='danger'>
                <Link color='danger' to='/registro'>Regístrate</Link>
              </IonText>
            </IonText>
          </p>

        </div>
      </IonContent>
    </IonPage>
  )
}
