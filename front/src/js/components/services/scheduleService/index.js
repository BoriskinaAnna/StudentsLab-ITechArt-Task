import redirectAwareFetch from '../userService/redirectAwareFetch';


class ScheduleService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    };

    getSchedule = (id) =>{
        return redirectAwareFetch(`/api/labs/${id}/schedule`, this.getOptions('GET'))
            .then(result =>{
                return result.data;
            })
    }
}

const scheduleService = new ScheduleService();

export default scheduleService;