const request = require("supertest");
const mongoose = require('mongoose');
const app = require("../../app");

describe("Testing trips API", () => {

    beforeAll(async () =>{
        await mongoose.connect('mongodb://127.0.0.1/node-api');
    });

    afterAll(async()=>{
        await mongoose.disconnect();
    });

  describe("GET /api/trips", () => {
    let response;

    beforeEach(async () => {
      response = await request(app).get("/api/trips").send();
    });

    it("Route is working", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("Request return a trips array", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });

  });
});
