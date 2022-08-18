import {Card, Header} from 'semantic-ui-react';
import useFetch from '../../hooks/useFetch';
import Container from '../Container';
import LastEvents from '../LastEvent';

import './ListLastEvents.scss';

export default function ListLastEvents() {
    const lastEventsFetch = useFetch(`
        ${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
    );
    console.log('Resultados: ',lastEventsFetch);
    //const lastEvents = lastEventsFetch.result.data.results;    
    //console.log('Resultados directo: ', lastEvents);
    return(
        <div className='container-list-last-events'>
            <Header size='large'>Últimos eventos</Header>
            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    {/*lastEvents.map((lastEvent, index) => (
                          <LastEvents lastEvent={lastEvent}/>  
                    ))*/}
                    <LastEvents lastEventsFetch={lastEventsFetch} />
                </Card.Group>
            </Container>
        </div>
    );
}