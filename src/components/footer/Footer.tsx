export default function Footer() {
  return (
    <footer className="section">

      <div className="container">

        <div className="section-box">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "40px",
            }}
          >

            <div>
              <h2>WST-MEMORY</h2>

              <p
                style={{
                  marginTop: 20,
                  lineHeight: 1.8,
                  color: "#64748b",
                }}
              >
                AI-native decentralized memory protocol
                powered by Walrus and Sui.
              </p>
            </div>

            <div>
              <h4>Product</h4>
              <p>Features</p>
              <p>Dashboard</p>
              <p>Upload</p>
            </div>

            <div>
              <h4>Resources</h4>
              <p>Documentation</p>
              <p>Guides</p>
              <p>Blog</p>
            </div>

            <div>
              <h4>Stay Updated</h4>

              <input
                placeholder="Enter your email"
                style={{
                  marginTop: 16,
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}