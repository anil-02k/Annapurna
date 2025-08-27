import React from "react";
import { useTranslation } from 'react-i18next';
import './LanguageSelector.scss';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'kn', name: 'Kannada' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'or', name: 'Odia' },
  { code: 'as', name: 'Assamese' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="language-selector-floating">
      <button className="language-selector-btn" onClick={() => setOpen(!open)}>
        🌐
      </button>
      {open && (
        <div className="language-selector-dropdown btn-container">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={lng.code === i18n.language ? 'active selected' : ''}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
