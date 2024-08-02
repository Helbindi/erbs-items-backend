import express from "express";
import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemControllers.js";
const router = express.Router();

// Get all items
router.get("/", getAllItems);

// Get single item
router.get("/:id", getItem);

// Create new item
router.post("/", createItem);

// Update a item
router.put("/:id", updateItem);

// Delete a item
router.delete("/:id", deleteItem);

export default router;
