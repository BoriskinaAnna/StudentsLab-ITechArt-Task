import redirectAwareFetch from '../userService/redirectAwareFetch';


class LabService{

    getOptions = () =>{
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    };

    getLabsList = () =>{
        return redirectAwareFetch('/api/labs', this.getOptions())
            .then(result =>{
                return result.data;
            })
            .catch(error => console.log(error));
    }
}

const labService = new LabService();

export default labService;