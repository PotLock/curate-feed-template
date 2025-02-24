
import { useState, useMemo } from "react";
import { TweetCard } from "@/components/tweet/TweetCard";
import { SearchBar } from "@/components/tweet/SearchBar";
import { SortSelect } from "@/components/tweet/SortSelect";
import { Tweet } from "@/types/tweet";

const tweets: Tweet[] = [
  {
    "tweetId": "1882060160069414968",
    "userId": "1539013571123765251",
    "username": "magFOMO",
    "content": "🚨 JUST IN: \n\nOver 2 million wallets are eligible for the Jupuary airdrop. https://t.co/EHMTtENCJd",
    "curatorNotes": null,
    "curatorId": "1387449666552356870",
    "curatorUsername": "0xchluff",
    "curatorTweetId": "1882103280614211606",
    "createdAt": "2025-01-22T13:38:03.000Z",
    "submittedAt": "2025-01-22T16:30:32.840Z",
    "moderationHistory": [],
    "status": "pending"
  },
  // ... add the rest of the tweets here
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredAndSortedTweets = useMemo(() => {
    let filtered = tweets.filter(
      (tweet) =>
        tweet.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tweet.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "date-desc":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "username":
          return a.username.localeCompare(b.username);
        default:
          return 0;
      }
    });
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900">Twitter Feed</h1>
          <p className="mt-2 text-gray-600">Discover the latest tweets</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>

        <div className="space-y-6">
          {filteredAndSortedTweets.map((tweet) => (
            <TweetCard key={tweet.tweetId} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
