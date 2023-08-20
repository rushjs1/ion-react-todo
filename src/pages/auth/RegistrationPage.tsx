import { FormEvent, useState } from "react";
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
  IonTitle,
  useIonRouter,
  IonBackButton,
  InputChangeEventDetail,
} from "@ionic/react";
import { useAuth } from "../../hooks/data/useAuth";
import { useToast } from "../../hooks/components/useToast";

import "../../theme/auth/registration.css";

interface Form {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  [key: string]: string;
}

const RegistrationPage = () => {
  const router = useIonRouter();
  const { createUser, foo, isLoggedIn, setIsLoggedIn } = useAuth();
  const { presentToast } = useToast();

  const [form, setForm] = useState<Form>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<Form>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function setFormData(
    event: IonInputCustomEvent<InputChangeEventDetail>,
    key: string,
  ) {
    setForm({
      ...form,
      [key]: event.detail.value as string,
    });
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    //reset errors
    setFormErrors({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });

    createUser(form).then((res) => {
      if (res.errors && Object.entries(res.errors).length > 0) {
        Object.keys(res.errors).forEach((key) => {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [key]: res.errors[key][0] as string,
          }));
        });

        presentToast(
          "bottom",
          "error-toast",
          "Please fix the following errors.",
        );
        return;
      }

      //registration successful
      setIsLoggedIn(true);
      presentToast("bottom", "success-toast", `Welcome, ${form.first_name}`);
      router.push("/tabs/tab1", "forward", "push");
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonBackButton defaultHref="/auth">Back</IonBackButton>
            <IonTitle>Sign Up</IonTitle>
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
                className={`${
                  formErrors.first_name.length > 0 ? "error" : ""
                }  border-black border-2 rounded-md`}
                onIonChange={(e) => setFormData(e, "first_name")}
              />

              {formErrors.first_name.length > 0 && (
                <InputError formErrors={formErrors} name="first_name" />
              )}
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput
                required
                type="text"
                className={`${
                  formErrors.last_name.length > 0 ? "error" : ""
                }  border-black border-2 rounded-md`}
                onIonChange={(e) => setFormData(e, "last_name")}
              />

              {formErrors.last_name.length > 0 && (
                <InputError formErrors={formErrors} name="last_name" />
              )}
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                required
                type="email"
                className={`${
                  formErrors.email.length > 0 ? "error" : ""
                }  border-black border-2 rounded-md`}
                onIonChange={(e) => setFormData(e, "email")}
              />

              {formErrors.email.length > 0 && (
                <InputError formErrors={formErrors} name="email" />
              )}
            </IonItem>

            <IonItem lines="none" className="">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                required
                type="password"
                className={`${
                  formErrors.password.length > 0 ? "error" : ""
                }  border-black border-2 rounded-md`}
                onIonChange={(e) => setFormData(e, "password")}
              />

              {formErrors.password.length > 0 && (
                <InputError formErrors={formErrors} name="password" />
              )}
            </IonItem>
            <IonButton
              className="font-bold text-lg px-2.5 mt-4 ml-2"
              expand="block"
              type="submit"
            >
              <span>Submit</span>
              {process.env.REACT_APP_FOO}
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

const InputError = (props: { formErrors: Form; name: string }) => {
  return (
    <div>
      <span className="text-sm text-red-500 mt-1 pl-2">
        {props.formErrors[props.name].length > 0 &&
          props.formErrors[props.name]}
      </span>
    </div>
  );
};

export default RegistrationPage;
