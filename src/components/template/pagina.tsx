import { Dashboard } from "../dashboard/dashboard";
import { Header } from "../header/header";
import { Menu } from "../header/menu";
import { listaUsuarios } from "@/data/constants/usuarios";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { Usuarios } from "../usuarios/usuarios";

export function Pagina({ children }: any) {
  return (
    <div>
      <div className="lg:hidden">
        {/* <Header /> */}
        {/* ############################ */}
        <div>
          {listaUsuarios.map((usuario: modelUsuarios) => {
            return <Header key={usuario.id} usuarioHeader={usuario} />;
          })}
        </div>
        {/* ############################# */}
        <Menu />
        <Dashboard />
        <main>{children}</main>
      </div>

      <div className="hidden lg:grid lg:grid-cols-7 lg:gap-4">
        <div className="lg:grid-flow-row-dense lg:col-start-2 lg:col-span-6">
          {/* <Header /> */}
          {/* ############################ */}
          <div>
            {listaUsuarios.map((usuario: modelUsuarios) => {
              return <Header key={usuario.id} usuarioHeader={usuario} />;
            })}
          </div>
          {/* ############################# */}
          <Dashboard />
          <main className="lg:overflow-scroll lg:h-[480px]">{children}</main>
        </div>
        <div className="lg:grid-flow-col lg:row-start-1 lg:h-screen">
          <Menu />
        </div>
      </div>
    </div>
  );
}
