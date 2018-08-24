import redirectAwareFetch from "../userService/redirectAwareFetch";


class LabService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        };
    };

    getLabsListFromServer = () =>{
        console.log(8);
        return redirectAwareFetch(`/api/lab/get`, this.getOptions('GET'))
            .then(result =>{
                return result.data;
            })
    }
}

const labService = new LabService();

export default labService;