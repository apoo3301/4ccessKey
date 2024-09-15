/**
 * This file is used to define the routes of the application.
 * @type {string[]}
 */


/**
 * This array contains the public routes of the application.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/settings"
];


/**
 * This array contains the protected routes of the application.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]


/**
 * Prefix for the API auth routes
 * This array contains the admin routes of the application.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * Prefix for the API admin routes
 * This array contains the admin routes of the application.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile";