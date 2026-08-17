import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerDefinition } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Recalio API",
    version: "1.0.0",
    description:
      "REST API documentation for the Recalio application",
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
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  // scan these files for JSDoc @swagger comments
  apis: ["./src/Routes/*.ts", "./src/Controllers/*.ts"],
};

export const swagger = swaggerJSDoc(options);
