import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const options = {
    fallbackLng: 'ru',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
        formatSeparator: ','
    },

    react: {
        wait: true
    }
};


options.resources = {

    en: {
        translations: {
            "btnAuthorization": "Log in",
            "id": 1234,
            "city": "Minsk",
            "admissionDate": "Admission to courses",
            "headerTrainingDate": "Training dates",
            "numbers": "Numbers:",
        }
    },
    ru: {
        translations: {
            "btnAuthorization": "Войти",
            "id": 1234,
            "city": "Минск",
            "admissionDate": "Набор на курсы",
            "headerTrainingDate": "Даты обучения",
            "numbers": "Телефоны:",
        }
    }
};


export default () => {
    i18n
        .use(LanguageDetector)
        .init(options);
    return i18n;
};
