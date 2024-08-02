import Item from "../model/Item.js";

// Get all items with or without a query
export const getAllItems = async (req, res, next) => {
  const items = await Item.find(req.query).sort({ type: "asc", name: "asc" });

  if (!items || items.length === 0) {
    const error = new Error(`Unable to find items with the requested query.`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(items);
};

// Get an item by ID
export const getItem = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findById(id);

  if (!item) {
    const error = new Error(`An item with the id of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(item);
};

// Create new item
export const createItem = async (req, res, next) => {
  console.log(req);
  const hasName = req.body.name;

  if (!hasName) {
    const error = new Error(`Please include a name.`);
    error.status = 400;
    return next(error);
  }

  const newItem = await Item.create({
    name: req.body.name,
    type: req.body.type,
    subtype: req.body.subtype,
    rarity: req.body.rarity,
    imageUrl: req.body.imageUrl,

    stats: req.body.stats,
    passive: req.body.passive,
    components: req.body.components,
  });

  res.status(201).json(newItem);
};

// Update an item by ID
export const updateItem = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findById(id);

  if (!item) {
    const error = new Error(`An item with the id of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  for (const [key, value] of Object.entries(req.body)) {
    item[key] = value;
  }
  item.save();
  res.status(200).json(item);
};

// Delete an item by ID
export const deleteItem = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findById(id);

  if (!item) {
    const error = new Error(`An item with the id of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  await Item.findByIdAndDelete(id);
  res.status(200).send({ message: `Item with id ${id} was found and deleted` });
};
