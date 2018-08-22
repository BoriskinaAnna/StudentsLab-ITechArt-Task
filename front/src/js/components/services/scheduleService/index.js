import redirectAwareFetch from "../userService/redirectAwareFetch";


class ScheduleService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getScheduleFromServer = (id) =>{

        return redirectAwareFetch(`/api/schedule/get/${id}`, this.getOptions('GET'))
            .then(result =>{
                return result.data;
            })

    }
}

const scheduleService = new ScheduleService();

export default scheduleService;