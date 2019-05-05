import { action } from "easy-peasy";
import randomstring from "randomstring";

const initialData = [
  {
    id: randomstring.generate(),
    title: "todo",
    items: [
      {
        id: randomstring.generate(),
        content: "Kanban board by Zachary Harris"
      }
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
      state.data.push(newColumn);
    }),
    removeColumn: action((state, payload) => {
      // the payload should only contain the index of the column you are trying to remove
      return { ...state, data: state.data.filter(col => col.id !== payload) };
    }),
    addItem: action((state, payload) => {
      // payload expects new item content and column id
      const { columnId, content } = payload;
      const newItem = { id: randomstring.generate(), content };
      state.data.find(col => col.id === columnId).items.push(newItem);
    }),
    addNewDefaultItem: action((state, payload) => {
      // payload expects new item content and column id
      const newItem = { id: randomstring.generate(), content: payload };
      state.data[0].items.push(newItem);
    }),
    removeItem: action((state, payload) => {
      const { columnId, itemId } = payload;
      const colIndex = state.data.findIndex(col => col.id === columnId);
      const updatedItems = state.data
        .find(col => col.id === columnId)
        .items.filter(item => item.id !== itemId);

      state.data[colIndex].items = updatedItems;
    }),
    moveItemLeft: action((state, payload) => {
      const { columnId, currentColumnIndex, itemId } = payload;
      const item = state.data
        .find(col => col.id === columnId)
        .items.filter(item => item.id === itemId);

      state.data[currentColumnIndex - 1].items.push(...item);
      state.data[currentColumnIndex].items = state.data
        .find(col => col.id === columnId)
        .items.filter(item => item.id !== itemId);
    }),
    moveItemRight: action((state, payload) => {
      const { columnId, currentColumnIndex, itemId } = payload;
      const item = state.data
        .find(col => col.id === columnId)
        .items.filter(item => item.id === itemId);

      state.data[currentColumnIndex + 1].items.push(...item);
      state.data[currentColumnIndex].items = state.data
        .find(col => col.id === columnId)
        .items.filter(item => item.id !== itemId);
    })
  }
};
