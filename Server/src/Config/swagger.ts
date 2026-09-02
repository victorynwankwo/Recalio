import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerDefinition } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Recalio API",
    version: "1.0.0",
    description: "REST API documentation for the Recalio application",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    parameters: {
      DocumentId: {
        name: "id",
        in: "path",
        required: true,
        description: "The document cuid.",
        schema: { type: "string", example: "cm123abc" },
      },
    },
    schemas: {
      Error: {
        type: "object",
        required: ["message"],
        properties: { message: { type: "string", example: "Document not found" } },
      },
      Document: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string", example: "Biology lecture 1.pdf" },
          fileUrl: { type: "string", format: "uri" },
          extractedText: { type: "string", nullable: true },
          summary: { type: "string", nullable: true },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Flashcard: {
        type: "object",
        properties: {
          id: { type: "string" },
          front: { type: "string" },
          back: { type: "string" },
          documentId: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Quiz: {
        type: "object",
        properties: {
          id: { type: "string" },
          documentId: { type: "string" },
          questions: { type: "array", items: { type: "object" } },
          createdAt: { type: "string", format: "date-time" },
        },
      },
    },
    responses: {
      BadRequest: {
        description: "Invalid request",
        content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
      },
      Unauthorized: {
        description: "Missing, invalid, or expired bearer token",
        content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
      },
      NotFound: {
        description: "Requested resource was not found",
        content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [
    "./src/routes/*.ts",
    "./src/routes/**/*.ts",
    "./src/Routes/*.ts",
    "./src/Controller/**/*.ts",
    "./src/Controllers/**/*.ts",
    "./src/app.ts",
  ],
};

export const swagger = swaggerJSDoc(options);
