import React, {useEffect, useState} from 'react';
import {
    CircularProgress,
    Container,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Post from "../utils/Post";

const theme = createTheme();
const News = () => {

    let [loading, setLoading] = useState(false);
    let [posts, setPosts] = useState([]);

    let url = "https://newsapi.org/v2/top-headlines?pageSize=10&country=ru&apiKey=5673fb35222c4ce3910d081b382cedfa"

    async function fetchData(){
        let response = await fetch(url);
        let json = await response.json();
        setPosts(json.articles);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    },[]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg"
                       sx={
                           {
                               display: 'flex',
                               flexDirection: 'row',
                               flexFlow: 'wrap',
                               alignItems: 'center',
                               justifyContent: 'space-between'
                           }
                       }
            >
                {loading ? <CircularProgress/> : posts.length > 0 ? posts.map((p,i)=><Post key={i} obj={p}/>) : "Posts not found"}
            </Container>
        </ThemeProvider>
    );
};

export default News;