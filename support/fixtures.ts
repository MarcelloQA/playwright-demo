import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import { Shared } from "@pages/shared.page";

type Fixtures = {
	loginPage: LoginPage;
	shared: Shared;
};

export const test = base.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	shared: async ({ page }, use) => {
		await use(new Shared(page));
	},
});

export { expect } from "@playwright/test";
