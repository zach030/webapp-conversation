import type { AppInfo } from '@/types/app'
export const API_URL = ''
if (!process.env.NEXT_PUBLIC_APP_ID) {
  throw new Error("Missing env var from OpenAI");
}
export const APP_ID = process.env.NEXT_PUBLIC_APP_ID
if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
