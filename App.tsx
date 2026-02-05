
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Camera, 
  TrendingUp, 
  Gauge, 
  Mountain, 
  ChevronRight,
  Sunrise,
  Trophy
} from 'lucide-react';
import { MOCK_PROFILE } from './constants';
import { Badge, Resort } from './types';

// Helper component for the header
const Header: React.FC = () => (
  <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-4 bg-background-dark/80 backdrop-blur-md">
    <button className="p-2 transition-colors rounded-full hover:bg-white/10 active:scale-95">
      <ArrowLeft className="w-6 h-6" />
    </button>
    <h1 className="text-xl font-bold">Profile</h1>
    <button className="text-sm font-bold text-primary hover:text-blue-400">
      Edit
    </button>
  </header>
);

// Circular Progress Component
const CircularProgress: React.FC<{ percentage: number }> = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-white/10"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export default function App() {
  const [profile] = useState(MOCK_PROFILE);

  return (
    <div className="max-w-md mx-auto min-h-screen pb-12 flex flex-col bg-background-dark">
      <Header />

      {/* Profile Section */}
      <section className="flex flex-col items-center py-6">
        <div className="relative">
          <div className="w-32 h-32 p-1 rounded-full border-2 border-primary/40">
            <div 
              className="w-full h-full rounded-full bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${profile.avatarUrl})` }}
            />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full border-4 border-background-dark text-white hover:bg-blue-600 transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight">{profile.name}</h2>
          <div className="flex items-center justify-center gap-1.5 mt-1 text-slate-400">
            {profile.isVerified && <CheckCircle className="w-4 h-4 text-primary" />}
            <span className="text-sm font-medium">{profile.status}</span>
          </div>
        </div>
      </section>

      {/* Main Stats Area */}
      <div className="px-5 space-y-6">
        
        {/* Season Goal Card */}
        <div className="p-6 rounded-2xl bg-surface-dark border border-white/5 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Season Goal</h3>
            <button className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 text-slate-400">Details</button>
          </div>
          
          <div className="flex items-center gap-6">
            <CircularProgress percentage={profile.seasonGoal.percentage} />
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Vertical Drop</p>
                <p className="text-xl font-bold">
                  {profile.seasonGoal.current}
                  <span className="ml-1 text-sm font-normal text-slate-500">/ {profile.seasonGoal.target} m</span>
                </p>
              </div>
              <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-primary rounded-full"
                  style={{ width: `${profile.seasonGoal.percentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {profile.seasonGoal.remainingDays} days remaining this season
              </p>
            </div>
          </div>
        </div>

        {/* Small Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 h-32 flex flex-col justify-between rounded-2xl bg-surface-dark border border-white/5 relative overflow-hidden group">
             <Trophy className="absolute -top-1 -right-1 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
             <p className="text-sm font-medium text-slate-500">Total Vertical</p>
             <div>
                <p className="text-2xl font-bold">{profile.stats.totalVertical.toLocaleString()} <span className="text-sm font-normal text-slate-500">m</span></p>
                <div className="flex items-center gap-1 text-green-500 text-xs mt-1 font-bold">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{profile.stats.verticalGrowth}%</span>
                </div>
             </div>
          </div>

          <div className="p-5 h-32 flex flex-col justify-between rounded-2xl bg-surface-dark border border-white/5 relative overflow-hidden group">
             <Gauge className="absolute -top-1 -right-1 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
             <p className="text-sm font-medium text-slate-500">Top Speed</p>
             <div>
                <p className="text-2xl font-bold">{profile.stats.topSpeed} <span className="text-sm font-normal text-slate-500">km/h</span></p>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">{profile.stats.topSpeedLocation}</p>
             </div>
          </div>
        </div>

        {/* Resorts Visited Card */}
        <div className="p-5 flex items-center justify-between rounded-2xl bg-surface-dark border border-white/5">
          <div>
            <p className="text-sm font-medium text-slate-500">Resorts Visited</p>
            <p className="text-2xl font-bold">{profile.stats.resortsVisitedCount} <span className="text-sm font-normal text-slate-500">Resorts</span></p>
          </div>
          <div className="flex -space-x-3 items-center">
            {profile.resorts.map((resort) => (
              <div 
                key={resort.id}
                className="w-10 h-10 rounded-full border-2 border-surface-dark bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${resort.image})` }}
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-surface-dark bg-slate-800 flex items-center justify-center text-xs font-bold text-white z-10 shadow-lg">
              +9
            </div>
          </div>
        </div>

        {/* Earned Badges Section */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold">Earned Badges</h3>
            <button className="text-sm font-bold text-primary flex items-center">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {profile.badges.map((badge) => (
              <div 
                key={badge.id} 
                className="p-3 bg-surface-dark border border-white/5 rounded-2xl flex flex-col items-center gap-2 hover:border-primary/50 transition-all cursor-pointer group active:scale-95"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                  {badge.image ? (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300" 
                        style={{ backgroundImage: `url(${badge.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                      <Mountain className="relative w-8 h-8 text-white drop-shadow-md" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center">
                      <Sunrise className="w-10 h-10 text-orange-500" />
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold text-center leading-tight whitespace-pre-line">
                  {badge.name.split(' ').join('\n')}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
