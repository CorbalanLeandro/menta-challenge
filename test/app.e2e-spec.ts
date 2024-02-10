import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/ (POST)', () => {
    it.each([
      ['@%‰∞&¿?', 11],
      ['El 37% de los humanos está bancarizado', 16],
      ['', 0],
      ['Este da 3', 3],
    ])('should return the correct count, %s - %s', (text, expectedCount) => {
      return request(app.getHttpServer())
        .post('/')
        .send({ text })
        .expect(201)
        .expect({ count: expectedCount });
    });

    it.each([{ text: '!' }, { text: 2 }, { text: null }, { taxt: 'a' }])(
      'should return a bad request error for: %s',
      (body) => {
        return request(app.getHttpServer()).post('/').send(body).expect(400);
      },
    );
  });
});
