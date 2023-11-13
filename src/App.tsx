import { useState } from "react";
import "./App.css";

function App() {
  const exampleCode = `function greet(name: string): string {
    return 'Hello, ' + name + '!';
  }`;

  return (
    <>
      <h2>Your React Component</h2>
      <CodeBox code={exampleCode} />
    </>
  );
}

interface CodeBoxProps {
  code: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    // Reset the "Copied" state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="code-box">
      <button className="copy-button" onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default App;
