import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";

interface Props {}

const Wilfred: React.FC<Props> = () => {
  return (
    <IonPage>
      <Header title="Wilfred" slot="primary" />
      <IonContent>
        <h1>WILFRED</h1>
      </IonContent>
    </IonPage>
  );
};

export default Wilfred;
