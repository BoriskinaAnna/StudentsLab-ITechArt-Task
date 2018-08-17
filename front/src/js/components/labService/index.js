import redirectAwareFetch from "../userService/redirectAwareFetch";


let LabsList = [];

class LabService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getLabsList = () =>{
        this.getLabsListFromServer();
        return LabsList;
    };

    initialaizeLabsList = (data) =>{
       data.forEach((item, i)=>{
           LabsList.push({
               id: item.id,
               type: item.type,
               city: item.city,
               name: item.name,
               admissionStart: item.admissionStart,
               admissionEnd: item.admissionEnd,
               trainingStart: item.trainingStart,
               trainingEnd: item.trainingEnd,
               isDraft: item.isDraft
           })
       });
    };

    getLabsListFromServer = () =>{
        redirectAwareFetch(`/api/lab`, this.getOptions('GET'))
            .then(result =>{
                console.log(result.data);
                return result.data;
            });

    }
}

const labService = new LabService();

export default labService;