import arrowIcon from '../icons/arrow.png'
import { Link } from 'react-router-dom';
import '../stylings/workout.css';
import dumbbbellIcon from '../icons/dumbbell.svg';
import stopwatchIcon from '../icons/stopwatch.png';
import { useState } from 'react';



const Workout = () => {

    const [expandedExercises, setExpandedExercises] = useState([]);

    const toggleExpandedExercise = (index) => {
        if(expandedExercises.includes(index)){
            setExpandedExercises(expandedExercises=>[...expandedExercises.filter(num => num !== index)])
        }else{
            setExpandedExercises(expandedExercises=>[...expandedExercises, index])
        }
        
    }

    return ( 
        <div id="workout-page">
            <div className="page-header">
                <a href='#'><img src={arrowIcon} alt='back button'></img></a>
                <h3>View Workout</h3>
            </div>
            
            <div className='workout-details'>
                <div>
                    <img src={stopwatchIcon}></img>
                    <p>00:00</p>
                </div>
                <div>
                    <img src={dumbbbellIcon}></img>
                    <p>3/12</p>
                </div>
            </div>
            <h4>Exercises</h4>
            <div className='container'>
                <div className={`workout-exercise-body ${expandedExercises.includes(0) ? 'expanded' : ''}`} onClick={()=>toggleExpandedExercise(0)}>
                    <div className='top'>
                        <p>Biceps Curls</p>
                        <p>0/3</p>
                    </div>
                    <div className='bottom'>
                        <div className='column'>
                            <p className='reps'>Reps</p>
                            <p className='sets'>Sets</p>
                        </div>
                        <div className='column middle-column'>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='column last-column'>
                            <button className='complete-btn'>Complete</button>
                        </div>
                    </div>
                </div>
                <div className={`workout-exercise-body ${expandedExercises.includes(1) ? 'expanded' : ''}`}  onClick={()=>toggleExpandedExercise(1)}>
                    <div className='top'>
                        <p>Biceps Curls</p>
                        <p>0/3</p>
                    </div>
                    <div className='bottom'>
                        <div className='column'>
                            <p className='reps'>Reps</p>
                            <p className='sets'>Sets</p>
                        </div>
                        <div className='column middle-column'>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='column last-column'>
                            <button className='complete-btn'>Complete</button>
                        </div>
                    </div>
                </div>
                <div className={`workout-exercise-body ${expandedExercises.includes(2) ? 'expanded' : ''}`}  onClick={()=>toggleExpandedExercise(2)}>
                    <div className='top'>
                        <p>Biceps Curls</p>
                        <p>0/3</p>
                    </div>
                    <div className='bottom'>
                        <div className='column'>
                            <p className='reps'>Reps</p>
                            <p className='sets'>Sets</p>
                        </div>
                        <div className='column middle-column'>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                            <div className='buttons'>
                                <button>-</button>
                                <div className='counter'>0/3</div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='column last-column'>
                            <button className='complete-btn'>Complete</button>
                        </div>
                    </div>
                </div>
               
               

                <div className='workout-bottom-buttons'>
                    <button>Finish Workout</button>
                    <button>Add Exercise</button>
                    <button>Pause Workout</button>
                    <button>Break</button>
                </div>
            </div>






        </div>
     );
}
 
export default Workout;