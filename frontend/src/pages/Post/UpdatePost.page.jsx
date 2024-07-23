import React, { useEffect } from 'react';
import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate, useLoaderData } from "react-router-dom";

function UpdatePostPage() {
  const navigate = useNavigate();
  const post = useLoaderData();
  const form = useForm({
    initialValues: {
      title: post?.title || "",
      category: post?.category || "",
      image: post?.image || "",
      content: post?.content || "",
      id:post.id,
    },
  });

  useEffect(() => {
    if (post) {
      form.setValues({
        title: post.title,
        category: post.category,
        image: post.image,
        content: post.content,
      });
    }
  }, [post]);

  const handleSubmit = async (values) => {
    const res = await axios.post(`${DOMAIN}/api/posts/${post.id}`,values);
    if (res?.data.success) {
        navigate(`/posts/${post.id}`);
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          placeholder="Enter a Title"
          {...form.getInputProps("title")}
        />

        <TextInput
          label="Category"
          placeholder="Enter a Category"
          {...form.getInputProps("category")}
        />
        <TextInput
          label="Image"
          placeholder="Enter an Image"
          {...form.getInputProps("image")}
        />

        <TextInput
          label="Content"
          placeholder="Enter some content"
          {...form.getInputProps("content")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Update</Button>
        </Group>
      </form>
    </Box>
  );
}

export const updatePostLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default UpdatePostPage;
