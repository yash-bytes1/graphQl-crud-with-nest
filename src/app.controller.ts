import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly mathService:MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    return this.mathService.accumulate(data);
  }
}
