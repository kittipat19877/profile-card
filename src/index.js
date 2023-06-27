import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <Skilllist />
        </div>
      </div>
    </>
  )
}
function Skilllist() {
  return(
    <div className='skill-list'>
      <Skill skill="Unity" emoji="💀" color="grey" />
      <Skill skill="PHP" emoji="🔥" color="grey" />
      <Skill skill="REACT" emoji="💀" color="grey" />
      <Skill skill="MySQL" emoji="🔥" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColo: props.color }}> 
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
    <h1>Porsche</h1>
    <p>
      มาเฟียชอบสตรีทฟู้ดอินเดีย 🏴‍☠️
    </p>
    </div>
  );
}

function Avatar() {
  return <img className='avata' src="pc.jpg" alt='My Avatar'/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);