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
    cy.getByTestId("btn-id-1");
    // cy.get("[data-cy='btn-id-1']");
  });

  it("locating elements with contains", () => {
    // Get element by text
    cy.contains("Unique Text");

    // Get element with a not unique text => select the first element in the dom
    // that contains this text
    cy.contains("Not Unique Text");

    // with selector
    cy.contains("[type='submit']", "Not Unique Text");

    // Combine get and contains
    cy.get("[type='submit']").contains("Not Unique Text");
    cy.contains("form", "Not Unique Text");
  });

  it("locating element with find", () => {
    // find gonna find a child node element (rarely use)
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");
  });
});
