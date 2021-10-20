import * as React from "react";
import {CharacterProps, Card} from "../Card";
import {Container} from "./styles";

export const getCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
        },
    }).then((res) => res.json());
};

export const Gallery: React.FunctionComponent = () => {

    const [characters, setCharacters] = React.useState<CharacterProps[]>([]);

    React.useEffect(() => {
        getCharacters().then(data => {
            const dataArray = data["results"] as CharacterProps[];
            setCharacters(dataArray);
        });
    }, []);

    return (
        <Container>
            {
                characters.map((character, index) =>
                    <Card
                        key={index}
                        image={character.image}
                        name={character.name}
                        gender={character.gender}
                        state={character.state}
                    />
                )
            }
        </Container>
    );
};