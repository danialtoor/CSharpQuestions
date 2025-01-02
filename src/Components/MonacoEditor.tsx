import React from 'react';
import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void; // Ensure onChange expects only string
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  return (
    <MonacoEditor
      height="400px"
      language="csharp"
      value={value}
      onChange={(value) => onChange(value || '')} // Default to an empty string if undefined
      theme="vs-dark"
    />
  );
};
//adding a comment
export default CodeEditor;
