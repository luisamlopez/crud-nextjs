import {
  ContactProps,
  addContact,
  updateContact,
} from "@/pages/api/contactsCRUD";
export interface FormProps {
  name?: string;
  email?: string;
  phone?: string;
  isEditing: boolean;
}

export default function Form(props: FormProps) {
  return (
    <div className="bg-white p-2 rounded">
      <h2 className="text-xl font-bold mb-2">
        {props.isEditing ? "Editar Contacto" : "Agregar Contacto"}
      </h2>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={props.name}
          id="name"
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Correo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={props.email}
          id="email"
          type="email"
          placeholder="Correo"
        />
      </div>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Teléfono
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={props.phone}
          id="phone"
          type="tel"
          placeholder="Teléfono"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            const name = (document.getElementById("name") as HTMLInputElement)
              .value;
            const email = (document.getElementById("email") as HTMLInputElement)
              .value;
            const phone = (document.getElementById("phone") as HTMLInputElement)
              .value;

            if (!props.isEditing) {
              AgregarContacto(name, email, phone);
            } else {
              updateContact({ name, email, phone }, props.email?.toString()!);
            }
          }}
        >
          {props.isEditing ? "Editar" : "Agregar"}
        </button>
      </div>
    </div>
  );
}

function AgregarContacto(name: string, email: string, phone: string) {
  addContact({ name, email, phone });
}
