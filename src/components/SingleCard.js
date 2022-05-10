import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const SingleCard = ({ heading, tags, video }) => {
  return (
    <Card
      style={{
        padding: "15px",
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia component="video" disable-autoPlay controls src={video} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tags[0]} {tags[1]} {tags[2]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleCard;
