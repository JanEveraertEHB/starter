const Helpers = require("./../utils/helpers.js")
const supertest = require('supertest')
const http = require('http');

const app = require('../server.js')
const request = supertest(app)


describe('checking the helper', () => {
  test('checks if the helper does not return null', () => {
    expect(Helpers.generateUUID()).toBeDefined()
  })
  test('checks if the returned value is a UUID (v1)', () => {
    expect(Helpers.generateUUID()).toMatch(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/)
  })
})


describe("GET /test", () => {
    it("responds with anything", async (done) => {
      try {
        await request
          .get("/test")
          .expect(200, done())
      }
      catch(e) {
      }
    });
    it('gets the test endpoint', async done => {
      const response = await request.get('/')

      expect(response.status).toBe(200)
      expect(response.body.res).toBeInstanceOf(Array);
      done()
    })
});


/*

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);

  expect('string').toMatch(/str/);

  expect(list).toContain('item');


  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  beforeEach(() => { // also beforeAll
    initialiseDB();
  });

  afterEach(() => { // also afterAll
    clearDB();
  });
*/
