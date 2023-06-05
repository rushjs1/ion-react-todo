import {
  IonPage,
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import { useState } from "react";

import "../../theme/auth/registration.css";

const RegistrationPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonBackButton defaultHref="/auth">Back</IonBackButton>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="pt-52">
          <IonItem lines="none">
            <IonLabel position="stacked">First Name</IonLabel>
            <IonInput
              className="border-black border-2 rounded-md"
              onChange={(e) => {
                setForm({
                  ...form,
                  //@ts-ignore
                  firstName: e.target.value,
                });
              }}
            />
            {form.firstName}
          </IonItem>

          <IonItem lines="none">
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput className="border-black border-2 rounded-md" />
          </IonItem>

          <IonItem lines="none">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput className="border-black border-2 rounded-md" />
          </IonItem>

          <IonItem lines="none" className="">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput className="border-black border-2 rounded-md" />
          </IonItem>

          <IonButton
            className="font-bold text-lg px-2.5 mt-4 ml-2"
            expand="block"
          >
            <span>Submit</span>
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;
