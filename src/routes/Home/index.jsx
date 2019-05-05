import React, { useState } from "react";
import { useStore, useActions } from "easy-peasy";
import { Kanban, Layout } from "components";

const Home = () => {
  const data = useStore(state => state.kanban.data);
  const addItem = useActions(actions => actions.kanban.addNewDefaultItem);
  const [text, set] = useState("");
  const handleAddNewItem = async e => {
    e.preventDefault();
    await addItem(text);
    set("");
  };
  return (
    <Layout>
      <div>
        <h1 style={{ flexGrow: 1 }}>
          Kanban Board <span className="caption">By Zachary Harris</span>
        </h1>

        <form onSubmit={handleAddNewItem}>
          <input value={text} onChange={e => set(e.target.value)} />
          <button
            disabled={text.length === 0 || data.length === 0}
            type="submit"
          >
            Add item
          </button>
        </form>
      </div>
      <Kanban columns={data} />
    </Layout>
  );
};

export default Home;
