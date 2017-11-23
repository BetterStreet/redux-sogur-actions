
import SimpleActionCreator from "./SimpleActionCreator";

describe('SimpleActionCreator',()=>{
    test('SimpleActionCreator to have types', () => {
        const ac = new SimpleActionCreator(['TEST','PLUT'], 'jest');
        expect(ac.types.TEST).toBeDefined();
        expect(ac.types.TEST).toBe('JEST_TEST');
        expect(ac.types.PLUT).toBe('JEST_PLUT');
    });
    test('SimpleActionCreator to have methods', () => {
        const ac = new SimpleActionCreator(['TEST','PLUT', 'ACTION_EVENT'], 'jest');
        expect(ac.getTest).toBeDefined();
        expect(ac.getActionEvent).toBeDefined();
    });
});
