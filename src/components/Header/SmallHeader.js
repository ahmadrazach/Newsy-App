import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const SmallHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar
      style={{background:"#f0652f"}}
        color="primary"
      >
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default SmallHeader;