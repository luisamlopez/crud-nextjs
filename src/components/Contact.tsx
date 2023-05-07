import { useState } from "react";
import style from "../styles/Contact.module.css";
import Modal from "./Modal";

export interface ContactProps {
  name: string;
  email: string;
  phone: string;
  editing?: boolean;
}

export default function Contact({ name, email, phone, editing }: ContactProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={style.cardHolder}>
      <div className={style.cardInfo}>
        <h5 className="mb-1 text-xl font-medium text-black-900 dark:text-black">
          {name}
        </h5>

        <span className="text-sm text-black-500 dark:text-black-400">
          {email}
        </span>
        <span className="text-sm text-black-500 dark:text-black-400">
          {phone}
        </span>
      </div>
      <div className={style.buttons}>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setShowModal(true)}
        >
          Editar
        </button>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Eliminar
        </a>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        isEditing={true}
        name={name}
        email={email}
        phone={phone}
      />
    </div>
  );
}
