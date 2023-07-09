import type { AppInfo } from '@/types/app'
export const API_URL = ''
if (!process.env.APP_ID) {
  throw new Error("Missing env var from OpenAI");
}
export const APP_ID = process.env.APP_ID
if (!process.env.API_KEY) {
  throw new Error("Missing env var from OpenAI");
}
export const API_KEY = process.env.API_KEY
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
