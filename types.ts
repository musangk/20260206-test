
export interface Badge {
  id: string;
  name: string;
  image: string;
  icon: string;
}

export interface Resort {
  id: string;
  image: string;
}

export interface SkierProfile {
  name: string;
  status: string;
  isVerified: boolean;
  avatarUrl: string;
  seasonGoal: {
    percentage: number;
    current: string;
    target: string;
    remainingDays: number;
  };
  stats: {
    totalVertical: number;
    verticalGrowth: number;
    topSpeed: number;
    topSpeedLocation: string;
    resortsVisitedCount: number;
  };
  resorts: Resort[];
  badges: Badge[];
}
