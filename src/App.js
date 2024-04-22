import './App.css';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Workout from './components/Workout';
import EditWorkout from './components/EditWorkout'
import PreviewWorkout from './components/PreviewWorkout'
import NewExercise from './components/NewExercise'
import EditExercise from './components/EditExercise'
import Stopwatch from './components/Stopwatch'
import Settings from './components/Settings'
import Browse from './components/Browse'
import NewWorkout from './components/NewWorkout'





function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='/new-workout' element={<NewWorkout />} />
            <Route path='/edit-workout' element={<EditWorkout />} />
            <Route path='/view-workout' element={<PreviewWorkout />} />
            <Route path='/new-exercise' element={<NewExercise />} />
            <Route path='/edit-exercise' element={<EditExercise />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
        <MobileNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
