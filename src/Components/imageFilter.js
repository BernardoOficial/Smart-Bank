import React from 'react';
import { IconeTheme } from './ComponentesGerais';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import saude from '../assets/images/saude.svg';

const imageFilter = (type) => {
    const images = {
        Restaurante: <IconeTheme src={alimentacao} alt="Restaurante" />,
        Transporte: <IconeTheme src={transporte} alt="Transporte" />,
        Utilidades: <IconeTheme src={utilidades} alt="Utilidades" />,
        Saude: <IconeTheme src={saude} alt="Saude" />,
        Outros: <IconeTheme src={outros} alt="Outros" />,
    }

    return images[type] || images.default;
}

export default imageFilter;