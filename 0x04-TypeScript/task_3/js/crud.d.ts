import { RowID, RowElement } from './interface';

declare module './crud.js' {
  /**
   * Inserts a new row into the database.
   * @param row - The element to insert.
   * @returns The ID of the newly inserted row.
   */
  export function insertRow(row: RowElement): RowID;
  /**
   * Deletes a row from the database.
   * @param rowId - The ID of the row to delete.
   */
  export function deleteRow(rowId: RowID): void;
  /**
   * Updates an existing row in the database.
   * @param rowId - The ID of the row to update.
   * @param row - The new data for the row.
   * @returns The ID of the updated row.
   */
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}