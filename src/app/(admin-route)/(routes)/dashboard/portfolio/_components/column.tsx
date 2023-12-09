"use client";
import { format } from "date-fns";

import { Portfolio } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Portfolio>[] = [
  {
    accessorKey: "title",
    header: () => <div className="px-4 py-2">Title</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
        <div><span className="text-primary bg-secondary px-2 py-1 rounded-md">{row.original.category}</span></div>
      ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-muted-foreground">{format(row.original.createdAt, "dd - MM - yyyy")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original}/>,
  },
];