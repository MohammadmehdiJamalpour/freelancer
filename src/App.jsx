import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
import "./index.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="container xl:max-w-Screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
