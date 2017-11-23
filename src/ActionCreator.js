//@flow
import ActionEvent from "./ActionEvent";

const GOTO = 'GOTO';
const REQUEST = 'REQUEST';
const ATTEMPT = 'ATTEMPT';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CLIENT_FAILURE = 'CLIENT_FAILURE';
const SERVER_FAILURE = 'SERVER_FAILURE';
const CANCEL = 'CANCEL';

const Types = {
    GOTO,
    REQUEST,
    ATTEMPT,
    SUCCESS,
    FAILURE,
    CLIENT_FAILURE,
    SERVER_FAILURE,
    CANCEL,
};


type Payload = string | {} | number | [] | null

class ActionCreator {
    type: string;
    domain: string;

    constructor(type: string, domain: string = 'ms') {
        this.type = type;
        this.domain = domain;

        (this: any)._constructType = this._constructType.bind(this);
    }

    _constructType(suffix: string | null): string {
        return `${this.domain ? this.domain : ''}_${this.type}${suffix ? '_' : ''}${suffix || ''}`.toUpperCase();
    }

    get (payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(GOTO), payload);
    }

    getRequest(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(REQUEST), payload);
    }

    getAttempt(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(ATTEMPT), payload);
    }

    getSuccess(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(SUCCESS), payload);
    }

    getFailure(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(FAILURE), payload);
    }

    getClientFailure(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(CLIENT_FAILURE), payload);
    }
    getServerFailure(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(SERVER_FAILURE), payload);
    }

    getCancel(payload:Payload = null): ActionEvent {
        return new ActionEvent(this._constructType(CANCEL), payload);
    }

    get types():typeof Types{
        const types:any = {};
        Object.keys(Types).forEach((type)=>types[type]=this._constructType(type));
        return types;
    }

    getMethodByType(type):()=>ActionEvent{
        switch (type){
            case Types.GOTO:
                return this.get;
            case Types.REQUEST:
                return this.getRequest;
            case Types.ATTEMPT:
                return this.getAttempt;
            case Types.SUCCESS:
                return this.getSuccess;
            case Types.CANCEL:
                return this.getCancel;
            case Types.FAILURE:
                return this.getFailure;
            case Types.CLIENT_FAILURE:
                return this.getClientFailure;
            case Types.SERVER_FAILURE:
                return this.getServerFailure;
        }
    }
}

export default ActionCreator;