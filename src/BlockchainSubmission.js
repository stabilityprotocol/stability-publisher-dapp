import React, { useState } from "react";

function BlockchainSubmission() {
  const [message, setMessage] = useState("");
  const [network, setNetwork] = useState("testnet"); // Default to Testnet
  const [response, setResponse] = useState("Waiting for submission...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse("Submitting your message to the blockchain... Please wait.");

    // Determine the URL and block explorer based on the selected network
    const url =
      network === "mainnet"
        ? "https://rpc.stabilityprotocol.com/zkt/try-it-out"
        : "https://rpc.testnet.stabilityprotocol.com/zkt/try-it-out";

    const blockExplorerBaseUrl =
      network === "mainnet"
        ? "https://stability.blockscout.com/tx/"
        : "https://stability-testnet.blockscout.com/tx/";

    const data = { arguments: message };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const responseData = await response.json();
      const txHash = responseData.hash;
      const blockExplorerUrl = `${blockExplorerBaseUrl}${txHash}`;

      setResponse(
        <p>
          Success! Your message has been posted to the blockchain. <br />
          View the transaction at: <br />
          <code>{blockExplorerUrl}</code> <br />
        </p>
      );
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while posting your message.");
    }
  };

  return (
    <div className="outer-container">
      <div className="app-container">
        <h2>Submit a Message to STABILITY Blockchain</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Enter your message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            required
          />

          <label htmlFor="network" style={{ marginTop: "10px" }}>
            Select Network:
          </label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="testnet">Testnet - ZKT</option>
            <option value="mainnet">Mainnet - ZKT</option>
          </select>

          <button type="submit" style={{ marginTop: "20px" }}>
            Submit Message
          </button>
        </form>
        <div className="response">{response}</div>
      </div>
    </div>
  );
}

export default BlockchainSubmission;
