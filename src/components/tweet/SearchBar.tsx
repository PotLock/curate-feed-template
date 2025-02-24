
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
        <Search className="h-4 w-4 text-[#14F195]" />
      </div>
      <Input
        type="text"
        placeholder="Search tweets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-[#000000]/5 backdrop-blur-md border-[#14F195]/20 hover:border-[#14F195]/40 text-gray-200 placeholder:text-gray-400 focus:ring-[#14F195]/20 focus:border-[#14F195]/40 transition-all duration-300"
      />
    </div>
  );
};
