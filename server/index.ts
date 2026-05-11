import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import compression from "compression";
import hpp from "hpp";

import routes from "./routes";
import {
  requestLogger,
  responseLogger,
  notFoundMiddleware,
} from "./config/middlewares";

const app = express();

app.disable("x-powered-by");

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(hpp());

app.use(compression());

app.use(
  express.json({
    limit: "10kb",
  }),
);

app.use(requestLogger);
app.use(responseLogger);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

app.get("/health", (_req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server healthy",
  });
});

app.use("/api", routes);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
