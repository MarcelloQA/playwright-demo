import { urls } from "@consts/urls";
import { expect, Locator, Page } from "@playwright/test";

export class Sidebar {
	readonly page: Page;
	readonly hamburgerMenuButton: Locator;
	readonly closeSidebarButton: Locator;
	readonly allItemsButton: Locator;
	readonly aboutButton: Locator;
	readonly logoutButton: Locator;
	readonly resetAppStateButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.hamburgerMenuButton = page.getByRole("button", {
			name: "Open Menu",
		});
		this.closeSidebarButton = page.getByRole("button", {
			name: "Close Menu",
		});
		this.allItemsButton = page.getByRole("link", {
			name: "All Items",
		});
		this.aboutButton = page.getByRole("link", {
			name: "About",
		});
		this.logoutButton = page.getByRole("link", {
			name: "Logout",
		});
		this.resetAppStateButton = page.getByRole("link", {
			name: "Reset App State",
		});
	}

	async openSidebar() {
		await this.hamburgerMenuButton.click();
	}

	async closeSidebar() {
		await this.closeSidebarButton.click();
	}

	async clickAllItemsButton() {
		await this.allItemsButton.click();
	}

	async clickAboutButton() {
		await this.aboutButton.click();
	}

	async clickLogoutButton() {
		await this.logoutButton.click();
	}

	async clickResetAppStateButton() {
		await this.resetAppStateButton.click();
	}

	async verifyAboutLink() {
		await expect(this.page).toHaveURL(urls.externalUrl);
	}
}
