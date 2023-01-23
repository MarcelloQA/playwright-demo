import { errorMessagesText } from "@consts/error-messages";
import { user } from "@consts/users";
import { test } from "@fixtures";

test.describe("Login page tests", () => {
	test.beforeEach(async ({ loginPage }) => {
		await loginPage.goToBaseUrl();
	});

	test.afterAll(async ({ page }) => {
		await page.close();
	});

	test("should verify that users can log in to the app using valid credentials", async ({
		loginPage,
	}) => {
		await loginPage.enterCredentials(user.validUser);
		await loginPage.clickLoginButton();
		await loginPage.verifyIfLoggedIn(true);
	});

	test("should verify that users cannot log in to the app using invalid credentials", async ({
		loginPage,
	}) => {
		await loginPage.clickLoginButton();
		await loginPage.verifyErrorMessage(errorMessagesText.noUsername);
		await loginPage.dismissErrorMessage();
		await loginPage.enterCredentials(user.invalidUser);
		await loginPage.clickLoginButton();
		await loginPage.verifyErrorMessage(errorMessagesText.noUser);
		await loginPage.verifyIfLoggedIn(false);
	});

	test("should test that locked users cannot log in to the app", async ({
		loginPage,
	}) => {
		await loginPage.enterCredentials(user.lockedUser);
		await loginPage.clickLoginButton();
		await loginPage.verifyErrorMessage(errorMessagesText.locked);
		await loginPage.verifyIfLoggedIn(false);
	});
});
