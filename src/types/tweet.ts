
export interface Tweet {
  tweetId: string;
  userId: string;
  username: string;
  content: string;
  curatorNotes: string | null;
  curatorId: string;
  curatorUsername: string;
  curatorTweetId: string;
  createdAt: string;
  submittedAt: string;
  moderationHistory: ModerationEntry[];
  status: 'pending' | 'approved';
  moderationResponseTweetId?: string;
}

export interface ModerationEntry {
  tweetId: string;
  feedId: string;
  adminId: string;
  action: string;
  note: string;
  timestamp: string;
  moderationResponseTweetId: string;
}
