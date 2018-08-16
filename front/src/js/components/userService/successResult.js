import Result from './result';
import {FetchResultTypeEnum} from "./fetchResultTypeEnum";


class SuccessResult extends Result {
    constructor(result) {
        super(FetchResultTypeEnum.SUCCESS);
        this.data = result;
    }
}

export default SuccessResult;