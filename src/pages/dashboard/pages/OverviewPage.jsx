import { People, Star, Trophy } from "@/assets";
import ChartLine from "@/components/ChartLine";
import DashboardHeader from "@/components/DashboardHeader";
import OverviewCard from "@/components/OverviewCard";
import K from "@/constants";
import React from "react";

const OverviewPage = () => {
  return (
    <div className="min-h-screen space-y-5">
      <DashboardHeader
        title={"Overview"}
        text={"Explore a summary of your activities here"}
      />

      <section className="space-y-5">
        <h2 className="font-bold">Activity Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <OverviewCard
            title={"Total"}
            number={"7"}
            icon={Trophy}
            difference={"+5%"}
          />
          <OverviewCard
            title={"Collaborations"}
            number={"15"}
            icon={People}
            difference={"+5%"}
          />
          <OverviewCard
            title={"Rating"}
            number={"4.5/5.0"}
            icon={Star}
            difference={"+5%"}
          />
        </div>
      </section>
      
        <ChartLine data={K.chartData} />
      
    </div>
  );
};

export default OverviewPage;
