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
            "duration": "Duration",
            "logIn": "Log in",
            "rememberMe": "Remember me",
            "forgotPassword": "Forgot password ?",
            "comments": "Comments",
            "registrationFirstName": "Enter your first name:",
            "registrationSecondName": "Enter your second name:",
            "registrationEmail": "Enter your email:",
            "registrationPassword": "Enter your password",
            "registrationRepeatPassword": "Enter your password again",
            "register": "Register",
            "inputCanNotBeEmpty": "This field can't be empty",
            "incorrectRepeatPassword": "Passwords do not match"
        }
    },
    ru: {
        translations: {
            "btnAuthorization": "Войти",
            "city": "Город",
            "admissionDate": "Набор на курсы",
            "trainingDate": "Даты обучения",
            "numbers": "Телефоны:",
            "e-mail": "Адрес электронной почты",
            "password": "Пароль",
            "courseName": "Название курсов",
            "start": "Начало",
            "end": "Конец",
            "courseType": "Тип курсов",
            "add": "Добавить",
            "time": "Время",
            "lecturer": "Лектор",
            "place": "Место",
            "duration": "Продолжительность",
            "logIn": "Вход",
            "rememberMe": "Запомнить меня",
            "forgotPassword": "Забыли пароль ?",
            "comments": "Комментарии",
            "registrationFirstName": "Введите имя:",
            "registrationSecondName": "Введите фамилию:",
            "registrationEmail": "Введите адрес электронной почты:",
            "registrationPassword": "Введите пароль:",
            "registrationRepeatPassword": "Повторите пароль:",
            "register": "Зарегистрироваться",
            "inputCanNotBeEmpty": "Это поле не может быть пустым",
            "incorrectRepeatPassword": "Пароли не совпадают"
        }
    }
};

export default () => {
    i18n
        .use(LanguageDetector)
        .init(options);
    return i18n;
};