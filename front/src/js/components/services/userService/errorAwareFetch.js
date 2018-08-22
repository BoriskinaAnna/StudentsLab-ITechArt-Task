import ErrorResult from './errorResult';
import SuccessResult from './successResult';

function errorAwareFetch(url, options) {
    return fetch(url, options)
        .then((response) =>
            {
                if (response.status !== 200) {
                    return Promise.reject(response)
                }

                return response.json();
            }
        )
        .then(data =>{
            return new SuccessResult(data);
        })
        .catch((error) => {
            console.log(error);
            return new ErrorResult(error.status);
        });
}

export default errorAwareFetch;