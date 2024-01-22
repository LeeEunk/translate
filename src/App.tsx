import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('about_text')}</h1>
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation('main');

  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n],
  );

  return (
    <div className="App">
      <button onClick={() => toggleLocales('en-US')} title="영어로 바꾸기">
        en
      </button>
      <button onClick={() => toggleLocales('ko-KR')} title="한글로 바꾸기">
        ko
      </button>
      {t('test')}

      <hr />
      <About />
    </div>
  );
}

export default App;
