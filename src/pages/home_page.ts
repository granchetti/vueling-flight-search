import { Locator, Page, expect } from "@playwright/test";
import {
  getDiffMonths,
  transformDateToCalendarIdSuffix,
} from "../utils/format_date";
import { SearchFlightPage } from "./serach_flight_page";

export class HomePage {
  private page: Page;
  private originInput: Locator;
  private destinationInput: Locator;
  private switchToOneWayModeButton: Locator;
  private nextButton: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.originInput = this.page.locator("#originInput");
    this.destinationInput = this.page.locator("#destinationInput");
    this.switchToOneWayModeButton = this.page.locator(
      'button.vy-switch_button[aria-pressed="true"]'
    );
    this.nextButton = this.page.locator("#nextButtonCalendar");
    this.searchButton = this.page.locator("#btnSubmitHomeSearcher");
  }

  async goto() {
    await this.page.goto("https://www.vueling.com/en", { waitUntil: "load" });
    await this.isDisplayed();
    return this;
  }

  async isDisplayed() {
    await expect(this.originInput).toBeVisible({ timeout: 15000 });
  }

  async fillOrigin(origin: string) {
    await this.page.waitForTimeout(2000);
    await this.originInput.clear();
    await this.originInput.type(origin, { delay: 100 });
    const button = this.page.locator("button.vy-list-dropdown_item_button", {
      hasText: `${origin},`,
    });
    await button.click();
  }

  async fillDestination(destination: string) {
    await this.destinationInput.clear();
    await this.destinationInput.type(destination, { delay: 100 });
    const button = this.page.locator("button.vy-list-dropdown_item_button", {
      hasText: `${destination},`,
    });
    await button.click();
  }

  async switchToOneWayMode() {
    await expect(this.switchToOneWayModeButton).toBeVisible();
    await this.switchToOneWayModeButton.click();
  }

  async clickNextButtonUntilMonth(outboundDate: string): Promise<void> {
    const diffMonths = getDiffMonths(outboundDate);
    for (let i = 0; i < diffMonths; i++) {
      await this.nextButton.click();
    }
  }

  async selectOutboundDate(outboundDate: string) {
    const date = transformDateToCalendarIdSuffix(outboundDate);
    await this.page.locator(`#calendarDaysTable${date}`).click();
  }

  async clickSearchButton() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      await this.searchButton.click(),
    ]);
    await newPage.waitForLoadState();
    return new SearchFlightPage(newPage);
  }

  async searchFlight(
    origin: string,
    destination: string,
    outboundDate: string
  ) {
    await this.fillOrigin(origin);
    await this.fillDestination(destination);
    await this.switchToOneWayMode();
    await this.clickNextButtonUntilMonth(outboundDate);
    await this.selectOutboundDate(outboundDate);
    return this.clickSearchButton();
  }
}
