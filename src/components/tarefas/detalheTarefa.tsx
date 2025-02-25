import Image from "next/image";
import Link from "next/link";

export function DetalhaTarefa() {
  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center gap-7">
        <h2 className="font-bold text-lg">Visualizar Tarefa</h2>
        <div>
          <input
            type="text"
            placeholder="Título da Tarefa"
            readOnly
            className="w-72 h-12 rounded-lg px-4 text-sm bg-gray-200"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Descrição"
            readOnly
            className="w-72 h-12 rounded-lg px-4 text-sm bg-gray-200"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Status"
            readOnly
            className="w-72 h-12 rounded-lg px-4 text-sm bg-gray-200"
          />
        </div>
        {/* <div className="flex gap-2 items-center">
          <label htmlFor="prazoTarefa" className="text-gray-700 text-sm">
            Definir prazo:{" "}
          </label>
          <input
            type="date"
            id="prazoTarefa"
            name="prazoTarefa"
            placeholder="Título da Tarefa"
            readOnly
            className="w-44 h-12 rounded-lg px-4 text-sm bg-gray-200"
          />
        </div> */}
        <div className="w-72 ">
          <Link
            href="/detalhes"
            className="bg-primary-blue text-white w-full flex items-center justify-center p-3 rounded-lg hover:bg-dark-blue transition-all duration-200 "
          >
            Voltar
          </Link>
        </div>
        <div className=" w-72 ">
          <Link
            href="/criarTarefa"
            className="bg-primary-blue text-white w-full flex items-center justify-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 "
          >
            <Image
              src="/icons/edit.png"
              alt="icone editar"
              width={30}
              height={30}
            />
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}
