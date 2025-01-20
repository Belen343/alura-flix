import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './CampoSelected.css';

const CampoSelected = ({ label, name, value, onChange, error, options, placeholder }) => {
    return (
        <TextField
            select
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            fullWidth
            InputLabelProps={{ className: 'input-label', shrink: true }}
            InputProps={{ className: 'input-field' }}
            FormHelperTextProps={{ className: 'error-text' }}
        >
            <MenuItem value="" disabled>
                {placeholder || 'Seleccione una opción'}
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default CampoSelected;