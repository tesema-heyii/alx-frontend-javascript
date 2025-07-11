// Triple-slash directive to include dependencies from crud.d.ts
/// <reference path="crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

// Create a row element
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get the new row's ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated version of the row with an age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update the row with the new data and then delete it
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
