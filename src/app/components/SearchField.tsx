import { Search, Mic } from "lucide-react";

export default function SearchField() {
  return (
    <div className="absolute right-5 top-5 w-full max-w-sm mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder=""
          className="w-full pl-10 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
        />
        <Mic className="absolute right-3 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </div>
    </div>
  );
}
