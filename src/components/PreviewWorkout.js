import arrowIcon from '../icons/arrow.png'
import { Link } from 'react-router-dom';
import '../stylings/workout.css';
import dumbbbellIcon from '../icons/dumbbell.svg';
import stopwatchIcon from '../icons/stopwatch.png';


const PreviewWorkout = () => {
    return ( 
        <div id="preview-workout-page">
            <div className="page-header">
                <a href='#'><img src={arrowIcon} alt='back button'></img></a>
                <h3>View Workout</h3>
            </div>
            <h1>Full Body Workout</h1>
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
                <div className='exercise-body'>
                    <p>Biceps Curls</p>
                    <p>Sets 3</p>
                    <p>Reps 12</p>
                </div>
                <div className='exercise-body'>
                    <p>Biceps Curls</p>
                    <p>Sets 3</p>
                    <p>Reps 12</p>
                </div>
                <div className='exercise-body'>
                    <p>Biceps Curls</p>
                    <p>Sets 3</p>
                    <p>Reps 12</p>
                </div>
            </div>
            <Link to={'/workout'} className='accent-color big-button start-button'>Start Workout</Link>
        </div>
     );
}
 
export default PreviewWorkout;