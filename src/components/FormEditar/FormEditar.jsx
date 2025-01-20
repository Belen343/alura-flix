import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CampoTexto from 'components/CampoTexto/CamporTexto';
import CampoSelected from 'components/CampoSelected/CampoSelected';
import Botones from 'components/Botones/Botones';
import './FormEditar.css';

const FormEditar = ({ initialData, closeModal, onUpdateCard }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: '',
    });

    const categorias = ['Front End', 'Back End', 'Innovación y Gestión'];

    const [errors, setErrors] = useState({});

    const errorMessages = {
        titulo: 'El título es obligatorio.',
        categoria: 'Seleccione una categoría.',
        imagen: 'Ingrese un enlace válido para la imagen.',
        video: 'Ingrese un enlace válido para el video.',
        descripcion: 'La descripción es obligatoria.',
    };

    useEffect(() => {
        if (initialData) {
            setFormData({
                titulo: initialData.titulo,
                categoria: initialData.categoria,
                imagen: initialData.imagen,
                video: initialData.video,
                descripcion: initialData.descripcion,
            });
        }
    }, [initialData]);

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

        // Actualizar los datos en el servidor o JSON (puedes hacer un PUT aquí)
        fetch(`http://localhost:5000/videos/${initialData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Datos actualizados:', data);
                onUpdateCard(data);
                closeModal();
            })
            .catch((error) => console.error('Error al actualizar:', error));
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
            <Typography variant="h3" textAlign="start" className="container-header">
                Editar card:
            </Typography>

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

            <Box className="form-buttons-edit">
                <Botones type="submit" variant="outlined" className="guardar-button">
                    Guardar
                </Botones>
                <Botones onClick={handleReset} variant="outlined" className="limpiar-button">
                    Limpiar
                </Botones>
            </Box>
        </Box>
    )
}

export default FormEditar;