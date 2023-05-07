export interface ContactProps {
  name: string;
  email: string;
  phone: string;
}

var contacts: ContactProps[] = [];

export function getContacts(): ContactProps[] {
  if (typeof window !== "undefined") {
    console.log("You are on the browser");
    if (localStorage.getItem("contacts") === null) {
      return [];
    } else {
      contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
      return contacts;
    }
  }
  return contacts;
}

export function addContact(contact: ContactProps) {
  /* Agrega el contacto al localStorage */
  if (typeof window !== "undefined") {
    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("Por favor, llene todos los campos");
      return;
    }
    if (localStorage.getItem("contacts") === null) {
      contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify([]));
      alert("Contacto agregado" + JSON.stringify(contact));
      window.location.reload();
    } else {
      contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
      contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      alert("Contacto agregado" + JSON.stringify(contact));
      window.location.reload();
    }
  }
}

export function deleteContact(contact: ContactProps) {
  /* Elimina el contacto del localStorage */
  if (typeof window !== "undefined") {
    if (localStorage.getItem("contacts") === null) {
      return;
    } else {
      contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
      contacts = contacts.filter((item) => item.email !== contact.email);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      alert("Contacto eliminado" + JSON.stringify(contact));
    }
  }
  window.location.reload();
}

export function updateContact(contact: ContactProps, email: string) {
  /* Actualiza el contacto en el localStorage */
  if (typeof window !== "undefined") {
    if (localStorage.getItem("contacts") === null) {
      return;
    } else {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].email === email) {
          contacts.splice(i, 1);
          const newContact: ContactProps = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
          };
          contacts.push(newContact);
          localStorage.setItem("contacts", JSON.stringify(contacts));

          alert("Contacto actualizado" + JSON.stringify(contact));
        }
      }
      // contacts = JSON.parse(localStorage.getItem("contacts") || "{}");
      // contacts = contacts.filter((item) => item.email !== contact.email);
      // contacts.push(contact);
      // localStorage.setItem("contacts", JSON.stringify(contacts));
      // alert("Contacto actualizado" + JSON.stringify(contact));
    }
  }
  window.location.reload();
}
