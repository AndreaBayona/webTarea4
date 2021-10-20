import * as React from 'react';

import {Container, ImageWrapper} from "./styles";

export type CharacterProps = {
    image: string;
    name: string;
    gender: string;
    status: string;
};

export const Card: React.FunctionComponent<CharacterProps> = ({image, name, gender, status}) => {
    return (
        <Container>
            <ImageWrapper src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
        </Container>
    );
};
