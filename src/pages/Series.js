import useFetch from "../hooks/useFetch";
import LastSeries from '../components/ListSeries';
import { Grid, Header} from 'semantic-ui-react';
import Container from "../components/Container";
import { useState } from "react";

export default function Series() {
    const [limitSeries, setLimitSeries] = useState(10);
    const listLastSeries = useFetch(
        `${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=${limitSeries}`
    );

    // console.log('Series: ', listLastSeries);
    return(
        <div>
            <div className="series-page">
                <div id="slide-series-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las ultimas series de marvel</Header>
                            <LastSeries listSeries={listLastSeries} limitSeries={limitSeries} setLimitSeries={setLimitSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}