import {Header, Button, Grid, Image} from 'semantic-ui-react';
import Container from '../Container';
import marvelImage from '../../img/marvel.png'
import './BestCharacter.scss';
import ListCharacters from '../ListCharacters/ListCharacters';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

export default function BestCharacter() {
    const [showChars, setShowChars] = useState(false);
    const fetchCharacters = useFetch(
        `${process.env.REACT_APP_URL_BASE}/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=-modified&limit=20`
    );
    const showCharacters = () =>{
        // console.log("click para ver los characters");
        console.log('Lista de caracteres',fetchCharacters);
        setShowChars(true);
    };
    return (
        <Container>
            <div className="best-characters">
                <Grid columns={2} divided="vertically">
                    <Grid.Column>
                        <Header as="h1">
                            Los mejores personajes de Marvel
                        </Header>
                        <Header as="h3">
                            Disfruta del mejor contenido
                        </Header>
                        <Button onClick={showCharacters}>Ver todos los personajes</Button>
                    </Grid.Column>
                    <Grid.Column className="image-container">
                        <Image src={marvelImage} alt="Marvel-app" />
                    </Grid.Column>
                </Grid>                
            </div>
            {showChars && <ListCharacters fetchCharacters={fetchCharacters} showChars={showChars} setShowChars={setShowChars}/>}
        </Container>
    );
}