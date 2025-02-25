import { Pagina } from "@/components/template/pagina";
import Mensagens from "@/components/mensagens/mensagens";
import Image from "next/image";
import Link from "next/link";
import { ListarNotificacoes } from "@/components/mensagens/listaNotificacoes";

export default function Notificacoes() {
  return (
    <div>
      <Pagina>
        <div className="bg-slate-100 rounded-xl mx-4 flex justify-between items-center px-7 py-4 my-12">
          <h2>Suas Notificações aparecerão aqui</h2>
          <Link href="/notificacoes" className="w-8 cursor-pointer">
            <Image
              src="/icons/refresh.png"
              alt="icone refresh"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <ListarNotificacoes />
      </Pagina>
    </div>
  );
}
