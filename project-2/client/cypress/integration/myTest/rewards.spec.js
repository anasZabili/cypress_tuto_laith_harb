/// <reference types="cypress" />

describe("Reward dashboard", () => {
  beforeEach(() => {
    cy.visit("rewards");
  });

  it("should display a list of rewards", () => {
    cy.get("ul").should(
      "contain",
      "500 points for drinking 8 cups of water for 7 straight days"
    );
  });

  it("should display a list of rewards with a mock", () => {
    cy.intercept("GET", "", {
      // here we specify that the data that will be return by the mocked
      // request can be found in fixture folder, in reward.json file
      fixture: "reward.json",
    });
    cy.contains(
      "ul",
      "500 points for drinking 8 cups of water for 7 straight days"
    ).should("be.visible");
  });
});
