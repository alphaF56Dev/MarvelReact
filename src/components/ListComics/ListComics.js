import { Dimmer, Image, Loader, Button, Card, Icon } from "semantic-ui-react";
import './ListComics.scss';
export default function ListComics({listLastComics, renderComics, setRenderComics}) {
    const {loading, result} = listLastComics;

    if(loading || !result){
        return (<Dimmer active inverted>
            <Loader inverted>Loading ...</Loader>
        </Dimmer>);
    }

    const {results} = result.data;
    // console.log('ListComics: ',results);
    const loadMoreComics = () =>{
        const numberComics = renderComics;
        setRenderComics(numberComics+5);
        //console.log("solicitando mas comics");
    };

    return (
        <Card.Group itemsPerRow={5}>
            {results.map((comic, index)=>(
                <Card key={index} className="list-comics">
                    <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} wrapped ui={false} />
                    <Card.Header>{comic.title}</Card.Header>
                    <Card.Meta>
                        Digital ID: {comic.digitalId}
                    </Card.Meta>
                    <Card.Content>
                        <Button animated fluid as="a" href={`${comic.urls[0].url}`} target="_blank" color="black">
                            <Button.Content visible>Más información</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right"/>
                            </Button.Content>
                        </Button>                            
                    </Card.Content>
                </Card>        
            ))}
            <div className="container-button">
                <Button color="red" onClick={()=>loadMoreComics()}>
                    <Icon name="plus"/>
                    Más comics
                </Button>
            </div>
        </Card.Group>)
};