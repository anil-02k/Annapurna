import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBox } from '@mapbox/search-js-react';
import { Link } from "react-router-dom";

import './style.scss';
import search from 'assets/search.svg';

const NavBar = () => {
  const { t } = useTranslation();
  
  const [farmName, setFarmName] = useState(t("Sonu's Farm"));

  const onNameChange = (e) => {
    setFarmName(e.target.value);
  }

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          {t('Annapurna')}
        </Link>
      </div>
      <input className="name-input" value={farmName} onChange={onNameChange}/>
      <div className="search-bar">
  <img src={search} alt={t('search icon')}/>
        <SearchBox
          accessToken={"pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw"}
          options={{
            language: 'en'
          }}
          onRetrieve={(result) => {
            if (result && result.features && result.features.length > 0) {
              const [lng, lat] = result.features[0].geometry.coordinates;
              if (window.flyToLocation) {
                window.flyToLocation(lng, lat);
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default NavBar;