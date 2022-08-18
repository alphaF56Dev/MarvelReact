import {Header, Button, Grid, Image} from 'semantic-ui-react';
import Container from '../Container';
import marvelImage from '../../img/marvel.png'
import './BestCharacter.scss';

export default function BestCharacter() {
    const showCharacters = () =>{
        console.log("click para ver los characters");
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
        </Container>
    );
}