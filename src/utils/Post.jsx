import React from 'react';
import {Avatar, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Post = ({obj}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                        {obj.source?.name}
                    </Avatar>
                }
                title={obj.title}
                subheader={Date(obj.publishedAt).split(' ').slice(1, 4).join(' ')}
            />
            <CardMedia
                component="img"
                height="180"
                image={obj.urlToImage}
                alt={obj.title}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    <Link to={obj.url}>
                        {obj.description.slice(0, 80)+"..."}
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Post;