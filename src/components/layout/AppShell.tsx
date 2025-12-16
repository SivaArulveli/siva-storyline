import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-sacred">
      <SiteHeader />
      
      <main className="relative z-10">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
};

export default AppShell;
