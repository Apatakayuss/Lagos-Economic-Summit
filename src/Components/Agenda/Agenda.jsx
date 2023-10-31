// import React, { useState } from 'react';
// import './Agenda.css';


// function AccordionItem({ time, title, content, imageUrl }) {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleAccordion = () => {
//     setIsCollapsed(!isCollapsed);
//   };

  

//   return (
   
//     <div className={`accordion-item ${isCollapsed ? '' : 'active'}`}>
//       <button className="accordion-button" onClick={toggleAccordion}>
//         <div className='infor'>
//         <div className="accordion-time">
//           <p>{time}</p>
//           </div>
//         <div className="accordion-title">{title}</div>
//         </div>
//         <span className={`accordion-icon ${isCollapsed ? '' : 'active'}`}>+</span>
//       </button>
//       {!isCollapsed && (
//         <div className="accordion-content">
//           <img src={imageUrl} alt="Accordion" className="accordion-image" />
//           <p className="accordion-text">{content}</p>
//         </div>
//       )}
//     </div>

//   );
// }

// function Accordion() {
//   const items = [
//     {
//       time: '10:00AM - 10:30AM',
//       title: 'Opening speech',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
//       imageUrl: 'image1.jpg',
//     },
//     {
//       time: '10:30AM - 11:00AM',
//       title: 'Keynote address',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
//       imageUrl: 'image1.jpg',
//     },
//     {
//       time: '11:00AM - 12:00PM',
//       title: 'Closing speech',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
//       imageUrl: 'image1.jpg',
//     },
//   ];

//   return (
//     <>
//      <div className="acc-container">
//     <div className='contain'>
//         <p className="topics">
//             Agenda
//         </p>
//     </div>
//     <div className="summit-theme">
//         <div className="theme">
//             <h4>
//                 Lagos Climate Summit
//             </h4>
//             <p>
//                 21st November 2023
//             </p>
//         </div>

//     </div>
//     <div className="accordion-wrapper">
//     <div className="accordion-container">
//       {items.map((item, index) => (           
//         <AccordionItem
//           key={index}
//           time={item.time}
//           title={item.title}
//           content={item.content}
//           imageUrl={item.imageUrl}
//         />
//       ))}
//     </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Accordion;




















import React from 'react'
import './Agenda.css';

const Agenda = () => {
  return (
    <div className='wrap-agenda'>
      <div className="agenda-container">
        <div className="agenda-top">
          <h5>AGENDA</h5>
        </div>
        <div className="agenda-box-wrapper">

          <div className="agenda-box">
              <div className="agenda-list">
              <p className='time'>10:00 - 11:00</p>
                <p>Arrival, Registration and networking</p>
              </div>

              <div className="agenda-list">
                <p className='time'>10:00 - 11:15</p>
                <p>Opening Remarks and Disseminatopn of projects</p>
              </div>

              <div className="agenda-list">
                <p className='time'>11:20 - 11:30</p>
                <p>Open Innovator Exhibition and Networking</p>
              </div>

              <div className="agenda-list">
                <p className='time'>11:30 - 12:00</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>12:00 - 12:30</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>12:30 - 13:00</p>
                <p>Panel Discussion</p>
              </div>

          
          </div>



          <div className="agenda-box">
          <div className="agenda-list">
                <p className='time'>13:00 - 13:20</p>
                <p>Break-out Session</p>
              </div>

              <div className="agenda-list">
                <p className='time'>13:20 - 13:50</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>13:50 - 14:20</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>14:20 - 14:50</p>
                <p>Panel Discussion</p>
              </div>

              <div className="agenda-list">
                <p className='time'>14:50 - 15:20</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>15:20 - 15:50</p>
                <p>Keynote Address</p>
              </div>

              <div className="agenda-list">
                <p className='time'>15:50 - 16:00</p>
                <p>Refreshment and Networking</p>
              </div>

              <div className="agenda-list">
                <p className='time'>15:50</p>
                <p>Departure</p>
              </div>
          </div>


          </div>

      </div>
    </div>
  )
}

export default Agenda