import Resume from '../../Assets/test.pdf'
import './Concept.css'

const Button = () => {
    const openResume = () => {
      window.open(Resume, '_blank');
    };
    return (
      <div>
          <button onClick={openResume} >
             Concept Note
          </button>
      </div>
    )
  }
  
  export default Button