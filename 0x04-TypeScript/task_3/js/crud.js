// Inserts a row and returns a randomly generated ID.
export function insertRow(row) {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

// Deletes a row by its ID.
export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
  return;
}

// Updates a row with new data.
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
