// task_3/js/main.ts

// Import the type definitions from the interface file
import { RowID, RowElement } from "./interface";

// Import all exports from 'crud.js' into a single namespace object called CRUD
// TypeScript knows the types of these functions from the crud.d.ts file
import * as CRUD from "./crud";

// Create a row object with the specified type
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and store the returned ID.
// newRowID is correctly typed as RowID (number)
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}`);

// Create an updated version of the row, including the optional 'age' field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the update and delete functions with the correct types
CRUD.updateRow(newRowID, updatedRow);
console.log(
  `CRUD.updateRow(${newRowID}, updatedRow)\n// Update row ${newRowID} ${JSON.stringify(
    updatedRow
  )}`
);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})\n// Delete row id ${newRowID}`);
