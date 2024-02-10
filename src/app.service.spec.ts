import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('countClosedStrokes', () => {
    it.each([
      ['@%‰∞&¿?', 11],
      ['El 37% de los humanos está bancarizado', 16],
      ['', 0],
      ['Este da 3', 3],
    ])('should return the count, %s - %s', (text, expectedCount) => {
      expect(appService.countClosedStrokes(text)).toEqual(expectedCount);
    });
  });
});
