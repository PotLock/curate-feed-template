
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Search tweets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:ring-gray-200 focus:border-gray-300 transition-all duration-300"
      />
    </div>
  );
};
