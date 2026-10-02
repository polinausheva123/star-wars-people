import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RootRedirect } from "./components/RootRedirect";
import { DataPage } from "./pages/DataPage";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/table"
            element={
              <ProtectedRoute>
                <DataPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
