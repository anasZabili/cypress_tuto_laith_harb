/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should display inappropriate content error when text or accomplishment include giraffe", () => {
    cy.get("[placeholder='Title']").type("Hello title");
    cy.get("[placeholder='My accomplishment...']").type(
      "Hello content giraffe"
    );
    cy.get("[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });

  it("should display inappropriate content error when text or accomplishment include giraffe with mock", () => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your bad content is not appropriate",
        });
      });
    });
    cy.get("[placeholder='Title']").type("Hello title");
    cy.get("[placeholder='My accomplishment...']").type(
      "Hello content giraffe"
    );
    cy.get("[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your bad content is not appropriate").should("be.visible");
  });
});
