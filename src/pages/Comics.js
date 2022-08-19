import { useState } from "react";
import {Grid, Header} from 'semantic-ui-react';
import Container from '../components/Container'
import ListComics from "../components/ListComics/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
    const [renderComics, setRenderComics] = useState(10);
    const listLastComics = useFetch(
        `${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`
    );
    // console.log('Comics desde Comics.js: ',listLastComics);
    return(
        <div className="comics-page">
            <div id="slide-comics-image"/>
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Cómics</Header>
                        <ListComics listLastComics={listLastComics} renderComics={renderComics} setRenderComics={setRenderComics}/>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );
}