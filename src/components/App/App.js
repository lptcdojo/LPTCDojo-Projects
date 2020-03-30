import React from 'react';
import './App.css';
import { Header } from 'components/Header'
import { ProjectsTable } from 'components/ProjectsTable'

function App() {
  return (
      <div className="app">
        <Header />
        <ProjectsTable />
      </div>
  );
}

export default App;
