/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useService<T>(fn: (...args: any[]) => Promise<T>, cb: (param: T) => void, ...params: any[]) {
  useEffect(() => {
    fn(...params).then(res => {
      cb(res);
    });
  }, []);
}
