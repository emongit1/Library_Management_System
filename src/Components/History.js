// import React, { useState } from 'react';
// import Sidenav from './Sidenav';
// import { Box } from '@mui/material';
// import records from './data.json';

// const History = () => {
//   const [data, setData] = useState(records);

//   return (
//     <div>
//       {/* <Sidenav /> */}
//       {data.map((item) => (
//         <>
//         <h1 >{item.description}</h1>
//         <h2><strong>{item.price}</strong></h2>
//         </>
//       ))}
//     </div>
//   );
// };

// export default History;
import React, { useState } from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import records from './data.json';
import { useParams } from 'react-router-dom';
import MCard from './MCard';

const History = () => {
  const {description} = useParams();
  const book = records.find(item=>item.description)

  return (
    <div>
       <MCard item={book}></MCard>
    </div>
  );
};

export default History;


