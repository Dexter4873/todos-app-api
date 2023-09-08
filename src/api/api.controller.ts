import { Controller, Get } from '@nestjs/common';
import { API_INFO } from '../utils/global-objects';
import { API_VERSION_PREFIX } from '../utils/constants';

@Controller(`api/${API_VERSION_PREFIX}`)
export class ApiController {
  @Get()
  getApiInfo(): API_INFO {
    return API_INFO;
  }
}
