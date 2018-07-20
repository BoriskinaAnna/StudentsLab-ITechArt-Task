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
            "city": "City",
            "admissionDate": "Admission to courses",
            "trainingDate": "Training dates",
            "numbers": "Numbers",
            "e-mail": "E-mail",
            "password": "Password",
            "courseName": "Сourse name",
            "start": "Start",
            "end": "End",
            "courseType": "Course type",
            "add": "Add",
            "time": "Time",
            "lecturer": "Lecturer",
            "place": "Place",
            "duration": "Duration"
        }
    },
    ru: {
        translations: {
            "btnAuthorization": "Войти",
            "city": "Город",
            "admissionDate": "Набор на курсы",
            "trainingDate": "Даты обучения",
            "numbers": "Телефоны:",
            "e-mail": "Электронная почта",
            "password": "Пароль",
            "courseName": "Название курсов",
            "start": "Начало",
            "end": "Конец",
            "courseType": "Тип курсов",
            "add": "Добавить",
            "time": "Время",
            "lecturer": "Лектор",
            "place": "Место",
            "duration": "Продолжительность"
        }
    }
};

export default () => {
    i18n
        .use(LanguageDetector)
        .init(options);
    return i18n;
};