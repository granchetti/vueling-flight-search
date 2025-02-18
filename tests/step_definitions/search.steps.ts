import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../../src/pages/home_page";
import { SearchFlightPage } from "../../src/pages/serach_flight_page";

let homePage: HomePage;
let searchFlightPage: SearchFlightPage;

Given("I am on the Vueling homepage", async function () {
  homePage = new HomePage(this.page);
  await homePage.goto();
});

When(
  "I search for a one-way flight from {string} to {string} on {string} for one passenger",
  async function (origin: string, destination: string, date: string) {
    searchFlightPage = await homePage.searchFlight(origin, destination, date);
  }
);

Then("I should see a list of available flights", async function () {
  await searchFlightPage.areFligtsDisplayed();
});
