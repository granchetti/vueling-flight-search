import { expect, Locator, Page } from "@playwright/test";

export class SearchFlightPage {
  private page: Page;
  private flightCardV1: Locator;
  private flightCardV2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightCardV1 = this.page.locator('.vy-flight-selector');
    this.flightCardV2 = this.page.locator('#flightCardContent');
  }

  async areFligtsDisplayed() {
    await expect(this.flightCardV1.first().or(this.flightCardV2.first())).toBeVisible({ timeout: 15000 });
  }
}
