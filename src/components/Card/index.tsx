import * as React from 'react';

import {Container, ImageWrapper} from "./styles";

export type CharacterProps = {
    image: string;
    name: string;
    gender: string;
    state: string;
};

export const Card: React.FunctionComponent<CharacterProps> = ({image, name, gender, state}) => {
    return (
        <Container>
            <ImageWrapper src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>State: {state}</p>
        </Container>
    );
};
