import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import items from "./routes/items.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const app = express();
const env = dotenv.config();
const port = env.parsed.PORT || 8000;

// Connect to MongoDB
mongoose.connect(
  `mongodb+srv://${env.parsed.USER}:${env.parsed.PASSWORD}@cluster0.qp0dovg.mongodb.net/EternalReturn?retryWrites=true&w=majority&appName=Cluster0`
);

// Cors
const corsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"], // Only allow certain requests
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use("/api/items", items);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
