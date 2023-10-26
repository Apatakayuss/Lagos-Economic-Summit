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
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>
          </div>



          <div className="agenda-box">
          <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>

              <div className="agenda-list">
                <p>8:00am</p>
                <p>Opening Speech</p>
              </div>
          </div>


          </div>

      </div>
    </div>
  )
}

export default Agenda