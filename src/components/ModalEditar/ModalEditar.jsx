import './ModalEditar.css';
import icono from '../../assets/iconos/cerrar.png';

const ModalEditar = ({ children, onClose }) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <img src={icono} className="closeButton" onClick={onClose}/>
        {children}
      </div>
    </div>
  );
};

export default ModalEditar;