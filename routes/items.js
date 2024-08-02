import express from "express";
import cors from "cors";
import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemControllers.js";

const corsPrivate = {
  origin: ["http://localhost:5173", "http://localhost:8080"],
};

const router = express.Router();
// Get all items
router.get("/", getAllItems);

// Get single item
router.get("/:id", getItem);

// Create new item
router.post("/", cors(corsPrivate), createItem);

// Update a item
router.put("/:id", cors(corsPrivate), updateItem);

// Delete a item
router.delete("/:id", cors(corsPrivate), deleteItem);

export default router;
