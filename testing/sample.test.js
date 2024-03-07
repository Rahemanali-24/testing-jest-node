const request = require("supertest");
const app = require("../app"); 
const mongoose = require("mongoose");
require('../ testSetup'); 
const db = require('../db')


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
    expect(res.body)
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe("raheman");
    expect(res.body[0].description).toBe("testing");
  });
});






describe("sample APi TEST FOR TEST",()=> {
    it("should return all sample", async ()=> {

        const res = await request(app).get("/sample1");


        expect(res.status).toBe(200);
        expect(res.body)
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].fullName).toBe("raheman");
        expect(res.body[0].age).toBe(24);


    })
})


