
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
      <SelectTrigger className="w-[180px] bg-white/80 backdrop-blur-sm">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="date-desc">Newest first</SelectItem>
        <SelectItem value="date-asc">Oldest first</SelectItem>
        <SelectItem value="username">Username</SelectItem>
      </SelectContent>
    </Select>
  );
};
