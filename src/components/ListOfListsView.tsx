import {
  IonPage,
  IonContent,
  IonHeader,
  IonBackButton,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import { useParams } from "react-router-dom";

export default function ListView() {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>List #{id}</div>
      </IonContent>
    </IonPage>
  );
}
