import arrowIcon from '../icons/arrow.png';
import '../stylings/workout.css';


const NewExercise = () => {
    return ( 
        <div id="new-exercise-page">
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
                    <label>Duration</label>
                    <input type='text' name='duration'></input>
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
                    <label>Fields</label>
                    <div className="exercise-fields-inputs">
                        <div className="input-row">
                            <div className='input-column'>
                                <label>Field Name</label>
                                <input type="text" name='fieldName'></input>
                            </div>
                            <div className='input-column'>
                                <br/>
                                <button className='accent-color add-field-btn'>Add Field</button>
                            </div>
                            
                        </div>
                        <div className="input-row">
                            <div className='input-column'>
                                <label>Unit</label>
                                <input type="text" name='unit'></input>
                            </div>
                            <div className="input-column">
                                <label>Field type</label>
                                <select name="unitType">
                                    <option value={'number'}>Number</option>
                                    <option value={'string'}>Text</option>
                                </select>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </form>
            <button className='accent-color big-button save-button'>Create Exercise</button>
        </div>
     );
}
 
export default NewExercise;