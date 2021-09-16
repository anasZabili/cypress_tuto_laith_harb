/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating element with get", () => {
    // Get all element by tag
    cy.get("button");

    // Get all element by class name
    cy.get(".btn-with-class");

    // get all element with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    cy.get("[class='Elements-btn btn-with-class']");

    // Get all element by id
    cy.get("#btn-with-id");
    // or
    cy.get("[id='btn-with-id']");

    // Get all elements by specific attribute
    cy.get("[type='submit']");

    // Combine selector (get all element by tagname and class)
    cy.get("button.Elements-btn");

    // get all element by classname and id
    cy.get("button.Elements-btn#btn-with-id");

    // get element by class tag and type attribute
    cy.get("button.Elements-btn[type='submit']");

    // get element by data test id (best practice)
    cy.get("[data-cy='btn-id-1']");
  });
});
