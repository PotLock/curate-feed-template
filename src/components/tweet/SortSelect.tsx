
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-[#000000]/5 backdrop-blur-md border-[#9945FF]/20 hover:border-[#9945FF]/40 text-gray-200">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent className="bg-[#1C1C1C] border-[#9945FF]/20">
        <SelectItem value="date-desc" className="text-gray-200 focus:bg-[#9945FF]/20 focus:text-white">Newest first</SelectItem>
        <SelectItem value="date-asc" className="text-gray-200 focus:bg-[#9945FF]/20 focus:text-white">Oldest first</SelectItem>
        <SelectItem value="username" className="text-gray-200 focus:bg-[#9945FF]/20 focus:text-white">Username</SelectItem>
      </SelectContent>
    </Select>
  );
};
