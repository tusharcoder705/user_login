import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StoredUser, clearSession, getActiveUser } from '../auth/auth';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    const activeUser = getActiveUser();
    if (!activeUser) {
      history.replace('/login');
      return;
    }

    setUser(activeUser);
  }, [history]);

  const handleLogout = (): void => {
    clearSession();
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="home-content">
        <div className="home-shell">
          <IonCard className="home-card">
            <IonCardContent>
              <IonText>
                <h1 className="home-title">You’re logged in</h1>
              </IonText>
              <IonButton expand="block" shape="round" color="primary" onClick={() => history.push('/dashboard')} style={{ marginBottom: "1rem" }}>
                View Energy Dashboard
              </IonButton>

              {user ? (
                <IonText color="medium">
                  <p className="home-subtitle">
                    {user.name} ({user.email})
                  </p>
                </IonText>
              ) : null}

              <IonButton expand="block" onClick={handleLogout}>
                Logout
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
