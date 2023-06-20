"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
type Props = {}
const Home = dynamic(
    () => import('app/dashboard/page'),
    { ssr: false }
)
export default function Page({}: Props) {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    const data = [
        {
          name: "Monday",
          No: 4000,
          Yes: 2400,
          amt: 2400
        },
        {
          name: "Tuesday",
          No: 3000,
          Yes: 1398,
          amt: 2210
        },
        {
          name: "Wednesday",
          No: 2000,
          Yes: 9800,
          amt: 2290
        },
        {
          name: "Thursday",
          No: 2780,
          Yes: 3908,
          amt: 2000
        },
        {
          name: "Friday",
          No: 1890,
          Yes: 4800,
          amt: 2181
        },
        {
          name: "Saturday",
          No: 2390,
          Yes: 3800,
          amt: 2500
        },
        {
          name: "Sunday",
          No: 3490,
          Yes: 4300,
          amt: 2100
        }
      ];
  return (
    <div className='z-10 w-screen text-black'>
           <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Yes" fill="#212121" radius={[5,5,0,0]}/>
      <Bar dataKey="No" fill="#82ca9d" radius={[5,5,0,0]}/>
    </BarChart>
    </div>
  )
}