'Use client';

import BaseCard from './BaseCard';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function KpiCard({ className = '', title = '' }) {
  return (
    <>
      <BaseCard
        border="lightGrey"
        align="left"
        className={`m-auto h-30 w-full cursor-none bg-white ${className} hover:bg-gray-50`}
      >
        <div className="m-auto flex flex-col justify-baseline gap-4">
          <h2 className="text-">KPI title</h2>
          <div className="flex items-center">
            <p className="text-4xl font-bold text-green-600">89%</p>
            <ArrowUpwardRoundedIcon className="text-green-600" />
          </div>
        </div>
      </BaseCard>
    </>
  );
}

export default KpiCard;
