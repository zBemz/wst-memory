export default function DashboardPreview() {
  return (
    <section
      className="section"
      id="dashboard"
    >
      <div className="container">

        <div className="dashboard-shell">

          <aside className="sidebar">

            <div className="sidebar-brand">
              WST Dashboard
            </div>

            <a className="side-link active">
              Dashboard
            </a>

            <a className="side-link">
              Memories
            </a>

            <a className="side-link">
              Upload
            </a>

            <a className="side-link">
              AI Assistant
            </a>

          </aside>

          <div className="dashboard-main">

            <div className="stats-grid">

              <div className="stat-card">
                <span>Total Memories</span>
                <strong>128</strong>
              </div>

              <div className="stat-card">
                <span>Storage Used</span>
                <strong>2.45 GB</strong>
              </div>

              <div className="stat-card">
                <span>Walrus Blobs</span>
                <strong>342</strong>
              </div>

              <div className="stat-card">
                <span>Transactions</span>
                <strong>276</strong>
              </div>

            </div>

            <div className="dashboard-grid">

              <div className="panel" />
              <div className="panel" />
              <div className="panel" />
              <div className="panel" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}