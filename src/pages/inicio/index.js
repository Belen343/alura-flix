import Banner from "components/Banner/Banner";
import Cards from "components/Cards/Cards";
import FormEditar from "components/FormEditar/FormEditar";
import ModalEditar from 'components/ModalEditar/ModalEditar';
import { useEffect, useState } from "react";

function Inicio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null); // Para enviar datos al modal
    const [cardsData, setCardsData] = useState([]); //Para almacenar datos de la solicitud GET

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => {
                setCardsData(data); // Asegúrate de que data.videos exista
            })
            .catch(error => console.error('Error al cargar los datos:', error));

        // Escuchar el evento de eliminación de la card
        const handleCardDeleted = (event) => {
            setCardsData(prevCardsData =>
                prevCardsData.filter(card => card.id !== event.detail)
            );
        };

        window.addEventListener('cardDeleted', handleCardDeleted);

        return () => {
            window.removeEventListener('cardDeleted', handleCardDeleted);
        };
    }, []);

    const handleEditClick = (data) => {
        setEditData(data); // Pasa la información necesaria
        setIsModalOpen(true);
    };

    const handleUpdateCard = (updatedCard) => {
        setCardsData(prevCardsData =>
            prevCardsData.map(card => card.id === updatedCard.id ? updatedCard : card)
        );
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditData(null);
    };

    return <>
        <Banner/>
        <Cards cardsData={cardsData} onEditClick={handleEditClick} />

        {isModalOpen && (
            <ModalEditar onClose={closeModal}>
                {editData && (
                    <FormEditar initialData={editData} closeModal={closeModal} onUpdateCard={handleUpdateCard}/>
                )}
            </ModalEditar>
        )}
    </>
}
export default Inicio;