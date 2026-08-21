import cors from "cors";
import type { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: true,
  credentials: true,
};

export default corsOptions;