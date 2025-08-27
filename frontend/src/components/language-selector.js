import React from "react";

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

const changeLanguage = () => {

}

const LanguageSelector = () => {
  return <div>
    {
        languages.map((lng)=>{
            return <button key={lng.code} onClick={()=>changeLanguage()}>{lng.lang}</button>
        })
    }
  </div>;
};

export default LanguageSelector;
