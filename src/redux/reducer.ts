import {actionsType} from "./store";

//constants
const TEST = 'TEST'
const CHANGE_TYPED_VALUE = 'CHANGE-TYPED-VALUE'
const REVERSE = 'REVERSE'
const END_TYPE_CYCLE = 'END_TYPE_CYCLE'

export type baseType = {
    mainSpans: string[],
    typed: string,
    reverse: boolean,
    count: number,
}

//actions types
export type testActionType = ReturnType<typeof testAC>
export type changeTypedValueActionType = ReturnType<typeof changeTypedValue>
export type changeReverseActionType = ReturnType<typeof changeReverse>
export type endTypeCycleActionType = ReturnType<typeof endTypeCycle>

//action creators
export const endTypeCycle = (count: number) => {
    return {
        type: END_TYPE_CYCLE,
        payload: {
            typed: '',
            reverse: false,
            count,
        }
    } as const
}
export const changeReverse = (reverse: boolean) => {
    return {
        type: REVERSE,
        payload: {
            reverse,
        }
    } as const
}
export const testAC = () => {
    return {
        type: TEST,
        payload: {}
    } as const
}
export const changeTypedValue = (typed: string) => {
    return {
        type: CHANGE_TYPED_VALUE,
        payload: {
            typed,
        }
    } as const
}

const initialState: baseType = {
    mainSpans: ['Frontend', 'React', 'Redux', 'TypeScript', 'JavaScript'],
    typed: '',
    reverse: false,
    count: 0,
}

export const reducer = (state: baseType = initialState, action: actionsType) => {
    switch (action.type) {
        case END_TYPE_CYCLE:
        case REVERSE:
        case CHANGE_TYPED_VALUE:
            return {
                ...state,
                ...action.payload,
            }
        case TEST:
        default:
            return state
    }
}