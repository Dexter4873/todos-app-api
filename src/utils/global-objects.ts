import { API_DESCRIPTION, API_NAME, API_VERSION } from './constants';

export interface API_INFO {
  name: string;
  description: string;
  version: number;
}

export const API_INFO: API_INFO = {
  name: API_NAME,
  description: API_DESCRIPTION,
  version: API_VERSION,
};
