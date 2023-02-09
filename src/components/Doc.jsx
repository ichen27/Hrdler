/*
import React from 'react'
import '../App.css'

import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  saveDocument = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    // Send the raw content to the backend API using an HTTP client library like axios
    axios.post('/api/documents', rawContent)
      .then(response => console.log('Document saved!'))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <button onClick={this.saveDocument}>Save</button>
      </div>
    );
  }
}
*/