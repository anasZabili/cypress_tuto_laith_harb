/// <reference types="cypress" />

describe("reward test", () => {
  it("should visit reward page", () => {
    cy.visit("/rewards");
  });
});
