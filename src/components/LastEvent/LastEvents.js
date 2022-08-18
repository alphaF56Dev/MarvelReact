import {Card, Icon, Image, Dimmer, Loader, Button} from 'semantic-ui-react';
import './LastEvents.scss';

export default function LastEvents({lastEventsFetch}) {
    const { loading, result } = lastEventsFetch; //descontruye y crea las variables tomando la información correspondiente al nombre de la variable en el json
    // console.log(lastEventsFetch);

    if(loading || !result){
        return(
            <Dimmer active inverted>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        );
    }
    //es importante que vaya despues de la validacion de existencia de resultado para que no marque error
    const {results} = result.data; //deconstruye result.data para obtener la información de results que se encuentra en el json de result.data
    //console.log(results);

    return results.map((event, index)=>(
            <Card key={index} className="last-event">
                <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{event.title}</Card.Header>
                    <Card.Meta>
                        <span>
                            <Icon name='book'/>
                            {event.comics.available} Comics
                        </span>
                    </Card.Meta>
                    <Card.Description>{event.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button animated fluid as="a" href={event.urls[0].url} target="_blank" color='black'>
                        <Button.Content visible>Ver evento</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card>            
        ));
    
};