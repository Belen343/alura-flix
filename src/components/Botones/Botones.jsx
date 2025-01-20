import Button from '@mui/material/Button';
import './Botones.css';

const Botones = ({ children, onClick, type = 'button', variant = 'outlined', className }) => {
    return (
        <Button type={type} variant={variant} onClick={onClick} className={className}>
            {children}
        </Button>
    );
};

export default Botones;
