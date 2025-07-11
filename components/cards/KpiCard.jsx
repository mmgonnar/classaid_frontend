'Use client';

import BaseCard from './BaseCard';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function KpiCard({ className = '', title = '' }) {
  return (
    <>
      <BaseCard
        border="lightGrey"
        align="left"
        className={`m-auto h-20 w-full cursor-none bg-white ${className} hover:bg-gray-50`}
      >
        <div className="m-auto flex flex-col justify-baseline gap-1">
          <h2 className="text-">Classes Created</h2>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-green-600">89%</p>
            <ArrowUpwardRoundedIcon
              //sx={{ fontSize: sizes[size] || sizes.medium }}
              sx={{ fontSize: '1em' }}
              className="text-green-600"
            />
          </div>
        </div>
      </BaseCard>
    </>
  );
}

export default KpiCard;
