import { action, thunk } from "easy-peasy";
import randomstring from "randomstring";

const initialData = [
  {
    id: randomstring.generate(),
    title: "todo",
    items: [
      { content: "Kanban board by Zachary Harris" },
      { content: "Kanban board by Zachary Harris" }
    ]
  },
  {
    id: randomstring.generate(),
    title: "in progress",
    items: []
  },
  {
    id: randomstring.generate(),
    title: "completed",
    items: []
  }
];

export default {
  kanban: {
    data: initialData,
    addColumn: action((state, payload) => {
      const newColumn = {
        id: randomstring.generate(),
        title: payload,
        items: []
      };
      return { ...state, data: [...state.data, newColumn] };
    }),
    removeColumn: action((state, payload) => {
      // the payload should only contain the index of the column you are trying to remove
      return { ...state, data: state.data.filter(col => col.id !== payload) };
    })
  }
};
