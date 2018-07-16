import { I18nextProvider } from 'react-i18next';
import React from 'react';
import {render} from 'react-dom';
import App from './js/components/App';
import i18n from './js/components/i18n';

render (
    <I18nextProvider i18n={ i18n() }><App /></I18nextProvider>,
    document.getElementById('content')
);

