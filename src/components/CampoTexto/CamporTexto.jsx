import TextField from '@mui/material/TextField';
import './CampoTexto.css'

const CampoTexto = ({ label, placeholder, name, value, onChange, error, multiline = false, rows = 1 }) => {
    return (
        <TextField
            label={label}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            fullWidth
            multiline={multiline}
            rows={rows}
            InputLabelProps={{ className: 'input-label', shrink: true }}
            InputProps={{ className: 'input-field' }}
            FormHelperTextProps={{ className: 'error-text' }}
        />
    );
};

export default CampoTexto;