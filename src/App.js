import { RouterProvider } from "react-router-dom";
import useRoutes from "./hooks/useRoutes";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";

function App() {
  const router = useRoutes()
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
