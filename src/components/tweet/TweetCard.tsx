import { Tweet } from "@/types/tweet";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface TweetCardProps {
  tweet: Tweet;
}

export const TweetCard = ({ tweet }: TweetCardProps) => {
  // Function to style mentions and hashtags
  const formatTweetContent = (content: string) => {
    return content.split(" ").map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <a
            key={index}
            href={`https://x.com/${word.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14F195] hover:text-[#9945FF] transition-colors font-medium"
          >
            {word}{" "}
          </a>
        );
      } else if (word.startsWith("#") || word.startsWith("$")) {
        return (
          <span key={index} className="text-[#9945FF] font-medium">
            {word}{" "}
          </span>
        );
      } else if (word.startsWith("https://")) {
        return (
          <a
            key={index}
            href={word}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14F195] hover:underline"
          >
            {word}{" "}
          </a>
        );
      }
      return word + " ";
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`
        backdrop-blur-md rounded-xl  mx-auto p-6 shadow-lg border
        ${
          tweet.status === "approved"
            ? "bg-[#000000]/5 border-[#14F195]/20 hover:border-[#14F195]/40"
            : "bg-[#000000]/5 border-[#9945FF]/20 hover:border-[#9945FF]/40"
        }
        transition-all duration-300 hover:shadow-xl hover:shadow-[#14F195]/5
        overflow-hidden
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${
              tweet.status === "approved"
                ? "bg-gradient-to-r from-[#14F195]/20 to-[#9945FF]/20"
                : "bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20"
            }
          `}
          >
            <span className="text-white font-medium text-sm">
              {tweet.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-200">
              <a
                href={`https://x.com/${tweet.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#14F195] transition-colors"
              >
                {tweet.username}
              </a>
            </h3>
            <p className="text-sm text-gray-400">
              {format(new Date(tweet.createdAt), "MMM d, yyyy")}
            </p>
          </div>
        </div>
        <a
          href={`https://x.com/${tweet.userId}/status/${tweet.tweetId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors"
          title="Link to tweet"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"  />
          </svg>
        </a>
      </div>
      <p className="mt-4 text-gray-300 leading-relaxed break-words">
        {formatTweetContent(tweet.content)}
      </p>
      {tweet.curatorNotes && (
        <div className="mt-4 p-3 bg-[#9945FF]/5 rounded-lg border border-[#9945FF]/20">
          <p className="text-sm text-gray-300">
            <span className="font-medium text-[#9945FF]">Curator Note:</span>{" "}
            {tweet.curatorNotes}
          </p>
        </div>
      )}
    </motion.div>
  );
};
