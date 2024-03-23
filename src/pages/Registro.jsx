import { IonContent, IonText, IonInput, IonPage, IonList, IonItem, IonCheckbox, IonButton } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';


export default function Registro() {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1 className='ion-margin-start'>Regístrate</h1>
        </IonText>
        <br />

        <IonItem>
          <IonInput type='email' fill='solid' label='Correo Electronico' labelPlacement='floating' color='danger' autoFocus ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label='Nombre Completo' labelPlacement='floating' color='danger' type='text'></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label='Nombre de Usuario' labelPlacement='floating' color='danger' type='text'></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label='Contraseña' labelPlacement='floating' color='danger' type='password'></IonInput>
        </IonItem>

        <br />
        <br />

        <IonCheckbox labelPlacement='end' >
          Estoy de acuerdo con los Términos y Condiciones
        </IonCheckbox>

        <br />
        <br />

        <IonButton expand="block" color='tertiary'>Registrarse</IonButton>

        <p className='ion-text-center'>¿Estás Registrado? &nbsp;
          <Link color='danger' onClick={history.goBack}>Iniciar Sesión</Link>
        </p>

      </IonContent>
    </IonPage>
  )
}
