import { Dashboard } from "../dashboard/dashboard";
import { Header } from "../header/header";
import { Menu } from "../header/menu";

export function Pagina({ children }: any) {
  return (
    <div>
      <div className="lg:hidden">
        <Header />
        <Menu />
        <Dashboard />
        <main>{children}</main>
      </div>

      <div className="hidden lg:grid lg:grid-cols-7 lg:gap-4">
        <div className="lg:grid-flow-row-dense lg:col-start-2 lg:col-span-6">
          <Header />
          <Dashboard />
          <main>{children}</main>
        </div>
        <div className="lg:grid-flow-col lg:row-start-1 lg:h-screen">
          <Menu />
        </div>
      </div>
    </div>
  );
}
