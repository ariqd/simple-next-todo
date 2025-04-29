import React from 'react'
import { GrClose } from 'react-icons/gr';

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <label
                    onClick={() => setModalOpen(false)}
                    htmlFor="my-modal-3"
                    className='btn btn-sm btn-circle absolute right-2 top-2'>
                    <GrClose />
                </label>
                {children}
            </div>
        </dialog>
    )
}

export default Modal