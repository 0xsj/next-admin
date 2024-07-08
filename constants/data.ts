import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
import { IconBook, IconFile, IconPdf } from "@tabler/icons-react";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "SJ Lee",
    company: "Cohort",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "Venelin V",
    company: "Cohort",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alex L",
    company: "Cohort",
    role: "Product Manager / QA",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "홍길동",
    company: "Modu Management",
    role: "HR",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "이나경",
    company: "BCD",
    role: "Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "Kopan Ramen",
    role: "Cashier",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "Kopan Ramen",
    role: "Server",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "Kopan Ramen",
    role: "Server",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "BCD",
    role: "Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "Issac Toast",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Directory",
    href: "/dashboard/user",
    icon: "bookUser",
    label: "user",
  },
  {
    title: "Employee",
    href: "/dashboard/employee",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "settings",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Apps",
    href: "/dashboard/apps",
    icon: "plug",
    label: "apps",
  },
  {
    title: "Sandbox",
    href: "/dashboard/sandbox",
    icon: "sandbox",
    label: "sandbox",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
