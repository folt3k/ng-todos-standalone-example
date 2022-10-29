import { createStore, select, withProps } from "@ngneat/elf";
import { TodoItem } from "../types";

interface TodosStoreProps {
  todos: TodoItem[];
}

const todosStore = createStore({ name: "todos" }, withProps<TodosStoreProps>({ todos: [] }));

export const todos$ = todosStore.pipe(select((state) => state.todos));

export const addTodo = (body: { content: string }) => {
  todosStore.update((state) => ({
    ...state,
    todos: [
      {
        ...body,
        id: new Date().getTime(),
        done: false,
      },
      ...state.todos,
    ],
  }));
};
