import {Card, Image, Button, Icon} from "semantic-ui-react";
import Container from "../Container";
import './ListCharacters.scss';

export default function ListCharacters({fetchCharacters,showChars, setShowChars}) {
    const {loading, result} = fetchCharacters;
    if (loading || !result){
        return(
            <Container bg="light">
                Cargando Characters
            </Container>
        );;
    }
    const closeList = () =>{
        setShowChars(false);
    };

    const {results} = result.data;

    console.log("characters desde ListCharacters: ", fetchCharacters);

    return (
            <Card.Group itemsPerRow={5}>
                {results.map((character, index)=>(
                    <Card key={index} className="list-characters">
                        <Card.Header>{character.name}</Card.Header>
                        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} wrapped ui={false} />
                        <Card.Meta>
                            <Icon name="calendar" /> Eventos: {character.events.available}
                        </Card.Meta>
                        <Card.Meta>
                            <Icon name="book"/> Comics: {character.comics.available}
                        </Card.Meta>
                        <Card.Meta>
                            <Icon name="calendar alternate outline" /> Last Update: {character.modified}
                        </Card.Meta>
                        <Card.Content>
                            <Button animated fluid as="a" href={`${character.urls[0].url}`} target="_blank" color="black">
                                <Button.Content visible>
                                    Mas información
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name="arrow right" />
                                </Button.Content>
                            </Button> 
                        </Card.Content>
                    </Card>
                ))}
                
                <div className="container-button">
                    <Button  color="red" onClick={()=>closeList()}>
                        <Icon name="times" />
                        Ocultar personajes
                    </Button>
                </div>
            </Card.Group>
    );
};