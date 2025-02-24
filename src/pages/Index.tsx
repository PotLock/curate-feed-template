
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
  {
    "tweetId": "1887429206516105342",
    "userId": "1792452558146961408",
    "username": "Memento_ai",
    "content": "🚀🚀🚀",
    "curatorNotes": "SEND AI / solana agent kit adds support for Python",
    "curatorId": "963338159043088384",
    "curatorUsername": "ShillKING22",
    "curatorTweetId": "1887433942728352039",
    "createdAt": "2025-02-06T09:12:44.000Z",
    "submittedAt": "2025-02-06T09:54:10.308Z",
    "moderationHistory": [],
    "status": "pending"
  },
  {
    "tweetId": "1880845169345573220",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @realDonaldTrump's official Solana meme coin, $TRUMP, flips $PEPE to become the third-largest meme coin by market cap. https://t.co/mn0st7MNa4",
    "curatorNotes": "@realDonaldTrump",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1880854142077587708",
    "createdAt": "2025-01-19T05:10:07.000Z",
    "submittedAt": "2025-01-21T05:01:29.022Z",
    "moderationHistory": [
      {
        "tweetId": "1880845169345573220",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "crypto",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "crypto",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1880854142077587708"
  },
  {
    "tweetId": "1881120625328361600",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨JUST IN: @phantom reports 8M+ requests per minute, causing wallet loading failures and transaction issues. Users face disruptions as Melania Trump's meme coin launch on Solana drives massive activity. Phantom says they're working to stabilize the platform. https://t.co/roym4BZcCV",
    "curatorNotes": "@phantom",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881124629563277362",
    "createdAt": "2025-01-19T23:24:41.000Z",
    "submittedAt": "2025-01-21T05:01:30.523Z",
    "moderationHistory": [
      {
        "tweetId": "1881120625328361600",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom",
        "timestamp": "2025-01-19T23:40:35.000Z",
        "moderationResponseTweetId": "1881124629563277362"
      },
      {
        "tweetId": "1881120625328361600",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom",
        "timestamp": "2025-01-19T23:40:35.000Z",
        "moderationResponseTweetId": "1881124629563277362"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881124629563277362"
  }
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
