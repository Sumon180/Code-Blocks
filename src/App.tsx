import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function App() {
  const [isCopied, setIsCopied] = useState(false);

  const exampleCode = `function greet(name: string): string {
    return 'Hello, ' + name + '!';
  }`;
  const language = "typescript";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(exampleCode);
    setIsCopied(true);
    // Reset the "Copied" state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="code-blocks">
        <button className="copy-button" onClick={handleCopyClick}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
        <CodeBlock
          text={exampleCode}
          language={language}
          showLineNumbers={false}
          theme={dracula}
        />
      </div>
    </>
  );
}

export default App;
