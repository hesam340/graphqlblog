import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h3>Error ...</h3>;

  const {
    post: { author, content, coverPhoto, title },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <CardMedia
            image={coverPhoto.url}
            width="100%"
            component="img"
            alt={slug}
            sx={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></Typography>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
