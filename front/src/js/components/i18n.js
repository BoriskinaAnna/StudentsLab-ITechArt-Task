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
            "btnAuthorizationLogin": "Log in",
            "btnAuthorizationLogout": "Log out",
            "city": "City",
            "admissionDate": "Admission to courses",
            "trainingDate": "Training dates",
            "numbers": "Numbers",
            "e-mail": "E-mail:",
            "password": "Password:",
            "courseName": "Сourse name",
            "start": "Start",
            "end": "End",
            "courseType": "Course type",
            "add": "Add",
            "time": "Time",
            "lecturer": "Lecturer",
            "place": "Place",
            "duration": "Duration",
            "logIn": "Login",
            "forgotPassword": "Forgot password ?",
            "comments": "Comments",
            "registrationFirstName": "Enter your first name:",
            "registrationSecondName": "Enter your second name:",
            "registrationEmail": "Enter your email:",
            "registrationPassword": "Enter your password",
            "registrationRepeatPassword": "Enter your password again",
            "register": "Register",
            "inputCanNotBeEmpty": "This field can't be empty",
            "incorrectRepeatPassword": "Passwords do not match",
            "userAlreadyExists": "User with this email already exists",
            "incorrectAuthentication": "Invalid login or password",
            "addFeedbackDates": "Add feedback dates",
            "january": "January",
            "february": "February",
            "march": "March",
            "april": "April",
            "may": "May",
            "june":  "June",
            "july": "July",
            "august": "August",
            "september": "September",
            "october": "October",
            "november": "November",
            "december": "December",
            "change": "Change",
            "fillFeedback": "Fill the feedback",
            "save": "Save"
        }
    },
    ru: {
        translations: {
            "btnAuthorizationLogin": "Войти",
            "btnAuthorizationLogout": "Выйти",
            "city": "Город",
            "admissionDate": "Набор на курсы",
            "trainingDate": "Даты обучения",
            "numbers": "Телефоны:",
            "e-mail": "Адрес электронной почты:",
            "password": "Пароль:",
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
            "forgotPassword": "Забыли пароль ?",
            "comments": "Комментарии",
            "registrationFirstName": "Введите имя:",
            "registrationSecondName": "Введите фамилию:",
            "registrationEmail": "Введите адрес электронной почты:",
            "registrationPassword": "Введите пароль:",
            "registrationRepeatPassword": "Повторите пароль:",
            "register": "Зарегистрироваться",
            "inputCanNotBeEmpty": "Это поле не может быть пустым",
            "incorrectRepeatPassword": "Пароли не совпадают",
            "userAlreadyExists": "Пользователь с данным адресом электронной почты уже существует",
            "incorrectAuthentication": "Неверный логин или пароль",
            "addFeedbackDates": "Добавить даты отзывов",
            "january": "Января",
            "february": "Февраля",
            "march": "Марта",
            "april": "Апреля",
            "may": "Мая",
            "june":  "Июня",
            "july": "Июля",
            "august": "Августа",
            "september": "Сентября",
            "october": "Октября",
            "november": "Ноября",
            "december": "Декабря",
            "change": "Изменить",
            "fillFeedback": "Заполнить фидбек",
            "save": "Сохранить"
        }
    }
};

export default () => {
    i18n
        .use(LanguageDetector)
        .init(options);
    return i18n;
};