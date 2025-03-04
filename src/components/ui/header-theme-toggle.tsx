
import { ThemeToggle } from "@/components/ui/theme-toggle";

const HeaderThemeToggle = () => {
  // We'll use this component to insert the ThemeToggle into the application's header
  return (
    <div className="absolute top-4 right-4 z-50">
      <ThemeToggle />
    </div>
  );
};

export default HeaderThemeToggle;
