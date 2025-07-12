// task_3/js/crud.d.ts

// Import the type definitions from the interface file.
import { RowID, RowElement } from "./interface";

// Declare the function signatures for the functions exported from crud.js.
export function insertRow(row: RowElement): RowID;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;
