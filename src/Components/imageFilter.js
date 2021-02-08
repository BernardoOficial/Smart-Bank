import React from 'react';
import { Icone } from './ComponentesGerais';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import saude from '../assets/images/saude.svg';

const imageFilter = (type) => {
    const images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Transporte: <Icone src={transporte} alt="Transporte" />,
        Utilidades: <Icone src={utilidades} alt="Utilidades" />,
        Saude: <Icone src={saude} alt="Saude" />,
        Outros: <Icone src={outros} alt="Outros" />,
    }

    return images[type] || images.default;
}

export default imageFilter;