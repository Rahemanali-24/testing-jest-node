const request = require("supertest");
const app = require("../app"); // Update the import path if necessary
const mongoose = require("mongoose");
require('../ testSetup'); 

beforeAll(async () => {
  await mongoose.connect(global.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Sample API", () => {
  it("should return all samples", async () => {
    const res = await request(app).get("/sample");

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe("raheman");
    expect(res.body[0].description).toBe("testing using jest in node");
  });
});
