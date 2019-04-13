const expect = require("chai").expect;
const request = require("supertest");
describe("express server", function() {
  let server;
  beforeEach(() => {
    server = require("./");
  });

  afterEach(() => {
    server.close();
  });

  it(`path "/" should return 404`, done => {
    request(server)
      .get("/")
      .expect(404, done);
  });

  it(`path "/hello/world" returns 200 with body: { message: "Hello world"}`, done => {
    request(server)
      .get("/hello/world")
      .expect(200, (error, response) => {
        if (error) {
          return done(error);
        } else {
          expect(JSON.stringify(response.body)).to.equal(JSON.stringify({ message: "Hello world" }));
          done();
        }
      });
  });
});
