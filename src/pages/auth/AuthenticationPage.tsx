import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { listCircle } from "ionicons/icons";

const AuthenticationPage = () => {
  return (
    <IonPage>
      <IonContent color="primary">
        <div className="w-full min-h-screen">
          <div className="py-16 px-10 text-white flex flex-col items-center justify-between min-h-screen">
            <div className="flex items-center space-x-4">
              <IonIcon icon={listCircle} className="text-6xl" />
              <span className="font-bold text-4xl">Todo Lists</span>
            </div>
            <div className="">
              <LoginPage />
              <RegistrationPage />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthenticationPage;
