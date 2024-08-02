import express from "express";
import cors from "cors";
import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemControllers.js";

const corsPublic = {
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const corsDev = {
  origin: ["http://localhost:8080/", "http://localhost:5173/"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const router = express.Router();
// Get all items
router.get("/", cors(corsPublic), getAllItems);

// Get single item
router.get("/:id", cors(corsPublic), getItem);

// Create new item
router.post("/", cors(corsDev), createItem);

// Update a item
router.put("/:id", cors(corsDev), updateItem);

// Delete a item
router.delete("/:id", cors(corsDev), deleteItem);

export default router;
