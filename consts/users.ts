/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { User } from "@interfaces";

export const user: {
	validUser: User;
	invalidUser: User;
	lockedUser: User;
	performanceGlitchUser: User;
} = {
	validUser: {
		username: process.env.USERNAME!,
		password: process.env.PASSWORD!,
	},
	invalidUser: {
		username: "abc",
		password: "abc",
	},
	lockedUser: {
		username: process.env.LOCKED_USER!,
		password: process.env.PASSWORD!,
	},
	performanceGlitchUser: {
		username: process.env.PERFORMANCE_GLITCH_USER!,
		password: process.env.PASSWORD!,
	},
};
