import request from 'supertest';
import { Application } from 'express';
import createServer from '../src/expressjs/expressjs.server';
import { migrateNodes } from '../src/neo4j/neo4j.migrations';
import Neode from "neode";

let server: Application;
let migrations: Promise<Neode.Node<any>>[];

beforeAll(async () => {
  server = createServer();
  migrations = migrateNodes();
})

describe('GET /api/v1/nodes', () => {
  it('should return 200 & valid response', done => {
    Promise.all(migrations)
      .then(() => {
        request(server)
          .get('/api/v1/nodes')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.length).toBe(7);
            done();
          })
      })
      .catch((err) => done(err));
  })
})
