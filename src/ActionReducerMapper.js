import {forEach} from 'lodash';
import ActionCreator from "./ActionCreator";

const actionTypeRegex = new RegExp(/(\w+)_(ATTEMPT|SUCCESS|REQUEST|FAILURE|CANCEL)/);

export default function(ACTION_HANDLERS:{[string]:()=>any}, mappings:Map){
    const actionHandlers = {};
    forEach(ACTION_HANDLERS, (reducerMethod, key)=>{
        const result = actionTypeRegex.exec(key);
        if (result){
            const actionCreator:ActionCreator = mappings.get(result[1]);
            if (actionCreator){
                const type = actionCreator.types[result[2]];
                if (type){
                    actionHandlers[type] = reducerMethod;
                }
            }
        }
    });
    return actionHandlers;
};