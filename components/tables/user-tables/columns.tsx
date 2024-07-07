"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { IconBook, IconFile, IconPdf } from "@tabler/icons-react";

export const dockLabels = [
  {
    value: "w4",
    label: "w4",
    icon: <IconPdf size={20} />,
  },
  {
    value: "application",
    label: "application",
    icon: <IconFile size={20} />,
  },
  {
    value: "handbook",
    label: "handbook",
    icon: <IconBook size={20} />,
  },
];

export const randomIcon = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const selectedLabel = dockLabels[randomIndex];
  return selectedLabel.icon;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "company",
    header: "COMPANY",
  },
  {
    accessorKey: "role",
    header: "ROLE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
