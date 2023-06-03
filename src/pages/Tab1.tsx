import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";

import {
  addCircleOutline,
  chevronUpCircle,
  pencilOutline,
} from "ionicons/icons";

import { Route } from "react-router-dom";

const Tab1: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "foo",
    },
    {
      id: 2,
      title: "bar",
    },
    {
      id: 3,
      title: "bazz",
    },
  ];

  function foo(list: { id: number; title: string }) {
    console.log(list.title);

    //Redirect(`/${list.title}`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="flex flex-col">
          <IonList>
            <IonListHeader>
              <IonLabel>Todo Lists</IonLabel>
              <IonButton>See All</IonButton>
            </IonListHeader>
            {data.map((list, index) => (
              <IonItem
                onClick={() => foo(list)}
                key={index}
                routerLink={`/tab1/${list.id}`}
              >
                <IonLabel>{list.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="end"
          className="bottom-6 right-6"
        >
          <IonFabButton>
            <IonIcon icon={chevronUpCircle} className="w-8 h-8" />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={addCircleOutline} className="w-8 h-8" />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={pencilOutline} className="w-5 h-5" />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
