import React, { useEffect, useRef } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonIcon
} from '@ionic/react';
import { thermometerOutline, medkitOutline, pulseOutline, warningOutline } from 'ionicons/icons';
import ApexCharts from 'apexcharts';
import '../components/EnergyConsumption.css';

const MachineHealth: React.FC = () => {
  const healthChartRef = useRef<HTMLDivElement | null>(null);
  const tempChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let healthChart: ApexCharts | null = null;
    let tempChart: ApexCharts | null = null;

    if (healthChartRef.current) {
      healthChart = new ApexCharts(healthChartRef.current, {
        chart: { type: 'radar', height: 350, toolbar: { show: false } },
        series: [
          { name: 'Machine 1', data: [90, 80, 95, 85, 92] },
          { name: 'Machine 2', data: [75, 90, 85, 90, 88] }
        ],
        labels: ['Vibration', 'Temperature', 'Lubrication', 'Acoustics', 'Motor Load'],
        stroke: { width: 2 },
        fill: { opacity: 0.2 },
        markers: { size: 4 },
        colors: ['#4f46e5', '#f59e0b']
      });
      healthChart.render();
    }

    if (tempChartRef.current) {
      tempChart = new ApexCharts(tempChartRef.current, {
        chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
        series: [
          { name: 'Machine 1 Temp', data: [65, 68, 70, 72, 75, 74, 76] },
          { name: 'Machine 2 Temp', data: [55, 58, 60, 59, 62, 61, 60] },
          { name: 'Machine 3 Temp', data: [62, 64, 63, 65, 67, 66, 64] }
        ],
        stroke: { curve: 'smooth', width: 3 },
        colors: ['#4f46e5', '#f59e0b', '#10b981'],
        xaxis: { categories: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'] },
        dataLabels: { enabled: false }
      });
      tempChart.render();
    }

    return () => {
      healthChart?.destroy();
      tempChart?.destroy();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Machine Health</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          
          <div className="energy-title-row">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Predictive Maintenance</h2>
          </div>

          <div className="energy-widgets">
            <IonCard className="widget-card" style={{ borderTop: '4px solid #10b981', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={medkitOutline} style={{ color: '#10b981' }} /> Health Score</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>92 <span style={{ fontSize: '1rem', color: '#64748b' }}>/ 100</span></div>
              <div className="widget-sub" style={{ fontWeight: 500, color: '#64748b' }}>Overall Fleet Status</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #f59e0b', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={thermometerOutline} style={{ color: '#f59e0b' }} /> Avg Temp</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>68 <span style={{ fontSize: '1rem', color: '#64748b' }}>°C</span></div>
              <div className="widget-sub negative" style={{ color: '#f59e0b', fontWeight: 500 }}>Slightly elevated (M1)</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #ef4444', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={pulseOutline} style={{ color: '#ef4444' }} /> Vibration</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>0.45 <span style={{ fontSize: '1rem', color: '#64748b' }}>in/s</span></div>
              <div className="widget-sub negative" style={{ color: '#ef4444', fontWeight: 500 }}>Warning threshold (M2)</div>
            </IonCard>
          </div>

          <div className="energy-grid">
            <IonCard className="energy-card" style={{ borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <div className="card-head" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
                <div className="card-title" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Component Diagnostics</div>
                <div className="card-badge" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>Radar</div>
              </div>
              <div ref={healthChartRef} style={{ padding: '1rem 0' }}></div>
            </IonCard>

            <IonCard className="energy-card" style={{ borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <div className="card-head" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
                <div className="card-title" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Thermal Trends</div>
                <div className="card-badge" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>Live</div>
              </div>
              <div ref={tempChartRef} style={{ padding: '1rem 0' }}></div>
            </IonCard>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default MachineHealth;