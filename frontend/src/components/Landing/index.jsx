import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './style.scss';

const Landing = () => {
  let history = useHistory();
  const { t } = useTranslation();

  const onSearch = (value) => {
    history.push('/home');
  };
  
  return (
    <div className="Landing">
      <div className="navbar">
        <ul>
          <li className="about">{t('About Us')}</li>
          <li>{t('Demo')}</li>
          <li>{t('Resources')}</li>
        </ul>
      </div>
      <h1>
        {t('Reimagine')}
        <br />
        {t('Farm Planning')}
      </h1>
      <div className="signup">
        <div>
          <h2>{t('Plan your next farm years ahead.')}</h2>
          <p>{t('Get valuable insights on our data analytics.')}</p>
        </div>
        <div className="space">
          <h3>{t('Location')}</h3>
          <button className="go-btn large" onClick={() => onSearch()}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
