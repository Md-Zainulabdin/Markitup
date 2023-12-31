"use client";
import { format } from "date-fns";

import { Service } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Service>[] = [
  {
    accessorKey: "heading",
    header: () => <div className="px-4 py-2">Title</div>,
  },
  {
    accessorKey: "subHeading",
    header: "Sub-Heading",
    cell: ({ row }) => (
        <div className="text-muted-foreground">{row.original.subHeading}</div>
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
