import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function CreatePost() {
  const [value, setValue] = React.useState(
    "Hello Markdown! `Tab` key uses default behavior"
  );
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        commands={[commands.bold]}
        extraCommands={[commands.codeEdit,commands.codePreview]}
        preview="edit"
      />
    </div>
  );
}
