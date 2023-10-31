import Resume from '../../Assets/lcsconcept.pdf'
import './Concept.css'

const Button = () => {
    const openResume = () => {
      window.open(Resume, '_blank');
    };
    return (
      <div>
          <button onClick={openResume} style={{border: 'none', borderRadius: '5px',
           backgroundColor:'#0f3879',
           padding: '10px 20px',
           color: 'white'

        }} >
            Download Concept Note
          </button>
      </div>
    )
  }
  
  export default Button