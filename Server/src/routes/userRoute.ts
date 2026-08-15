import express from "express";
import passport from "../Config/passport";
import {
  register,
  login,
  googleCallback,
} from "../Controller/Authentication/user";

const router = express.Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: New user information. `confirmPassword` must match `password`.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               username:
 *                 type: string
 *                 example: alice
 *               email:
 *                 type: string
 *                 format: email
 *                 example: alice@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securePassword123
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 example: securePassword123
 *     responses:
 *       '201':
 *         description: User registered successfully (password omitted)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 user:
 *                   type: object
 *                   description: The created user object (password field is removed)
 *       '400':
 *         description: Validation error (missing fields, mismatch, or weak password)
 *         content:
 *           application/json:
 *             examples:
 *               missing_fields:
 *                 summary: Missing fields
 *                 value:
 *                   message: All fields are required
 *               passwords_mismatch:
 *                 summary: Passwords do not match
 *                 value:
 *                   message: Passwords do not match
 *               weak_password:
 *                 summary: Password too short
 *                 value:
 *                   message: Password must be at least 8 characters
 *       '409':
 *         description: Conflict — email or username already exists
 *         content:
 *           application/json:
 *             example:
 *               message: Email or username already in use
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Something went wrong
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login with email and password
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Credentials for authentication
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: alice@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securePassword123
 *     responses:
 *       '200':
 *         description: Login successful — returns access token and user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token (expires in 1 hour)
 *                 user:
 *                   type: object
 *                   description: Authenticated user (password omitted)
 *       '400':
 *         description: Missing credentials
 *         content:
 *           application/json:
 *             example:
 *               message: Email and password are required
 *       '401':
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid email or password
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: Something went wrong
 */
router.post("/login", login);

/**
 * @openapi
 * /api/auth/google:
 *   get:
 *     summary: Redirects user to Google for OAuth authentication
 *     tags:
 *       - Auth
 *     responses:
 *       '302':
 *         description: Redirect to Google's OAuth consent screen
 */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

/**
 * @openapi
 * /api/auth/google/callback:
 *   get:
 *     summary: Google OAuth callback endpoint
 *     tags:
 *       - Auth
 *     description: |
 *       This endpoint is called by Google after the user completes authentication.
 *       On success the server will create/sign an access token and then redirect to the frontend.
 *       On failure the user is redirected to the frontend login page with an error query parameter.
 *     responses:
 *       '302':
 *         description: Redirect to frontend (success or failure)
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: Redirecting to frontend application
 */
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleCallback,
);

export default router;
