import { describe, test, expect } from "@jest/globals";
import { isEmpty, isEmail } from "../../src/utils/validation.util";

describe("Validate empty spaces, null, undefined values", () => {
    test("Must return true if value is undefined", () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test("Must return true if value is null", () => {
        expect(isEmpty(null)).toBe(true);
    });

    test("Must return true if value is an empty space", () => {
        expect(isEmpty("")).toBe(true);
        expect(isEmpty(" ")).toBe(true);
        expect(isEmpty("         ")).toBe(true);
    });
});

describe("Validate email", () => {

    // expect("Must return false if email is invalid");
    test("Must return false if email is invalid", () => {
        expect(isEmail("example@test.com")).toBe(true);
        expect(isEmail("user.name+tag+sorting@example.com")).toBe(true);
        expect(isEmail("user@sub.domain.com")).toBe(true);
        expect(isEmail("user@domain")).toBe(false);
        expect(isEmail("@domain.com")).toBe(false);
        expect(isEmail("user@.com")).toBe(false);
        expect(isEmail("user@domain..com")).toBe(false);
        // expect(isEmail("user@domain.c")).toBe(false);
        expect(isEmail("user@domain.co.m")).toBe(true);
        expect(isEmail(".user@domain.com")).toBe(false);
        expect(isEmail("user@domain.com.")).toBe(false);
        expect(isEmail("user@domain..com")).toBe(false);
        expect(isEmail("user@-domain.com")).toBe(false);
        expect(isEmail("user@domain-.com")).toBe(false);
        expect(isEmail("user@domain.c_m")).toBe(false);
        expect(isEmail("user@domain.c0m")).toBe(true);
        expect(isEmail("user@domain..com.com")).toBe(false);
        expect(isEmail("user@domain.-com.com")).toBe(false);
        expect(isEmail("user@domain.com-")).toBe(false);
        expect(isEmail("user@domain.com-.com")).toBe(false);
        expect(isEmail("user@domain.com..com")).toBe(false);
        
    })
});