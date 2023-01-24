import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import { Sidebar } from "@pages/sidebar.page";
import { InventoryPage } from "@pages/inventory.page";

type Fixtures = {
	loginPage: LoginPage;
	inventoryPage: InventoryPage;
	sidebar: Sidebar;
};

export const test = base.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	inventoryPage: async ({ page }, use) => {
		await use(new InventoryPage(page));
	},
	sidebar: async ({ page }, use) => {
		await use(new Sidebar(page));
	},
});

export { expect } from "@playwright/test";
