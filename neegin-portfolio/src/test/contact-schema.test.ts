import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact-schema";

const valid = { name: "Ahmad", email: "ahmad@example.com", message: "I need a new logo design." };

describe("contact form validation", () => {
  it("accepts a complete message without phone", () => {
    expect(validateContact(valid).ok).toBe(true);
  });
  it("requires a name", () => {
    expect(validateContact({ ...valid, name: "" }).errors.name).toBe("nameRequired");
  });
  it("rejects an invalid email", () => {
    expect(validateContact({ ...valid, email: "not-an-email" }).errors.email).toBe("emailInvalid");
  });
  it("requires a message of at least 10 characters", () => {
    expect(validateContact({ ...valid, message: "Hi there" }).errors.message).toBe("messageShort");
  });
  it("rejects a phone with letters", () => {
    expect(validateContact({ ...valid, phone: "call me" }).errors.phone).toBe("phoneInvalid");
  });
  it("accepts an Afghan phone number", () => {
    expect(validateContact({ ...valid, phone: "+93 744 516 043" }).ok).toBe(true);
  });
});
