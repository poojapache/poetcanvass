import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function MostPopularPoemChart() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    setPoems([
      { title: "Nightingale", likes: 150, views: 250 },
      { title: "The Road Not Taken", likes: 250, views: 120 },
      { title: "The Raven", likes: 180, views: 100 },
      { title: "The Waste Land", likes: 200, views:20 }
    ]);
  }, []);

  return (
    <div className='analysis-chart'>
      <h1>Poem Popularity Chart</h1>
      <BarChart width={600} height={250} data={poems}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" fill="#8884d8" />
        <Bar dataKey="views" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
