import {FetchResultTypeEnum} from './fetchResultTypeEnum';
import errorAwareFetch from './errorAwareFetch';

function redirectAwareFetch(url, option, isCalledFromAuthentication) {
    return errorAwareFetch(url, option)
        .then(result => {
            switch (result.type) {
                case FetchResultTypeEnum.USER_FAIL_LOGIN:
                    if(isCalledFromAuthentication){
                        return result;
                    }
                     else{
                        window.location.pathname = '/authentication';
                        break;
                    }
                case FetchResultTypeEnum.INTERNAL_SERVER_ERROR:
                    window.location.pathname = '/error';
                    break;

                default:
                    return result;
            }
        })
        .catch(error => console.log(error));
}

export default redirectAwareFetch;