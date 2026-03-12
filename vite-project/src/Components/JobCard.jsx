import React from 'react';
import { Bookmark } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-4xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-between h-full min-h-90 border border-white/20">
      <div>
        {/* Top Row: Logo & Save */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shadow-sm overflow-hidden">
            <img 
              src={job.logo} 
              alt={job.company} 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=random`; }}
            />
          </div>
          <button className="flex items-center gap-1.5 text-gray-400 hover:text-black transition-colors group">
            <span className={`text-[13px] font-bold tracking-tight ${job.isSaved ? 'text-black' : ''}`}>
              {job.isSaved ? 'Saved' : 'Save'}
            </span>
            <Bookmark 
              size={18} 
              strokeWidth={2.5}
              fill={job.isSaved ? "black" : "none"} 
              className={job.isSaved ? "text-black" : "group-hover:text-black"} 
            />
          </button>
        </div>

        {/* Info Section */}
        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[14px] text-gray-900 tracking-tight">{job.company}</span>
            <span className="text-[13px] text-gray-400 font-semibold">{job.postedAt}</span>
          </div>
          <h2 className="text-[28px] font-bold tracking-tight text-gray-900 leading-[1.1]">
            {job.title}
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {job.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-2 bg-[#F6F6F6] text-[#717171] rounded-xl text-[13px] font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[20px] font-bold text-gray-900 leading-none mb-1">{job.salary}</p>
          <p className="text-[13px] font-bold text-gray-400">{job.location}</p>
        </div>
        <button className="bg-black text-white px-7 py-3 rounded-2xl text-[14px] font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/5">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;