/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display modal when add button is clicked", () => {
    cy.contains("button", "Add").click();
    const modal = cy.contains("Add a new habit").should("be.visible");
  });

  it("should display habit card when new habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("hello from the testing teams");
    const saveButton = cy.contains("Save Changes");
    saveButton.click();
    const newHabitCard = cy.contains("hello from the testing teams");
    newHabitCard
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });
});
