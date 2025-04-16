// src/components/ModalConocenos.tsx
import Modal from 'react-modal';
import './modalConocenos.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

Modal.setAppElement('#root'); // Asegúrate de que el ID coincida con el de tu HTML principal

export default function ModalConocenos({ isOpen, onClose }: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Modal Conócenos"
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Sobre Mont Design</h2>
            <p>
                Mont Design es una carpintería con un legado de tres generaciones en la fabricación
                de muebles de alta calidad y diseño moderno. Con raíces en el apellido Montejo, hemos
                sido pioneros en el sector de la carpintería en Tabasco, brindando soluciones elegantes
                y duraderas para hogares, oficinas, hoteles y hospitales.
            </p>
        </Modal>
    );
}
