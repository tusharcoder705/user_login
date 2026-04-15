import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import EnergyConsumption from '../components/EnergyConsumption';
import './EnergyDashboard.css';

const EnergyDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Energy Consumption</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <EnergyConsumption />
      </IonContent>
    </IonPage>
  );
};

export default EnergyDashboard;
