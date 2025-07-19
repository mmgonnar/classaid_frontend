'Use client';

import { kpisDashboard } from '@/utils/constants';
import BaseCard from './BaseCard';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function KpiCards({ className = '', title = '' }) {
  return (
    <div className="custom-md:grid-cols-4 custom-sm:grid-cols-2 grid w-[100%] items-center gap-2 pb-4 md:justify-center">
      {kpisDashboard.map((kpi) => (
        <BaseCard
          animation="none"
          key={kpi.id}
          border="lightGrey"
          align="left"
          className={`m-auto h-20 justify-center rounded-lg bg-white ${className} `}
        >
          <div className="flex w-full justify-between p-4">
            <div>
              <h2 className="text-xs text-neutral-400">{kpi.name}</h2>
              <div className="flex items-center">
                <p className="text-2xl font-medium text-blue-950">{kpi.data}</p>
              </div>
            </div>
            {kpi.icon && (
              <kpi.icon className="!m-0 mr-1 h-5 w-5 !text-[32px] text-cyan-500 md:!text-[32px]" />
            )}
          </div>
        </BaseCard>
      ))}
    </div>
  );
}

export default KpiCards;
