import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonIcon,
} from '@ionic/react';
import { warningOutline, flashOutline, alertCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
import '../components/EnergyConsumption.css';

const INITIAL_ALERTS = [
  { id: 1, type: 'critical', machine: 'Machine 2', message: 'Voltage spiked to 255V', time: '10 mins ago', icon: flashOutline },
  { id: 2, type: 'warning', machine: 'Machine 1', message: 'Power Factor dropping below 0.85', time: '1 hr ago', icon: warningOutline },
  { id: 3, type: 'info', machine: 'Machine 3', message: 'Offline for scheduled maintenance', time: '2 hrs ago', icon: alertCircleOutline }
];

const SystemAlerts: React.FC = () => {
  const [alerts] = useState(INITIAL_ALERTS);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>System Alerts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          
          <div className="energy-title-row">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Anomaly Detection</h2>
          </div>

          <div className="energy-widgets">
            <IonCard className="widget-card" style={{ borderColor: '#ef4444' }}>
              <div className="widget-title"><IonIcon icon={warningOutline} style={{ color: '#ef4444' }} /> Critical Needs</div>
              <div className="widget-value" style={{ color: '#ef4444' }}>1</div>
              <div className="widget-sub">Action required immediately</div>
            </IonCard>
            <IonCard className="widget-card">
              <div className="widget-title"><IonIcon icon={alertCircleOutline} /> Warnings</div>
              <div className="widget-value">1</div>
              <div className="widget-sub">Monitor closely</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderColor: '#10b981' }}>
              <div className="widget-title"><IonIcon icon={checkmarkCircleOutline} style={{ color: '#10b981' }} /> System Status</div>
              <div className="widget-value" style={{ color: '#10b981' }}>75%</div>
              <div className="widget-sub">Network health nominal</div>
            </IonCard>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>Recent Activity Logs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {alerts.map((alert) => (
                <IonCard key={alert.id} className="widget-card" style={{ margin: 0, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                      padding: '0.75rem', 
                      borderRadius: '50%', 
                      backgroundColor: alert.type === 'critical' ? '#fee2e2' : alert.type === 'warning' ? '#fef3c7' : '#e0e7ff',
                      color: alert.type === 'critical' ? '#ef4444' : alert.type === 'warning' ? '#f59e0b' : '#4f46e5'
                  }}>
                    <IonIcon icon={alert.icon} size="large" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                      {alert.machine}
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{alert.message}</div>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {alert.time}
                  </div>
                </IonCard>
              ))}
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default SystemAlerts;