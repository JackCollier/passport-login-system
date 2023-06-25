const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  test("Should respond with 200 status and type text/html", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(({ type }) => expect(type).toBe("text/html"));
  });
});
