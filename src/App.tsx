import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { getActiveUser } from './auth/auth';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import EnergyDashboard from './pages/EnergyDashboard';
import AppMenu from './components/AppMenu';
import ComingSoon from './pages/ComingSoon';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <AppMenu />
        <IonRouterOutlet id="main">
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>

          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard">
            <EnergyDashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/power">
            <ComingSoon />
          </PrivateRoute>

          <PrivateRoute exact path="/feature3">
            <ComingSoon />
          </PrivateRoute>

          <PrivateRoute exact path="/feature4">
            <ComingSoon />
          </PrivateRoute>

          <Route exact path="/">
            <Redirect to={getActiveUser() ? '/dashboard' : '/login'} />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
