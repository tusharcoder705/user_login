import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAccordionGroup,
  IonAccordion,
  IonButton,
  IonFooter,
  useIonAlert
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router-dom';
import {
  hardwareChipOutline,
  pulseOutline,
  settingsOutline,
  speedometerOutline,
  logOutOutline,
  homeOutline
} from 'ionicons/icons';
import './AppMenu.css';
import { clearSession } from '../auth/auth';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Energy Consumption',
    url: '/dashboard',
    iosIcon: hardwareChipOutline,
    mdIcon: hardwareChipOutline
  },
  {
    title: 'Power Monitoring',
    url: '/power',
    iosIcon: pulseOutline,
    mdIcon: pulseOutline
  },
  {
    title: 'Feature 3',
    url: '/feature3',
    iosIcon: speedometerOutline,
    mdIcon: speedometerOutline
  },
  {
    title: 'Feature 4',
    url: '/feature4',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
];

const AppMenu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [presentAlert] = useIonAlert();

  const handleLogout = () => {
    presentAlert({
      header: 'Log Out',
      message: 'Are you sure you want to log out of your account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Log Out',
          role: 'confirm',
          handler: () => {
            clearSession();
            history.push('/login');
          },
        },
      ],
    });
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <div className="menu-header">
          <IonIcon icon={homeOutline} className="menu-home-icon" />
          <IonLabel className="menu-title-main">Energy Dashboard</IonLabel>
        </div>

        <IonList className="menu-content-list" lines="none">
          {appPages.map((appPage, index) => {
            const isActive = location.pathname.startsWith(appPage.url);
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={`menu-item ${isActive ? 'selected' : ''}`}
                  routerLink={appPage.url}
                  routerDirection="root"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                    className="menu-item-icon"
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>

      <IonFooter className="menu-footer">
        <IonMenuToggle autoHide={false}>
          <IonItem button onClick={handleLogout} className="logout-item" lines="none">
            <IonIcon slot="start" icon={logOutOutline} />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonFooter>
    </IonMenu>
  );
};

export default AppMenu;