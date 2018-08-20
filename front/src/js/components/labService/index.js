import redirectAwareFetch from "../userService/redirectAwareFetch";


class LabService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getLabsListFromServer = () =>{

        return redirectAwareFetch(`/api/lab`, this.getOptions('GET'))
            .then(result =>{

                return result.data;
            })

    }
}

const labService = new LabService();

export default labService;