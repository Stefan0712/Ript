import cycling from '../icons/cycling.png';
import swimming from '../icons/swimming.png';
import stretching from '../icons/stretching.png';
import weight from '../icons/weight-lifting.png';
import rope from '../icons/rope-jumping.png';
import walking from '../icons/walking.png';
import gymnastics from '../icons/gymnastics.png';
import dancing from '../icons/dancing.png';
import yoga from '../icons/yoga.png';
import treadmill from '../icons/treadmill.png';
import indoor from '../icons/indoor-fitness.png';
import running from '../icons/running.png';
import { useState } from 'react';





const QuickActivities = () => {

    const [buttons, setButtons] = useState([
        { name: "Cycling", icon: cycling, exerciseId: '' },
        { name: "Swimming", icon: swimming, exerciseId: '' },
        { name: "Stretching", icon: stretching, exerciseId: '' },
        { name: "Weight", icon: weight, exerciseId: '' },
        { name: "Rope", icon: rope, exerciseId: '' },
        { name: "Walking", icon: walking, exerciseId: '' },
        { name: "Gymnastics", icon: gymnastics, exerciseId: '' },
        { name: "Dancing", icon: dancing, exerciseId: '' },
        { name: "Yoga", icon: yoga, exerciseId: '' },
        { name: "Treadmill", icon: treadmill, exerciseId: '' },
        { name: "Indoor", icon: indoor, exerciseId: '' },
        { name: "Running", icon: running, exerciseId: '' }
      ])






    return ( 
        <div className='section-container quick-activities'>
                <h4>Quick Activities</h4>
                <div className='container'>
                    {buttons.map((item, index)=>(
                        <a href='#' className='quick-activity-button' key={"quick-activity-"+index}>
                            <img src={item.icon} alt={`${item.name} button`}></img>
                        </a>
                    ))}
                </div>
            </div>
     );
}
 
export default QuickActivities;