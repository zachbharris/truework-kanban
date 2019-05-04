import React from "react";
import { Kanban, Layout } from "components";

const initialData = [
  {
    title: "todo",
    items: [
      { content: "I am the first item" },
      { content: "I am the second item" },
      { content: "I am the third item" }
    ]
  }
];

const Home = () => (
  <Layout>
    <Kanban columns={initialData} />
  </Layout>
);

export default Home;
