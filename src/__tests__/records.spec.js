const request = require("supertest");

const { app } = require("../app");

describe("Record Endpoints", () => {
  it("should get properly data", async () => {
    const res = await request(app).post("/api/v1/records").send({
      startDate: "2016-01-01",
      endDate: "2018-10-01",
      minCount: 400,
      maxCount: 500,
    });
    const { code, msg } = res.body;

    expect(res.statusCode).toEqual(200);
    expect(code).toEqual(0);
    expect(msg).toEqual("Success");
  });

  it("should return 404 when the endpoint is wrong", async () => {
    const res = await request(app).post("/api/v1/wrong-endpoint").send({
      startDate: "2016-01-01",
      endDate: "2018-10-01",
      minCount: 400,
      maxCount: 500,
    });
    expect(res.statusCode).toEqual(404);
    expect(res.text).toEqual("not found");
  });

  it("should throw an error when you don't pass required key", async () => {
    const res = await request(app).post("/api/v1/records").send({
      endDate: "2018-10-01",
      minCount: 400,
    });
    const { code, msg } = JSON.parse(res.text);

    expect(res.statusCode).toEqual(400);
    expect(code).toEqual(1);
    expect(msg).toEqual("Validation Failed");
  });
});
