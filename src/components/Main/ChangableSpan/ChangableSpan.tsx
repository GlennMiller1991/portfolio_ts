import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { stateType } from "../../../redux/store";
import {baseType, changeReverse, changeTypedValue, endTypeCycle} from "../../../redux/reducer";

export const ChangableSpan = React.memo(() => {
    const state = useSelector<stateType, baseType>(state => state.state)
    const dispatch = useDispatch()

    useEffect(() => {
        const currentCaption = state.mainSpans[state.count]
        const typedCaption = state.typed
        if (!state.reverse) {
            setTimeout(() => {
                if (currentCaption.length > typedCaption.length) {
                    dispatch(changeTypedValue((typedCaption + currentCaption[typedCaption.length])))
                } else {
                    setTimeout(() => {
                        dispatch(changeReverse(true))
                    }, 2000)
                }
            }, Math.random() * (400 - 50) + 50)
        } else {
            setTimeout(() => {
                if (typedCaption) {
                    dispatch(changeTypedValue((typedCaption.slice(0, typedCaption.length - 1))))
                } else {
                    dispatch(endTypeCycle((state.count + 1) % state.mainSpans.length))
                }
            }, 300)
        }
    }, [state.typed, state.reverse, state.count, dispatch, state.mainSpans])
    return (
        <span>
            {
                state.typed
            }
        </span>
    )
})