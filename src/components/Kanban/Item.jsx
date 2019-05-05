import React from "react";
import styled from "styled-components";
import { useStore, useActions } from "easy-peasy";

import Card from "./Card";

const Item = ({ columnId, content, id }) => {
  const data = useStore(state => state.kanban.data);
  const totalColumns = data.length;

  const remItem = useActions(actions => actions.kanban.removeItem);
  const moveItemLeft = useActions(actions => actions.kanban.moveItemLeft);
  const moveItemRight = useActions(actions => actions.kanban.moveItemRight);
  const currentColumnIndex = data.findIndex(col => col.id === columnId);

  return (
    <Card>
      <p>{content}</p>
      <button onClick={() => remItem({ columnId, itemId: id })}>
        <i className="far fa-trash" />
      </button>
      <button
        disabled={currentColumnIndex === 0}
        onClick={() =>
          moveItemLeft({ currentColumnIndex, columnId, itemId: id })
        }
      >
        <i className="far fa-arrow-left" />
      </button>
      <button
        disabled={currentColumnIndex === totalColumns - 1}
        onClick={() =>
          moveItemRight({ currentColumnIndex, columnId, itemId: id })
        }
      >
        <i className="far fa-arrow-right" />
      </button>
    </Card>
  );
};

export default Item;
