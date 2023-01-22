import { expect, Locator, Page } from "@playwright/test";
import { URLS, USERS } from "../support/consts";

export class Login {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
  }
  async goToBaseUrl() {
    await this.page.goto(URLS.BASE_URL);
  }

  async enterValidUserName() {
    await this.userNameInput.fill(USERS.VALID_USER.username);
  }

  async enterValidPassword() {
    await this.passwordInput.fill(USERS.VALID_USER.password);
  }

  async enterValidCredentials() {
    await this.enterValidPassword();
    await this.enterValidUserName();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async verifyIfLogged() {
    await expect(this.page).toHaveURL(URLS.PRODUCTS_URL);
  }
}
