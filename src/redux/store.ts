import {combineReducers, createStore} from "redux";
import {
    changeReverseActionType,
    changeTypedValueActionType,
    endTypeCycleActionType,
    reducer,
    testActionType
} from "./reducer";

const rootReducer = combineReducers({
    state: reducer,
})

export const store = createStore(rootReducer)
export type stateType = ReturnType<typeof store.getState>
export type actionsType = testActionType
    | changeTypedValueActionType
    | changeReverseActionType
    | endTypeCycleActionType

export type dispatchType = typeof store.dispatch