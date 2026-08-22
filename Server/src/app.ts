import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import passport from "./Config/passport";
import { swagger } from "./Config/swagger";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/userRoute";
import corsoptions from "./Config/corsoption";
import cors from "cors";
import documentRoutes from "./routes/documentRoute";
import summaryRoutes from "./routes/summaryRoute";

dotenv.config();

const app = express();
app.use(cors(corsoptions));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);

app.use("/api", documentRoutes);
app.use("/api", summaryRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default app;
