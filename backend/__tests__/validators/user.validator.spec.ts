import { describe, expect, test } from "@jest/globals";
import { createUserValidator, loginValidator, updateUserValidator } from "../../src/validators/user.validator";


describe("Validate login fields", () => {
    test("Must return error if fields are empty", () => {
        expect(loginValidator({ email: "", password: "" }).length).toBe(2);
    });
});

describe("Validate create user fields", () => {
    test("Must return error if fields are empty", () => {
        expect(createUserValidator({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }).length).toBe(4);

        expect(createUserValidator({}).length).toBe(4);
    });

    test("Must return error if email is invalid", () => {
        const data = {
            firstname: "John",
            lastname: "Doe",
            email: "doe.6",
            password: "letmein123"
        };
        expect(createUserValidator(data).length).toBe(1);

        data.email = "245145";
        expect(createUserValidator(data).length).toBe(1);

        data.email = "";
        expect(createUserValidator(data).length).toBe(1);

        data.email = "aso@gmail"
        expect(createUserValidator(data).length).toBe(1);

        data.email = "aso@gmail.com"
        expect(createUserValidator(data).length).toBe(0);
    });
});

describe("Validate user update fields", () => {
    test("Must return error if fields are empty", () => {
        expect(updateUserValidator({}).length).toBe(3);
        expect(updateUserValidator({
            firstname: "",
            lastname: "",
            email: ""
        }).length).toBe(3);
    });
});