import axios from 'axios'
import type { AxiosAdapter } from 'axios';
import axiosAdapterUniapp from 'axios-adapter-uniapp';

axios.defaults.adapter = axiosAdapterUniapp as unknown as AxiosAdapter 

export default axios