import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ICountClosedStrokesResponse } from './interfaces/response';
import { ICountClosedStrokesRequest } from './interfaces/request';
import { CountClosedStrokesValidationPipe } from './validation/AllowedCharactersPipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  countClosedStrokes(
    @Body(CountClosedStrokesValidationPipe) body: ICountClosedStrokesRequest,
  ): ICountClosedStrokesResponse {
    const count = this.appService.countClosedStrokes(body.text);

    return { count };
  }
}
