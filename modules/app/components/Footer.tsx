export function Footer() {
  return (
    <div>
      <div className="footer">
        <a
          href="https://twitter.com/candle_labs"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter account"
        >
          Twitter
        </a>

        <a
          href="https://instagram.com/candlelabs"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram account"
        >
          Instagram
        </a>

        <a
          title="Join discord"
          href="https://t.me/candleupdates"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our telegram
        </a>
      </div>
      <div style={{ padding: "30px", textAlign: "center" }}>2023 - Candle Labs, Inc.</div>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: 100px;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
