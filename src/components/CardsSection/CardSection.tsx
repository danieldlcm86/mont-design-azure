import React from 'react';
import Card from '../Cards/Card';
import './cardSection.css'

interface Destination {
    image: string;
    title: string;
    location: string;
}

const destinations: Destination[] = [
    {
        image: '/products/modern-modular-desk.webp',
        title: 'Escritorio Modular',
        location: 'Cedro',
    },
    {
        image: '/products/luxurious-living-room.webp',
        title: 'Sala',
        location: 'Dark',
    },
    {
        image: '/products/crafted-diningtable.webp',
        title: 'Comedor',
        location: 'Caoba',
    },
    {
        image: '/products/stylish-wooden.webp',
        title: 'Repero',
        location: 'Cedro',
    },
    {
        image: '/products/classic-dinning-table.png',
        title: 'Comedor',
        location: 'Caobilla',
    },
    {
        image: '/products/duo-table.png',
        title: 'Comedor dúo',
        location: 'Chocolate',
    },
    {
        image: '/products/sleek-floating.webp',
        title: 'Mueble de entretenimiento',
        location: 'Madera',
    },
    {
        image: '/products/modular-tv.png',
        title: 'Mueble modular de TV',
        location: 'Madera',
    },
    {
        image: '/products/banho-mueble.jpg',
        title: 'Mueble de baño',
        location: 'Flotante',
    },

];

const CardsSection: React.FC = () => {
    return (
        // <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <section className='grid-servicios'>
            {destinations.map((destination, index) => (
                <Card
                    key={index}
                    image={destination.image}
                    title={destination.title}
                    location={destination.location}
                />
            ))}
        </section>
    );
};

export default CardsSection;
