import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const routeTitles: Record<string, string> = {
  '/power': 'Power Monitoring',
  '/feature3': 'Feature 3',
  '/feature4': 'Feature 4',
};

const ComingSoon: React.FC = () => {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || 'Coming Soon';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          color: '#6b7280'
        }}>
          <h2>{pageTitle}</h2>
          <p>This module is currently under construction. Coming soon!</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ComingSoon;