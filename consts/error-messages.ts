import { ErrorMessage } from "@interfaces";

export const errorMessagesText: {
	noUsername: ErrorMessage;
	noPassword: ErrorMessage;
	noUser: ErrorMessage;
	locked: ErrorMessage;
} = {
	noUsername: { message: "Epic sadface: Username is required" },
	noPassword: { message: "Epic sadface: Password is required" },
	noUser: {
		message:
			"Epic sadface: Username and password do not match any user in this service",
	},
	locked: { message: "Epic sadface: Sorry, this user has been locked out." },
};
