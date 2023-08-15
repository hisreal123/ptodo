import { QueryClient, QueryClientProvider } from "react-query";
import { User } from "./views/Home";
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import Details from "./views/Details";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux'
import store from "./redux/store";
import Nav from "./components/Misc/Nav";


const queryClient = new QueryClient();

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<User />} />
//       <Route path="/details" element={<Details />} />
//     </Routes>
//   )
// )


export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Nav />
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Provider>
      </QueryClientProvider>
      <ToastContainer />
    </BrowserRouter >
  );
}
