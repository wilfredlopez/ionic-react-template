import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/react";
import { SLOT } from "../declarations";

interface Props {
  title: string;
  slot?: SLOT;
}

const Header: React.FC<Props> = ({ title, slot = "start" }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot={slot}>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
