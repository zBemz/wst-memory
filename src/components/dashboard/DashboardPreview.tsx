import Reveal from "@/components/ui/Reveal";

import StatsGrid from "./StatsGrid";
import RecentMemories from "./RecentMemories";
import StorageAnalytics from "./StorageAnalytics";
import TransactionPanel from "./TransactionPanel";
import AssistantPanel from "./AssistantPanel";

export default function DashboardPreview() {
  return (
    <section
      className="section dashboard"
      id="dashboard"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div className="eyebrow">
            Futuristic Dashboard
          </div>

          <h2>
            AI-Native Decentralized
            Operating System
          </h2>
        </Reveal>

        <Reveal className="dashboard-shell">
          <aside className="sidebar">
            <div className="sidebar-brand">
              WST-MEMORY
            </div>

            <a
              className="side-link active"
              href="#dashboard"
            >
              Dashboard
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              Memories
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              Upload
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              AI Assistant
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              Activity
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              Analytics
            </a>

            <a
              className="side-link"
              href="#dashboard"
            >
              Settings
            </a>
          </aside>

          <div className="dashboard-main">
            <StatsGrid />

            <div className="dashboard-grid">
              <RecentMemories />

              <StorageAnalytics />

              <TransactionPanel />

              <AssistantPanel />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}