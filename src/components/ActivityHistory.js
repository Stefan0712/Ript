const ActivityHistory = () => {
    return ( 
            <div className='activity-history section-container'>
                <div className='activity-calendar'>
                    <div className='day-container'>
                        <div className='day-number'>1</div>
                        <div className='day-of-week'>Mon</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>2</div>
                        <div className='day-of-week'>Tue</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>3</div>
                        <div className='day-of-week'>Wed</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>4</div>
                        <div className='day-of-week'>Thu</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>5</div>
                        <div className='day-of-week'>Fri</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>6</div>
                        <div className='day-of-week'>Sat</div>
                    </div>
                    <div className='day-container'>
                        <div className='day-number'>7</div>
                        <div className='day-of-week'>Sun</div>
                    </div>
                </div>
                <div className='history'>
                    <div className="exercise-body">
                        <p>Upperbody Workout</p>
                        <p>30 min</p>
                    </div>
                    <div className="exercise-body">
                        <p>Rope Jumping</p>
                        <p>30 min</p>
                    </div>
                    <div className="exercise-body">
                        <p>Running</p>
                        <p>30 min</p>
                    </div>
                </div>
            </div>
     );
}
 
export default ActivityHistory;