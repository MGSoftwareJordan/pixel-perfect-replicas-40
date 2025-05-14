
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Handle various edge cases for strings and objects
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined
}

export function getValidString(str: any, fallback: string = ''): string {
  if (typeof str === 'string') return str
  return fallback
}

// Safe object accessor
export function safeGet(obj: any, path: string, defaultValue: any = undefined) {
  if (!obj || typeof obj !== 'object') return defaultValue
  
  const keys = path.split('.')
  let result = obj
  
  for (const key of keys) {
    if (isNullOrUndefined(result) || typeof result !== 'object') {
      return defaultValue
    }
    result = result[key]
  }
  
  return isNullOrUndefined(result) ? defaultValue : result
}
