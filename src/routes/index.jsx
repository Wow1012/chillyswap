import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import NFTPage from "../pages/nft";
import TeamPage from "../pages/team";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route  oute path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/nfts" element={<NFTPage />}></Route>
        <Route path="/team" element={<TeamPage />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes;