import arrowIcon from '../icons/arrow.png';
import plusIcon from "../icons/nav-icon-5.svg";
import stopwatchIcon from "../icons/stopwatch.png";
import { Link } from 'react-router-dom';
import '../stylings/workout.css';



const NewWorkout = () => {
    return ( 
        <div id="new-workout-page">
            <div className="page-header">
                <a href='#'><img src={arrowIcon} alt='back button'></img></a>
                <h3>New Workout</h3>
            </div>
            <form>
                <div className='form-row'>
                    <label>Name</label>
                    <input type='text' name='name' required></input>
                </div>
                <div className='form-row'>
                    <label>Description</label>
                    <input type='text' name='description'></input>
                </div>
                <div className='form-row'>
                    <label>Privacy</label>
                    <select name='privacy'>
                        <option value={'public'}>Public</option>
                        <option value={'private'}>Private</option>
                        <option value={'friends'}>Friends</option>
                    </select>
                </div>
                <div className='form-row'>
                    <label>Exercises</label>
                    
                </div>
                <div className='create-workout-exercises'>
                    <input type='text' placeholder='Search exercises...'></input>
                    <div className='search-results'>
                        <div className='search-result expanded-result'>
                            <div className='top'>
                                <p>Biceps Curl</p>
                                <button><img src={plusIcon} alt='add exercise to list button' /></button>
                            </div>
                            <div className='bottom'>
                                <div className='column'>
                                    <p>Reps</p>
                                    <p>14</p>
                                </div>
                                <div className='column'>
                                    <p>Sets</p>
                                    <p>3</p>
                                </div>
                                <div className='column'>
                                    <p>Weight</p>
                                    <p>10</p>
                                </div>
                                <div className='column duration'>
                                    <p>Duration</p>
                                    <p>00:15</p>
                                </div>
                            </div>
                        </div>
                        <div className='search-result'>
                            <div className='top'>
                                <p>Biceps Curl</p>
                                <button><img src={plusIcon} alt='add exercise to list button' /></button>
                            </div>
                            <div className='bottom'>
                                <div className='column'>
                                    <p>Reps</p>
                                    <p>14</p>
                                </div>
                                <div className='column'>
                                    <p>Sets</p>
                                    <p>3</p>
                                </div>
                                <div className='column'>
                                    <p>Weight</p>
                                    <p>10</p>
                                </div>
                                <div className='column duration'>
                                    <p>Duration</p>
                                    <p>00:15</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </form>
            <button className='accent-color big-button save-button'>Save Workout</button>
        </div>
     );
}
 
export default NewWorkout;