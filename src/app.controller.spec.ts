import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceMock } from './mocks/app.service.mock';
import { ICountClosedStrokesRequest } from './interfaces/request';
import { ICountClosedStrokesResponse } from "./interfaces/response";

const mockBody: ICountClosedStrokesRequest = { text: 'mock-text' };

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useClass: AppServiceMock }],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('countClosedStrokes', () => {
    let serviceCountClosedStrokesSpy: jest.SpyInstance;

    beforeEach(() => {
      serviceCountClosedStrokesSpy = jest.spyOn(
        appService,
        'countClosedStrokes',
      );
    });

    it('should return the count from the app service', () => {
      const mockCount = 2;
      const mockResponse: ICountClosedStrokesResponse = { count: mockCount };
      serviceCountClosedStrokesSpy.mockReturnValue(mockCount);

      expect(appController.countClosedStrokes(mockBody)).toEqual(mockResponse);
    });

    it('should throw the error from the app service', () => {
      const mockError = new Error('boom!');
      serviceCountClosedStrokesSpy.mockImplementation(() => {
        throw mockError;
      });

      expect(() => appController.countClosedStrokes(mockBody)).toThrow(
        mockError,
      );
    });
  });
});
