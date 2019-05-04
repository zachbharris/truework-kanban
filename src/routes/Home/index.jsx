import React from "react";
import { useStore } from "easy-peasy";
import { Kanban, Layout } from "components";

const Home = () => {
  const data = useStore(state => state.kanban);
  return (
    <Layout>
      <h1 style={{ flexGrow: 1 }}>Kanban Board</h1>
      <Kanban columns={data} />
    </Layout>
  );
};

export default Home;
