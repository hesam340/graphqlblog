import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";

import { Avatar, Container, Grid, Typography } from "@mui/material";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h3>Error ...</h3>;
  const {
    author: { avatar, name, field, description, posts },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  coverPhoto={post.coverPhoto}
                  slug={post.slug}
                  title={post.title}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
