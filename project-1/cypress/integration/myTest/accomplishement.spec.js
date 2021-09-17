/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should showcase error if the accomplishment is missing", () => {
    // Given When
    cy.get("input[placeholder='Title']").type("Hello world");
    cy.getByTestId("accomplishment-input").type("hello world");
    cy.contains("Submit Accomplishment").click();
    // Then
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    // Given When
    cy.get("input[placeholder='Title']").type("Hello world");
    cy.getByTestId("accomplishment-input").type("hello world");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.contains("Submit Accomplishment").click();
    // Then
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("should should return back to accomplishment dashboard when go back button is clicked with empty input", () => {
    // Given When
    cy.get("input[placeholder='Title']").type("Hello world");
    cy.getByTestId("accomplishment-input").type("hello world");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("Go Back").click();
    // Then
    cy.contains("h2", "Accomplishment").should("be.visible");
    cy.get("input[placeholder='Title']").should("be.empty");
    cy.getByTestId("accomplishment-input").should("be.empty");
    cy.getByTestId("accomplishment-checkbox").should("not.be.checked");
  });
});
