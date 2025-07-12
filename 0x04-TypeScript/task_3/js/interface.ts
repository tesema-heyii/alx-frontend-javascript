// task_3/js/interface.ts

// Type alias for a row's unique identifier.
export type RowID = number;

// Interface describing the structure of a row element.
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
