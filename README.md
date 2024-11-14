# Stability Blockchain Message Submission dApp

A simple decentralized application (dApp) and React frontend that allows users to submit messages to the Stability Blockchain using our experimental [ZKT RPC](https://docs.stble.io/developers/zkt), with the option to post to either the Testnet or Mainnet. The application is built in React and provides real-time feedback, including a link to view the transaction in the Stability block explorer.

## Features

- **Submit Messages to Blockchain**: Allows users to post a message to either Stability's Testnet or Mainnet.
- **Transaction Confirmation**: Displays a confirmation message with a link to the transaction on Stability’s block explorer.
- **Dynamic Network Selection**: Users can choose between Testnet and Mainnet, adjusting the RPC and block explorer URL accordingly.

## Demo

[Live Demo Link 🚀](https://stabilityprotocol.github.io/stability-publisher-dapp/)

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Enter a message in the input field.
2. Select the desired network (Testnet or Mainnet) from the dropdown menu.
3. Click **Submit Message**.
4. Once submitted, a link to the transaction will appear, allowing you to view it on Stability's block explorer.

## Project Structure

```
src
├── components
│   └── BlockchainSubmission.js  # Main component for blockchain submission functionality
├── App.js                        # Main app component rendering the BlockchainSubmission component
├── index.js                      # Entry point
└── index.css                     # Styling for the app
```

## Contributing

Contributions are welcome! If you’d like to add new features, improve existing functionality, or report bugs, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using the **Stability Blockchain Message Submission dApp**! Feel free to reach out with any questions or feedback.
