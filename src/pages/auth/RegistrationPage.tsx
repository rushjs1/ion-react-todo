import { IonInputCustomEvent } from "@ionic/core";
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
  InputChangeEventDetail,
} from "@ionic/react";
import { FormEvent, useState } from "react";

import "../../theme/auth/registration.css";

const RegistrationPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function setFormData(
    event: IonInputCustomEvent<InputChangeEventDetail>,
    key: string
  ) {
    setForm({
      ...form,
      [key]: event.detail.value as string,
    });
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    console.log(form);
  }

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
        <form onSubmit={(e) => submit(e)}>
          <IonList className="pt-52">
            <IonItem lines="none">
              <IonLabel position="stacked">First Name</IonLabel>
              <IonInput
                required
                type="text"
                className="border-black border-2 rounded-md"
                onIonChange={(e) => setFormData(e, "firstName")}
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput
                required
                type="text"
                className="border-black border-2 rounded-md"
                onIonChange={(e) => setFormData(e, "lastName")}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                required
                type="email"
                className="border-black border-2 rounded-md"
                onIonChange={(e) => setFormData(e, "email")}
              />
            </IonItem>

            <IonItem lines="none" className="">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                required
                type="password"
                className="border-black border-2 rounded-md"
                onIonChange={(e) => setFormData(e, "password")}
              />
            </IonItem>

            <IonButton
              className="font-bold text-lg px-2.5 mt-4 ml-2"
              expand="block"
              type="submit"
            >
              <span>Submit</span>
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;
