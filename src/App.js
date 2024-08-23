import './App.css';
import HomePage from './components/HomePage';
import SkillList from './components/SkillList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
        <SkillList />
      </header>
    </div>
  );
}

export default App;
