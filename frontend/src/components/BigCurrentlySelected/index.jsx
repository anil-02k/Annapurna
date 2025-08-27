import { useEffect, useState } from 'react';

import './style.scss';
import { useTranslation } from 'react-i18next';

const BigCurrentlySelected = (props) => {
  const [color, setColor] = useState('rgba(39, 174, 96, 1)');

  useEffect(() => {
    if (props.currentPlot && props.currentPlot.type === 'crop') { 
      if (props.currentPlot.state === 'Spring' || props.currentPlot.state === 'Summer') {
        setColor('rgba(39, 174, 96, 1)');
      } else {
        setColor('rgba(237, 193, 81, 1)');
      }
    }
    else {
      setColor('rgba(64, 145, 220, 1)');
    }
  }, [props.currentPlot])

  const { t } = useTranslation();
  return (
    <div
      className="big-currently-selected right-into"
      style={{
        backgroundImage: `linear-gradient(to top, ${color} 70%, rgba(178, 178, 178, 0)), url(${props.currentPlot.image || 'https://i.imgur.com/qqWYtUu.png'})`,
        boxShadow: `0px 0px 15px ${color}`
      }}
    >
      <div 
        className="information"
        style={{
          backgroundColor: color
        }}
      >
        <h1>Current Selection</h1>
        <h2 style={{marginBottom: '4vh'}}>{props.currentPlot.name || 'N/A'}</h2>
        <div className="section summary">
          <h3>{t('What is it')}</h3>
          <p>{props.currentPlot.summary || t('N/A')}</p>
        </div>
        <div className="section cost">
          <h3>{t('Cost')}</h3>
          <p>{props.currentPlot.cost || t('N/A')}</p>
        </div>
        <div className="section state">
          <h3>{t('Maintenance')}</h3>
          <p>{props.currentPlot.state || t('N/A')}</p>
        </div>
        <div className="section impact">
          <h3>{t('Environmental Impact')}</h3>
          <p>{props.currentPlot.environmentalImpact || t('N/A')}</p>
        </div>
        <div className="section verdict">
          <h3>{t('Verdict')}</h3>
          <p>{props.currentPlot.verdict || t('N/A')}</p>
        </div>
      </div>
    </div>
  )  
}

export default BigCurrentlySelected;