
import { Tweet } from "@/types/tweet";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface TweetCardProps {
  tweet: Tweet;
}

export const TweetCard = ({ tweet }: TweetCardProps) => {
  // Function to style mentions and hashtags
  const formatTweetContent = (content: string) => {
    return content.split(' ').map((word, index) => {
      if (word.startsWith('@')) {
        return (
          <a
            key={index}
            href={`https://twitter.com/${word.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14F195] hover:text-[#9945FF] transition-colors font-medium"
          >
            {word}{' '}
          </a>
        );
      } else if (word.startsWith('#') || word.startsWith('$')) {
        return (
          <span key={index} className="text-[#9945FF] font-medium">
            {word}{' '}
          </span>
        );
      } else if (word.startsWith('https://')) {
        return (
          <a
            key={index}
            href={word}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14F195] hover:underline"
          >
            {word}{' '}
          </a>
        );
      }
      return word + ' ';
    });
  };

  const statusStyles = {
    approved: "bg-[#14F195]/10 text-[#14F195] border border-[#14F195]/20",
    pending: "bg-[#9945FF]/10 text-[#9945FF] border border-[#9945FF]/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`
        backdrop-blur-md rounded-xl p-6 shadow-lg border
        ${tweet.status === 'approved' 
          ? 'bg-[#000000]/5 border-[#14F195]/20 hover:border-[#14F195]/40' 
          : 'bg-[#000000]/5 border-[#9945FF]/20 hover:border-[#9945FF]/40'}
        transition-all duration-300 hover:shadow-xl hover:shadow-[#14F195]/5
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${tweet.status === 'approved' 
              ? 'bg-gradient-to-r from-[#14F195]/20 to-[#9945FF]/20' 
              : 'bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20'}
          `}>
            <span className="text-white font-medium text-sm">
              {tweet.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-200">
              <a 
                href={`https://twitter.com/${tweet.username}`} 
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
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[tweet.status as keyof typeof statusStyles]}`}>
          {tweet.status}
        </span>
      </div>
      <p className="mt-4 text-gray-300 leading-relaxed">
        {formatTweetContent(tweet.content)}
      </p>
      {tweet.curatorNotes && (
        <div className="mt-4 p-3 bg-[#9945FF]/5 rounded-lg border border-[#9945FF]/20">
          <p className="text-sm text-gray-300">
            <span className="font-medium text-[#9945FF]">Curator Note:</span> {tweet.curatorNotes}
          </p>
        </div>
      )}
    </motion.div>
  );
};
