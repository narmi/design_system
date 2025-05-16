import { createContext } from "react";

interface TableSectionContextProps {
  section: "header" | "body";
}

/**
 * Used to inform rows and cells which area of the table they're
 * being rendered in, so we can apply the appropriate aria roles.
 */
const TableSectionContext = createContext<TableSectionContextProps>({
  section: "body",
});

export default TableSectionContext;
