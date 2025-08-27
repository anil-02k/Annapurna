import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './style.scss';

import logo from 'assets/logo.svg';
import map from 'assets/map.svg';
import saved from 'assets/saved.svg';
import statistics from 'assets/statistics.svg';

const SideBar = (props) => {
  const { t } = useTranslation();
  return (
    <nav className="side-bar">
      <Link className="logo" to="/">
        <img src={logo} alt={t('logo icon')}/>
      </Link>
      <div className="icons">
        <div className="icon" onClick={() => {props.setSideBarPage('map')}}>
          <img src={map} alt={t('map icon')}/>
          <p>{t('Map')}</p>
        </div>
        <div className="icon" onClick={() => {props.setSideBarPage('create')}}>
          <img src={saved} alt={t('saved icon')}/>
          <p>{t('Create')}</p>
        </div>
        <div className="icon" onClick={props.setModal}>
          <img src={statistics} alt={t('statistics icon')}/>
          <p>{t('Harvest Statistics')}</p>
        </div>
      </div>
    </nav>
  )
}

export default SideBar;