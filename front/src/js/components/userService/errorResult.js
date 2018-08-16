import Result from './result';
import {FetchResultTypeEnum} from "./fetchResultTypeEnum";
import HttpStatus from 'http-status-codes';


class ErrorResult extends Result {
    constructor(httpStatus) {
        let errorType;
        switch (httpStatus) {

            case HttpStatus.INTERNAL_SERVER_ERROR:
                errorType = FetchResultTypeEnum.INTERNAL_SERVER_ERROR;
                break;

            case HttpStatus.UNAUTHORIZED:
                errorType = FetchResultTypeEnum.USER_FAIL_LOGIN;
                break;

            case HttpStatus.UNPROCESSABLE_ENTITY:
                errorType = FetchResultTypeEnum.USER_FAIL_REGISTRATION;
                break;

            default:
                errorType = FetchResultTypeEnum.INTERNAL_SERVER_ERROR;
        }

        super(errorType);
    }
}

export default ErrorResult;