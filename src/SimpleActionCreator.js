//@flow
import ActionEvent from "./ActionEvent";
import {camelCase,upperFirst} from 'lodash';

type Types = {[string]:string};
type Payload = string | {} | number | [] | null;

class SimpleActionCreator {
    baseTypes: string[];
    domain: string;

    constructor(types: string[], domain: string = 'ms') {
        this.baseTypes = types;
        this.domain = domain;

        (this:any)._constructType = this._constructType.bind(this);
        (this:any)._constructMethods = this._constructMethods.bind(this);

        this._constructMethods();
    }

    _constructMethods(){
        this.baseTypes.forEach((type)=>{
            const methodName =`get${upperFirst(camelCase(type))}`;
            (this:any)[methodName] = (payload:Payload=null)=>new ActionEvent(this._constructType(type), payload);
        });

    }
    _constructType(type): string {
        return `${this.domain ? this.domain : ''}_${type}`.toUpperCase();
    }

    get types():Types{
        let types:Types = {};
        this.baseTypes.forEach((type)=>{
            types[type.toUpperCase()] = this._constructType(type);
        });
        return types;
    }
}

export default SimpleActionCreator;