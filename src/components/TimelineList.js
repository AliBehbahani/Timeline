// import {
//   Timeline,
//   Content,
//   ContentYear,
//   ContentBody,
//   Description,
// } from "vertical-timeline-component-react";

// const Main = () => (
//   <Timeline>
//     <Content>
//       <ContentYear
//         startMonth="12"
//         monthType="text"
//         startDay="24"
//         startYear="2016"
//         currentYear
//       />
//       <ContentBody title="Amazing Title">
//         <Description
//           text="I'm an amazing event"
//           optional="I'm an amazing optional text"
//         />
//         <Description
//           text="I'm an amazing event"
//           optional="I'm another amazing optional text"
//         />
//         <Description text="I'm an amazing event" />
//       </ContentBody>
//     </Content>
//     <Content>...</Content>
//   </Timeline>
// );
// export default Main;

import timelineData from "../data";
import TimelineItem from "./TimelineItems";
const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
