import arrowIcon from '../icons/arrow.png';
import ActivityHistory from './ActivityHistory';
import "../stylings/home.css";
import QuickActivities from './QuickActivities';


const Home = () => {
    

    return ( 
        <div id="home-page" className='flex-container'>
            <div className="page-header">
                <a href='#'><img src={arrowIcon} alt='back button'></img></a>
                <h3>My Activity</h3>
            </div>
            <ActivityHistory />
            <QuickActivities />
            <div className='section-container todays-plans'>
                <h4>Today's Plans</h4>
                <div className='container'>
                    <div className="exercise-body">
                        <p>Upperbody Workout</p>
                        <p>45 min</p>
                    </div>
                    <div className="exercise-body">
                        <p>Lowerbody Workout</p>
                        <p>30 min</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;