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
import { leafOutline, waterOutline, planetOutline } from 'ionicons/icons';
import ApexCharts from 'apexcharts';
import '../components/EnergyConsumption.css';

const Sustainability: React.FC = () => {
  const co2ChartRef = useRef<HTMLDivElement | null>(null);
  const mixChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let co2Chart: ApexCharts | null = null;
    let mixChart: ApexCharts | null = null;

    if (co2ChartRef.current) {
      co2Chart = new ApexCharts(co2ChartRef.current, {
        chart: { type: 'bar', height: 350, toolbar: { show: false } },
        series: [
          { name: 'Grid Emissions (Tons)', data: [2.1, 1.8, 2.3, 1.5, 1.9, 1.4, 1.1] }
        ],
        colors: ['#ef4444'],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        plotOptions: { bar: { borderRadius: 4 } },
        dataLabels: { enabled: false }
      });
      co2Chart.render();
    }

    if (mixChartRef.current) {
      mixChart = new ApexCharts(mixChartRef.current, {
        chart: { type: 'donut', height: 350 },
        series: [55, 30, 15],
        labels: ['Grid Power', 'Solar Array', 'Wind Source'],
        colors: ['#64748b', '#f59e0b', '#10b981'],
        plotOptions: {
          pie: { donut: { size: '65%' } }
        },
        dataLabels: { enabled: true, style: { fontSize: '14px', fontWeight: 600 } }
      });
      mixChart.render();
    }

    return () => {
      co2Chart?.destroy();
      mixChart?.destroy();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Sustainability</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          
          <div className="energy-title-row">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Environmental Impact</h2>
          </div>

          <div className="energy-widgets">
            <IonCard className="widget-card" style={{ borderTop: '4px solid #10b981', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={planetOutline} style={{ color: '#10b981' }} /> Carbon Offset</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>1.2 <span style={{ fontSize: '1rem', color: '#64748b' }}>Tons CO2</span></div>
              <div className="widget-sub" style={{ fontWeight: 500, color: '#10b981' }}>● 15% improvement</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #f59e0b', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={leafOutline} style={{ color: '#f59e0b' }} /> Green Energy</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>45 <span style={{ fontSize: '1rem', color: '#64748b' }}>%</span></div>
              <div className="widget-sub" style={{ fontWeight: 500, color: '#64748b' }}>Running on Solar & Wind</div>
            </IonCard>
            <IonCard className="widget-card" style={{ borderTop: '4px solid #3b82f6', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <div className="widget-title" style={{ fontWeight: 600 }}><IonIcon icon={waterOutline} style={{ color: '#3b82f6' }} /> Water Usage</div>
              <div className="widget-value" style={{ margin: '10px 0' }}>4.5 <span style={{ fontSize: '1rem', color: '#64748b' }}>kL</span></div>
              <div className="widget-sub" style={{ fontWeight: 500, color: '#64748b' }}>Weekly Cooling Total</div>
            </IonCard>
          </div>

          <div className="energy-grid">
            <IonCard className="energy-card" style={{ borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <div className="card-head" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
                <div className="card-title" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Energy Source Mix</div>
                <div className="card-badge" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>Active</div>
              </div>
              <div ref={mixChartRef} style={{ padding: '1rem 0' }}></div>
            </IonCard>

            <IonCard className="energy-card" style={{ borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
              <div className="card-head" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
                <div className="card-title" style={{ fontWeight: 700, fontSize: '1.1rem' }}>CO2 Emissions Trend</div>
                <div className="card-badge" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>Weekly</div>
              </div>
              <div ref={co2ChartRef} style={{ padding: '1rem 0' }}></div>
            </IonCard>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sustainability;