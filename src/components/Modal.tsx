import Form from "./Form";

export interface ModalProps {
  name?: string;
  email?: string;
  phone?: string;
  isVisible: boolean;
  onClose: () => void;
  isEditing: boolean;
}

export default function Modal(props: ModalProps) {
  if (!props.isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "modal") props.onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 background-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="modal"
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => {
            props.onClose();
          }}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <Form
            name={props.name}
            email={props.email}
            phone={props.phone}
            isEditing={props.isEditing}
          />
        </div>
      </div>
    </div>
  );
}
