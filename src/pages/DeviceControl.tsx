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
  IonToggle
} from '@ionic/react';
import { serverOutline, snowOutline, bulbOutline, hardwareChipOutline } from 'ionicons/icons';
import '../components/EnergyConsumption.css';

const MOCK_DEVICES = [
  { id: 1, name: 'HVAC System (Zone 1)', icon: snowOutline, status: true, power: '12.5 kW', location: 'Server Room A' },
  { id: 2, name: 'Main Lighting', icon: bulbOutline, status: true, power: '2.1 kW', location: 'Floor 1' },
  { id: 3, name: 'Server Rack 1', icon: serverOutline, status: true, power: '4.8 kW', location: 'Server Room A' },
  { id: 4, name: 'Assembly Line Motors', icon: hardwareChipOutline, status: false, power: '0.0 kW', location: 'Factory Floor' }
];

const DeviceControl: React.FC = () => {
  const [devices, setDevices] = useState(MOCK_DEVICES);

  const toggleDevice = (id: number) => {
    setDevices(devices.map(d => (d.id === id ? { ...d, status: !d.status, power: !d.status ? (id === 4 ? '18.5 kW' : d.power) : '0.0 kW' } : d)));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Device Control</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          
          <div className="energy-title-row">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Smart Infrastructure Controls</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {devices.map((device) => (
              <IonCard key={device.id} className="widget-card" style={{ margin: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', backgroundColor: device.status ? '#e0e7ff' : '#f1f5f9', borderRadius: '8px', color: device.status ? '#4f46e5' : '#94a3b8' }}>
                      <IonIcon icon={device.icon} size="large" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1.1rem' }}>{device.name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{device.location}</div>
                    </div>
                  </div>
                  <IonToggle checked={device.status} onIonChange={() => toggleDevice(device.id)} color="primary" />
                </div>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Current Load</span>
                  <span style={{ fontWeight: 'bold', color: device.status ? '#10b981' : '#94a3b8' }}>{device.power}</span>
                </div>
              </IonCard>
            ))}
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default DeviceControl;