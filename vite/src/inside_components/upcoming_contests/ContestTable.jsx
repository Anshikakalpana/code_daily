import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function ContestTable() {
  const [contests, setContests] = useState([]);
  const [platform, setPlatform] = useState('');
  const [duration, setDuration] = useState('');
  const [starttime, setStarttime] = useState('');

  const categories = ['codeforces', 'codechef', 'leetcode'];
  const durations = [
    { label: 'Any', value: '' },
    { label: '1 Hour', value: 1 },
    { label: '2 Hours', value: 2 },
  ];
  const starttimes = ['2 PM', '8 PM'];

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/contests`, {
          params: {
            ...(platform && { resource__name: platform }),
            ...(duration && { duration__lt: duration * 3600 }),
          },
        });

        let filtered = res.data;

        if (starttime) {
          filtered = filtered.filter((contest) => { 
            const startHour = new Date(contest.start).getHours();
            if (starttime === '2 PM') return startHour === 14;
            if (starttime === '8 PM') return startHour === 20;
            return true;
          });
        }

        setContests(filtered);
      } catch (err) {
        console.error(err);
        setContests([]); 
      }
    };

    fetchContests();
  }, [platform, duration, starttime]);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br text-white px-6 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-200 mb-10">
        🌐 Upcoming Programming Contests
      </h1>

      <div className="flex gap-5 mb-10">
        <select onChange={(e) => setPlatform(e.target.value)} className="w-100 h-10 mx-12 text-amber-50 border-2 bg-gray-800">
          <option value="">Select Platform</option>
          {categories.map((item, index) => (
            <option key={index} value={item}>category- {item}</option>
          ))}
        </select>

        <select onChange={(e) => setDuration(e.target.value)} className="w-100 h-10 mx-10 text-amber-50 border-2 bg-gray-800">
          {durations.map((item, index) => (
            <option key={index} value={item.value}>duration- {item.label}</option>
          ))}
        </select>

        <select onChange={(e) => setStarttime(e.target.value)} className="w-100 h-10 mx-10 text-amber-50 border-2 bg-gray-800">
          <option value="">Select Start Time</option>
          {starttimes.map((item, index) => (
            <option key={index} value={item}>start- {item}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto bg-white/10 rounded-xl border border-white/20 shadow-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="px-4 py-3">Logo</th>
              <th className="px-4 py-3">Contest</th>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Start Time</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {contests.length > 0 ? (
              contests.map((c, i) => (
                <tr key={i} className="hover:bg-white/10 transition-all">
                  <td className="px-4 py-3">
                    <img src={`https://clist.by/favicon.png`} alt="icon" className="w-6 h-6" />
                  </td>
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3">{c.platform}</td>
                  <td className="px-4 py-3">{new Date(c.start).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    {Math.floor(c.duration / 3600)}h {(c.duration % 3600) / 60}m
                  </td>
                  <td className="px-4 py-3">
                    <a href={c.link} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
                      Join
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-5 text-center text-red-300" colSpan={6}>
                  No contests found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
