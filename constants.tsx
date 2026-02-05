
import { SkierProfile } from './types';

export const MOCK_PROFILE: SkierProfile = {
  name: "Jean-Claude Killy",
  status: "Expert Skier",
  isVerified: true,
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7I1LdFlUar0HxKbTJk6N7abOdc7pRjXPvW1nv7x_OgjYbtLDdUNiMghIWulcmnJlGJH1q-YsxK7pnsRDdui4bHWvXnQ74k81wFQqxxA28dkxLoAzoJra6nADa35rjJUAxKLZng9i4v4qGwQFi4ebj-tn_IayaideQCtx5DGt33FAlbAEU8r8x-fFEKe5VRWhr6IKo4sr87jem5pYA1OztiU18O16FJoyA1W8Mpt0PD6W-NVsO2BmvrOMO6wMLLyIbJe2TJdckCoBh",
  seasonGoal: {
    percentage: 75,
    current: "150k",
    target: "200k",
    remainingDays: 23
  },
  stats: {
    totalVertical: 45200,
    verticalGrowth: 12,
    topSpeed: 85,
    topSpeedLocation: "Val d'Isère, FR",
    resortsVisitedCount: 12
  },
  resorts: [
    { id: '1', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAhDQuPBvIeVUcPpbqhjqE3xZ2EJJ_sxvLO9df7ZHGKxt7mUQNX8C1hAmcvKZTZaTTub2zit5FmLu00I6BvGmmLlKvWLe5GRePHCYmR9kj-z6pvTUxJfJfm_zaL6rlkURTNvfGrXPBD8i3C4Y7nrKin5UOa8NbuwSjyZ056yy5OJh_eKm4yB-9KDm9DSKx9vW0eaFPm8aJjUQD9AXapb4yJ28_I7euyxWQRMQUv3tvyeU6BDTSC4dRjRQK_lwsu2NMkvBz9Ywkp4V2" },
    { id: '2', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbiu7PbvsP1m1CxYQU4oyUv4TIDGL_cC5uFcBSDda8d_Qd28mbr75a5H1G0P-Xurzdy73zMiBKQWze8mJ-b_Ao9cTRlDaoA7IQxNz8Fa9p9ppM06tI_-5a2RWNBlNEMmzoJRQUh2YBMGMPDifibY0-WO4SIKwRDxuiuIff96-HeRjJbxbMGE43f6iK39u3YJtmFjSy7QhDVTJGZqS9CAdQB3psemysz4C_ii3aoAM9YCvHixblz6b2ZvBcbewUCHxMLXaDhior28mp" },
    { id: '3', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ys-JX99kuRUCDmudicG1UNHCccFm35FtsUz7qC2W0MpCt_iEUMfl8iDlKrzuu1n8_Vlw1XS-cdRh5Bpa83zaLhAPcneMYET23aidSNx8OvrNrbplT0wD3uFn2VBgvRpF2sHK-ltzjY26nvvA2f846k2ZaqOnkuHht2pTjDGDh-ksb5gZM5TU7atxzV-GkYhUbbPT3munND60Me8MhLWk_x6LYLCNTbFQzUYXbbxQqMEx5gK8KRJ_GPTylWjFwoIzZ52kM-g_b0-s" }
  ],
  badges: [
    { 
      id: 'b1', 
      name: 'Mont Blanc', 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApQnIzcKdDxPSWXumRBOziATq63H87fPBJW3H9DHUGWWCfbiHBbTTjHDB3RwN_8A6a79i-qmOana0nCrrnj20YCcMN18HJXkqeAnV_n5CDZOwPyDQcJqVLfQXlDlp4jORYJJRpxOsNe7TJZYPxizYGHCEAsa07GZpQPUVuVZ5amZCT-ZbkLr6gR8LL8a0GzTrLhZQyNjit2xcskKtnj_R1ydorvP5lROkWaFv37mrGAVpKXzZS6cJ0VUhKAXBeyInJCeS6PbmXnPD4", 
      icon: 'Mountain' 
    },
    { 
      id: 'b2', 
      name: 'Matterhorn', 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAigcGRDg8crsU5fvuHLV7NRE8kn-7asMBZGP79l3593CHjq_ZmQs92PoZ8_nBehpymkLknIMzemYYkjl9Sq0aT0Yd_eLNdXa2BxZyDEqoH3E1exkU4N9a8o16TsPbwGeYM070f7EyXvigAi4RXmzP5i7JgBX3A_ix7_CTILXMp60xC2RoPFxk1WTkyrhyNcx74BBWLD-ohLwE0e4LtiRvnyGGp1ylwhg0XLuUL62w9u2Gta7PP32xpzTj7pNLRwXZzo3bykwHMwgAK", 
      icon: 'Peak' 
    },
    { 
      id: 'b3', 
      name: 'Early Bird', 
      image: "", 
      icon: 'Sunrise' 
    }
  ]
};
