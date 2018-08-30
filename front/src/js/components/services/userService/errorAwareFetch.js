import ErrorResult from './errorResult';
import SuccessResult from './successResult';

function errorAwareFetch(url, options) {

    const MAX_CORRECT_HTTP_CODE = 299;
    const MIN_CORRECT_HTTP_CODE = 200;

    return fetch(url, options)
        .then((response) =>
            {
                if (response.status > MAX_CORRECT_HTTP_CODE || response.status < MIN_CORRECT_HTTP_CODE) {
                    return Promise.reject(response)
                }

                return response.text();
            }
        )
        .then((text) => text.length ? JSON.parse(text) : {})
        .then(data =>{
            return new SuccessResult(data);
        })
        .catch((error) => {
            console.log(error);
            return new ErrorResult(error.status);
        });
}

export default errorAwareFetch;