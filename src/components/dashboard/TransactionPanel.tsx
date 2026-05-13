const transactions = [
  "Store Memory",
  "Update Permission",
  "Share Memory",
  "Delete Memory",
];

export default function TransactionPanel() {
  return (
    <article className="panel tx-panel">
      <h3>Recent Transactions</h3>

      {transactions.map((tx) => (
        <div
          className="tx-item"
          key={tx}
        >
          <strong>{tx}</strong>

          <span>Success</span>
        </div>
      ))}
    </article>
  );
}