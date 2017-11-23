export default class Event {
    payload: ?any;
    type: string;

    constructor(type: string, payload: {} = null):{type:string,payload?:{}} {
        this.type = type;
        this.payload = payload;

        if (payload && payload.payload){
            return {
                type: this.type,
                ...payload
            }
        }

        return {
            type: this.type,
            payload: this.payload
        }
    }
}
