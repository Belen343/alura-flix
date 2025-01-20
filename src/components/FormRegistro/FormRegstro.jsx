import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import './FormRegistro.css';
import CampoTexto from 'components/CampoTexto/CamporTexto';
import CampoSelected from 'components/CampoSelected/CampoSelected';
import Botones from 'components/Botones/Botones';
import { useNavigate } from 'react-router-dom';

const FormRegistro = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: '',
    });

    const categorias = ['Front End', 'Back End', 'Innovacion y Gestion'];

    const [errors, setErrors] = useState({});

    const errorMessages = {
        titulo: 'El título es obligatorio.',
        categoria: 'Seleccione una categoría.',
        imagen: 'Ingrese un enlace válido para la imagen.',
        video: 'Ingrese un enlace válido para el video.',
        descripcion: 'La descripción es obligatoria.',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = errorMessages[key];
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Obtener el último id registrado y sumar 1
        fetch('http://localhost:5000/videos')
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.length > 0 ? Math.max(...data.map((video) => video.id)) : 0;
                const newId = lastId + 1;

                // Crear el nuevo video con el nuevo id
                const newVideo = { ...formData, id: newId };

                // Enviar los datos del formulario al servidor
                fetch('http://localhost:5000/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newVideo), // Enviar los datos del formulario
                })
                    .then((response) => response.json())
                    .then((newVideo) => {
                        console.log('Nuevo video registrado:', newVideo);
                        navigate('/'); // Redirigir sin recargar la página
                    })
                    .catch((error) => console.error('Error al registrar el video:', error));
            })
            .catch((error) => console.error('Error al obtener los videos:', error));
    };

    const handleReset = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagen: '',
            video: '',
            descripcion: '',
        });
        setErrors({});
    };

    return (
        <Box component="form" className="container-form" onSubmit={handleSubmit}>
            <Typography variant="h4" textAlign="start" className="container-header">
                <hr className="divider" />
                Crear Tarjeta
                <hr className="divider" />
            </Typography>

            <Box className="form-row">
                <CampoTexto
                    label="Titulo"
                    placeholder={errors.titulo || 'Ingrese el titulo'}
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    error={!!errors.titulo}
                />

                <CampoSelected
                    label="Categorías"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    error={!!errors.categoria}
                    options={categorias}
                    placeholder="Seleccione una categoría"
                />

            </Box>

            <Box className="form-row">
                <CampoTexto
                    label="Imagen"
                    placeholder={errors.imagen || 'Ingrese el enlace de la imagen'}
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    error={!!errors.imagen}
                />

                <CampoTexto
                    label="Video"
                    placeholder={errors.video || 'Ingrese el enlace del video'}
                    name="video"
                    value={formData.video}
                    onChange={handleChange}
                    error={!!errors.video}
                />
            </Box>

            <Box className="form-row textMultilinie">
                <CampoTexto
                    label="Descripción"
                    placeholder={errors.descripcion || '¿De qué se trata este vídeo?'}
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    error={!!errors.descripcion}
                    multiline
                    rows={4}
                />
            </Box>

            <Box className="form-buttons">
                <Botones type="submit" variant="outlined" className="guardar-button">
                    Guardar
                </Botones>
                <Botones onClick={handleReset} variant="outlined" className="limpiar-button">
                    Limpiar
                </Botones>
            </Box>
        </Box>
    );
};

export default FormRegistro;