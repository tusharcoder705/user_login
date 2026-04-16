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
import { cashOutline, trendingUpOutline, calendarOutline } from 'ionicons/icons';
import ApexCharts from 'apexcharts';
import '../components/EnergyConsumption.css';

const CostAnalysis: React.FC = () => {
  const barChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let costChart: ApexCharts | null = null;
    
    if (barChartRef.current) {
      costChart = new ApexCharts(barChartRef.current, {
        chart: { type: 'bar', height: 350, toolbar: { show: false } },
        series: [{ name: 'Cost ($)', data: [12.5, 14.2, 11.8, 15.0, 18.2, 13.9, 10.5] }],
        colors: ['#4f46e5'],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        dataLabels: { enabled: true, style: { colors: ['#fff'] } },
        plotOptions: { bar: { borderRadius: 4, dataLabels: { position: 'top' } } }
      });
      costChart.render();
    }

    return () => {
      costChart?.destroy();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="primary" />
          </IonButtons>
          <IonTitle>Cost & Billing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ '--background': '#f8fafc' }}>
        <div className="energy-inner" style={{ paddingTop: '1rem' }}>
          
          <div className="energy-widgets">
            <IonCard className="widget-card">
              <div className="widget-title"><IonIcon icon={cashOutline} /> Today's Cost</div>
              <div className="widget-value">$14.20</div>
              <div className="widget-sub negative">▲ 5% vs Yesterday</div>
            </IonCard>
            <IonCard className="widget-card">
              <div className="widget-title"><IonIcon icon={calendarOutline} /> Est. Month Bill</div>
              <div className="widget-value">$415.00</div>
              <div className="widget-sub">Projected on current load</div>
            </IonCard>
            <IonCard className="widget-card">
              <div className="widget-title"><IonIcon icon={trendingUpOutline} /> Tariff Rate</div>
              <div className="widget-value">$0.15 <span style={{ fontSize: '0.8rem', color: '#64748b' }}>/ kWh</span></div>
              <div className="widget-sub">Peak hours rate active</div>
            </IonCard>
          </div>

          <div className="energy-grid">
            <IonCard className="energy-card" style={{ gridColumn: 'span 2' }}>
              <div className="card-head">
                <div className="card-title">Daily Expenditure This Week</div>
                <div className="card-badge">History</div>
              </div>
              <div ref={barChartRef} style={{ padding: '1rem 0' }}></div>
            </IonCard>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default CostAnalysis;