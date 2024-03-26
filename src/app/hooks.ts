import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// copy past  когда создаем новый проект 
export const useActionCreators = (actions: ActionCreatorsMapObject) => {
    const dispatch = useAppDispatch()
    // принимается второй аргумент диспатч чтобы байндить экшн автоматически 
    return useMemo(() => bindActionCreators(actions, dispatch), []);
}