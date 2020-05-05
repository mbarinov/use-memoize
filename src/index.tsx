import { useMemo } from 'react'
import fastMemoized from 'fast-memoize'

type fArgReturn = (...args: any[]) => any;

export const useMemoize = (func: fArgReturn, deps?: string[]) => {
  return useMemo(() => {
    return fastMemoized(func)
  }, deps || [])
}
