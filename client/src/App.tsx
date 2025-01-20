import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";


export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";
function App() {
  return (
    <Stack h="100vh">
      {/* navbar */}
      <Navbar />
      <Container>
        {/* todofrom */}
        <TodoForm />
        {/* todolist */}
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
