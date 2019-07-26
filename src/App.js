import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import SimpleTable from './components/SimpleTable';
import EditableTable from './components/EditableTable';
import BasicTreeData from './components/TreeTable';
import IntegrationAutosuggest from './components/AutoCompleteSearch';
import AutoSuggestBasicExample from './components/AutoSuggestBasicExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          testing
        </p>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Paper>
          <IntegrationAutosuggest />
        </Paper>
        <div>
          <AutoSuggestBasicExample /> 
        </div>
        <div>
          <SimpleTable />
        </div>
        <div>
          <EditableTable />
        </div>
        <div>
          <BasicTreeData />
        </div>

      </header>
    </div>
  );
}

export default App;
