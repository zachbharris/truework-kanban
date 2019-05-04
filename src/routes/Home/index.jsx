import React from "react";
import { useStore, useActions } from "easy-peasy";
import { Kanban, Layout } from "components";

const Home = () => {
  const data = useStore(state => state.kanban.data);
  return (
    <Layout>
      <div>
        <h1 style={{ flexGrow: 1 }}>Kanban Board</h1>
      </div>
      <Kanban columns={data} />
    </Layout>
  );
};

export default Home;
