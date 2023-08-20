import { useIonToast } from "@ionic/react";

export const useToast = () => {
  const [present] = useIonToast();

  const presentToast = (
    position: "top" | "bottom" | "middle" | undefined,
    cssClass: "success-toast" | "error-toast",
    message: string,
  ) => {
    present({
      message,
      position,
      cssClass,
      duration: 1500,
    });
  };

  return {
    presentToast,
  };
};
