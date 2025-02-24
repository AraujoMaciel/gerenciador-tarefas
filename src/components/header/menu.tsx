import Image from "next/image";

export function Menu() {
  return (
    <div className="lg:rounded-xl lg:h-full">
      <div className="flex gap-4 px-4 mb-4 items-center lg:my-0 overflow-scroll md:my-10 md:px-10 lg:flex-col lg:bg-basic-white lg:h-full lg:mx-5 lg:py-20 lg:rounded-3xl lg:shadow-2xl">
        <div className="bg-primary-green cursor-pointer w-16 h-16 flex justify-center items-center border-1 border-gray-100 rounded-xl">
          <Image
            src="/icons/plus.png"
            alt="icone criar tarefa"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-primary-blue cursor-pointer w-16 h-16 flex justify-center items-center border-1 border-gray-100 rounded-xl">
          <Image
            src="/icons/checklist.png"
            alt="icone lista de tarefas"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-primary-blue cursor-pointer w-16 h-16 flex justify-center items-center border-1 border-gray-100 rounded-xl">
          <Image
            src="/icons/notification.png"
            alt="icone notificacao"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
