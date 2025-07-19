'use client';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { cn } from '@/utils/functions';

function SearchBar({ className }) {
  return (
    <div
      className={cn(
        'flex h-[27px] items-center rounded-2xl border border-neutral-400 p-1 text-sm',
        'hidden sm:flex',
        'w-xs md:w-sm lg:w-md xl:w-2xl',
        className,
      )}
    >
      <SearchOutlinedIcon className="text-xs text-neutral-300" />
      <input className="w-full outline-none" />
    </div>
  );
}

export default SearchBar;
