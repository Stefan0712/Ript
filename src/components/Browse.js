import '../stylings/browse.css';
import arrowIcon from '../icons/arrow.png'
import { Link } from 'react-router-dom';




const Browse = () => {
    return ( 
        <div id="browse-page">
            <div className="page-header">
                <a href='#'><img src={arrowIcon} alt='back button'></img></a>
                <h3>Browse</h3>
            </div>
            <h4>Browse Exercises</h4>
            <div className="browse-container">
                <Link to={'/view-workout'} className="exercise-body">
                    <p className="name">Biceps Curls</p>
                    <p className="duration">5 min</p>
                </Link>
                <div className="exercise-body">
                    <p className="name">Skull crushers</p>
                    <p className="duration">5 min</p>
                </div>
                <div className="exercise-body">
                    <p className="name">Squats</p>
                    <p className="duration">5 min</p>
                </div>
                <div className="see-more-button">
                    <p>See more</p>
                </div>
            </div>
            <h4>Browse Workouts</h4>
            <div className="browse-container">
                <div className="workout-body">
                    <p className="name">Upper body</p>
                    <p className="exercises">14 exercises</p>
                    <p className="duration">45 min</p>
                </div>
                <div className="workout-body">
                    <p className="name">Core</p>
                    <p className="exercises">14 exercises</p>
                    <p className="duration">45 min</p>
                </div>
                <div className="workout-body">
                    <p className="name">Leg Day</p>
                    <p className="exercises">14 exercises</p>
                    <p className="duration">45 min</p>
                </div>
                <div className="see-more-button">
                    <p>See more</p>
                </div>
            </div>
        </div>
     );
}
 
export default Browse;