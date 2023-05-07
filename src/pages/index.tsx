import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export type ContactProps = {
  name: string;
  email: string;
  phone: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }
  var contacts: ContactProps[];
  if (localStorage.getItem("contacts") == null) {
    contacts = [];
    localStorage.setItem("contacts", JSON.stringify(contacts));
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts")!);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1> Lista de Contactos </h1>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>
        <Modal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          isEditing={false}
        />
        <div className={styles.grid}>
          <Contact name="Juan Perez" email="juan@mail.com" phone="123456" />
          {contacts.map((contact, i) => (
            <Contact
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              key={i}
            />
          ))}
        </div>
      </main>
    </>
  );
}
