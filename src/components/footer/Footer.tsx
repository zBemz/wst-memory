export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a
            className="brand footer-brand"
            href="#hero"
          >
            <span
              className="brand-mark"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 4L45 12V28L32 36L19 28V12L32 4Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <path
                  d="M32 36V60"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <path
                  d="M19 28L32 36L45 28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <circle
                  cx="32"
                  cy="32"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </span>

            <span>
              <strong>
                WST-MEMORY
              </strong>

              <small>
                WAVE SYNAPTIC
                TRANSFER
              </small>
            </span>
          </a>

          <p className="footer-copy">
            AI-native decentralized
            memory protocol built on
            Walrus, Sui, Tatum, and
            MCP.
          </p>
        </div>

        <div>
          <h3>Links</h3>

          <a href="#features">
            GitHub
          </a>

          <a href="#features">
            Walrus
          </a>

          <a href="#features">
            Sui
          </a>

          <a href="#features">
            Tatum
          </a>
        </div>

        <div>
          <h3>Resources</h3>

          <a href="#architecture">
            Documentation
          </a>

          <a href="#future">
            Privacy Policy
          </a>

          <a href="#future">
            Terms of Service
          </a>
        </div>

        <div>
          <h3>Stay Updated</h3>

          <form className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button
              className="btn btn-primary"
              type="button"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="container copyright">
        © 2025 WST-Memory. All rights
        reserved.
      </div>
    </footer>
  );
}