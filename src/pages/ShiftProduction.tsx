import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonIcon
} from '@ionic/react';
import { flashOutline, speedometerOutline, pulseOutline } from 'ionicons/icons';
import '../components/EnergyConsumption.css';

const ShiftProduction: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Shift Summary</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          <div className="energy-title-row">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Shift Energy Summary</h2>
          </div>

          <div className="energy-widgets">
            <IonCard className="widget-card" style={{ borderTop: '4px solid #4f46e5', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600, color: '#4f46e5' }}><IonIcon icon={flashOutline} /> Total Energy</div>
              <div className="widget-value">412.8 <span style={{ fontSize: '1rem', color: '#64748b' }}>kWh</span></div>
              <div className="widget-sub" style={{ color: '#64748b', fontWeight: 500 }}>+6.2% vs last shift</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #ef4444', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600, color: '#ef4444' }}><IonIcon icon={speedometerOutline} /> Peak Demand</div>
              <div className="widget-value">96.4 <span style={{ fontSize: '1rem', color: '#64748b' }}>kW</span></div>
              <div className="widget-sub" style={{ color: '#64748b', fontWeight: 500 }}>Recorded at 14:20</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #10b981', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600, color: '#10b981' }}><IonIcon icon={pulseOutline} /> Avg Power Factor</div>
              <div className="widget-value">0.91</div>
              <div className="widget-sub" style={{ color: '#64748b', fontWeight: 500 }}>Within target range</div>
            </IonCard>
          </div>

          <div className="energy-grid" style={{ marginTop: '1.5rem' }}>
            <IonCard className="energy-card" style={{ gridColumn: 'span 2', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <div className="card-head" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
                <div className="card-title" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Energy Budget vs Used</div>
                <div className="card-badge" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>Shift</div>
              </div>
              <IonList lines="full" style={{ padding: 0 }}>
                <IonItem>
                  <IonLabel>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Machine 1</strong>
                      <span style={{ color: '#64748b' }}>142 / 160 kWh</span>
                    </div>
                    <IonProgressBar value={142 / 160} color="primary" />
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Machine 2</strong>
                      <span style={{ color: '#64748b' }}>160 / 160 kWh</span>
                    </div>
                    <IonProgressBar value={1} color="success" />
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Machine 3</strong>
                      <span style={{ color: '#64748b' }}>110 / 150 kWh</span>
                    </div>
                    <IonProgressBar value={110 / 150} color="warning" />
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShiftProduction;
