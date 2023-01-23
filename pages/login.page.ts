import { expect, Locator, Page } from "@playwright/test";
import { User, ErrorMessage } from "@interfaces";
import { urls } from "@consts/urls";

export class LoginPage {
	readonly page: Page;
	readonly userNameInput: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;
	readonly errorMessage: Locator;
	readonly errorButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.userNameInput = page.getByTestId("username");
		this.passwordInput = page.getByTestId("password");
		this.loginButton = page.getByTestId("login-button");
		this.errorMessage = page.getByTestId("error");
		this.errorButton = page.getByTestId("error").getByRole("button");
	}
	async goToBaseUrl() {
		await this.page.goto(urls.baseUrl);
	}

	async enterCredentials(usere: User) {
		await this.userNameInput.fill(usere.username);
		await this.passwordInput.fill(usere.password);
	}

	async dismissErrorMessage() {
		await this.errorButton.click();
	}

	async clickLoginButton() {
		await this.loginButton.click();
	}

	async verifyIfLoggedIn(isLoggedIn: boolean) {
		if (isLoggedIn) {
			await expect(this.page).toHaveURL(urls.productUrl);
		} else {
			await expect(this.page).not.toHaveURL(urls.productUrl);
			await expect(this.page).toHaveURL(urls.baseUrl);
		}
	}
	async verifyErrorMessage(errorMessage: ErrorMessage) {
		await expect(this.errorMessage).toHaveText(errorMessage.message);
	}
}
