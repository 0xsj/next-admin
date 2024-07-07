"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";
type CompProps = {};
export default function ThemeToggle({}: CompProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </Button>
  );
}
