import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import _ from 'lodash';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const picState = useSelector(state => _.get(state,"PictureReducer",[{ AllPicture: [], LikedPicture: [], DisLikedPicture: [], MorePicture: [], UpcomingPicture: []}]));
    console.log(picState);
    const data = {
        labels: ['All picture', 'Liked', 'Dis Liked', 'Loved', 'More'],
        datasets: [
          {
            label: '# swaps',
            data: [_.get(picState,"AllPicture.length",0), _.get(picState,"LikedPicture.length",0), _.get(picState,"DisLikedPicture.length",0), _.get(picState,"MorePicture.length",0), _.get(picState,"UpcomingPicture.length",0)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
    return (
        <div>
          <Doughnut
            data={data}
          />
        </div>
      );
}

export default PieChart