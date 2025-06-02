import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Files/Login';
import AdminDashboard from './Admin/Dashboard';
import AdminProjects from './Admin/Project';
import AdminIPManagement from './Admin/IPManagement';
import ResearcherDashboard from './Researcher/Dashboard';
import ResearcherProjects from './Researcher/Projects';
import InventionDisclosure from './Researcher/InventionDisclosure';
import ContractsPage from './adminfiles/ContractsPage';
import ReferencePapersPage from './adminfiles/ReferencePapersPage';
import PatentDraftingPage from './adminfiles/PatentDraftingPage';
import ResearchFundingPage from './adminfiles/ResearchFundingPage';
import AssignTeam from './Admin/AssignTeam';
import KnowledgeSharingPage from './adminfiles/KnowledgeSharingPage';
import TechPage from './adminfiles/TechPage';
import AwardsPage from './adminfiles/Awards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="projects-team" replace />} />
          <Route path="projects-team" element={<AdminProjects />} />
          <Route path="ip-assets" element={<AdminIPManagement />} />
          <Route path="contracts" element={<ContractsPage />} />
          <Route path="research-funding" element={<ResearchFundingPage />} />
          <Route path="patent-drafting" element={<PatentDraftingPage />} />
          <Route path="reference-papers" element={<ReferencePapersPage />} />
          <Route path="assign-team" element={<AssignTeam />} />
          <Route path="knowledge-sharing" element={<KnowledgeSharingPage />} />
          <Route path="Tech-share" element={<TechPage/>} />
          <Route path="awards" element={<AwardsPage />} />
        </Route>
        
        {/* Researcher Routes */}
        <Route path="/researcher" element={<ResearcherDashboard />}>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<ResearcherProjects />} />
          <Route path="invention-disclosure" element={<InventionDisclosure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;