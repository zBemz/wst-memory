export default function StorageAnalytics() {
  return (
    <article className="panel chart-panel">
      <h3>Storage Analytics</h3>

      <div className="donut"></div>

      <ul className="legend">
        <li>
          <span></span>
          Images — 1.12 GB
        </li>

        <li>
          <span></span>
          Documents — 0.87 GB
        </li>

        <li>
          <span></span>
          Conversations — 0.31 GB
        </li>

        <li>
          <span></span>
          Other — 0.15 GB
        </li>
      </ul>
    </article>
  );
}