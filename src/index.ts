import polyfill from './polyfill'
import axios from 'axios'
import type { AxiosAdapter } from 'axios';
import axiosAdapterUniapp from 'axios-adapter-uniapp';

polyfill()
axios.defaults.adapter = axiosAdapterUniapp as unknown as AxiosAdapter

export default axios