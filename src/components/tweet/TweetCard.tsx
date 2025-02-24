
import { Tweet } from "@/types/tweet";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface TweetCardProps {
  tweet: Tweet;
}

export const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm">
              {tweet.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">
              <a 
                href={`https://twitter.com/${tweet.username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                {tweet.username}
              </a>
            </h3>
            <p className="text-sm text-gray-500">
              {format(new Date(tweet.createdAt), "MMM d, yyyy")}
            </p>
          </div>
        </div>
        <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600">
          {tweet.status}
        </span>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed">{tweet.content}</p>
      {tweet.curatorNotes && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Curator Note:</span> {tweet.curatorNotes}
          </p>
        </div>
      )}
    </motion.div>
  );
};
