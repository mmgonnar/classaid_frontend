'use client';

import BaseCard from './cards/BaseCard';

function DashboardContainer() {
  return (
    <div className="py-4">
      <h3>Title</h3>

      <BaseCard border="lightGrey" align="left">
        <div className="card__content flex border-b-1 border-neutral-400 px-6 pt-4 md:flex-col">
          <div className="card__container flex-start flex items-center gap-3">
            <div className="text-primary rounded-full border-1 border-neutral-300 bg-neutral-100 p-2 font-medium">
              En1
            </div>
            <div>
              <p className="font-semibold text-neutral-700">Subject</p>
              <p className="font-semibold text-neutral-400">501</p>
            </div>
          </div>
          <div className="card__container">
            <p className="pb-4 text-neutral-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  );
}

export default DashboardContainer;
