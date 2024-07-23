import { Link, useLoaderData} from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import React from 'react';
import { Button, Container, Grid, Title, Text, Image, Stack} from '@mantine/core';

const getChild = (height) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 360;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);


function PostDetailsPage() {
  const post = useLoaderData();
  return (
    <>
      <Container size="sm">
        <Grid gutter="lg">
          <Grid.Col span={4}>
            <Stack spacing="md">
              <Text size="md">Author: {post.author}</Text>
              <Title order={1}>{post.title}</Title>
              <Text size="sm">Category: {post.category}</Text>
              <Text>{post.content}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <Image src={post.image} h={600} fit="contain"/>
          </Grid.Col>
        </Grid>
        <Stack spacing="sm" align="start" justify="start" mt="lg">
          <Button size="sm">
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          </Button>
          <Button size="sm">
            <Link to="/posts">Back to Posts</Link>
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const postRes = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  const post = postRes.data;

  return post;
};

export default PostDetailsPage;
