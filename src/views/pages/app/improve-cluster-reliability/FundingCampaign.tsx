import React, { useState } from "react";
import { CompanyBanner } from "./CompanyBanner";
import DonationControls from "./DonationControls";
import { FeatureList } from "./FeatureList";
import { Progress } from "./Progress";
import VideoPlayer from "./VideoContainer";
import { LinearBg } from "src/Utils/Icons";

interface FundingCampaignProps {
  currentAmount: number;
  targetAmount: number;
  backers: number;
  daysLeft: number;
}

export function FundingCampaign(props: FundingCampaignProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("monthly");

  return (
    <section className="mt-14 sm:mt-20 3xl:!mt-[89px] !px-4 2xl:!px-0 relative xl:pb-14 flex flex-col">
      <div className="!bg-sunset-glow-gradient max-w-[548px] w-full h-full min-h-[500px] min-w-[260px] max-h-[1000px] absolute left-[5%] top-[60%] xl:top-[18%] blur-[125px] -z-0 opacity-35 !shrink-0 pointer-events-none -rotate-[103deg] rounded-full"></div>
      <div className="bg-gradient-to-l from-[#5935A1] to-[#AC3556] max-w-[402px] min-h-[500px] min-w-[270px] w-full h-full max-h-[1166px] absolute left-[5%] top-[18%] blur-[125px] -z-0 opacity-45 shrink-0 pointer-events-none  -rotate-[41.351deg] rounded-full"></div>
      <span className="right-0 absolute bottom-[17%] lg:bottom-0 -z-10">
        <LinearBg />
      </span>
      <div className="xl:max-w-[98%] 1400:max-w-[90%] 1500:max-w-[84%] 3xl:!max-w-[1560px] mx-auto flex justify-center xl:justify-between xl:!flex-nowrap flex-wrap gap-7 2xl:gap-10 3xl:gap-14">
        {/* Left Section */}
        <div className="max-w-[800px] relative z-10 w-full xl:!w-[59%] 3xl:max-w-[817px] mx-auto xl:!mx-0">
          <h4 className="py-2.5 flex justify-center mx-auto xl:!mx-0 items-center rounded-full bg-primary-user text-sm md:text-base lg:text-lg font-montserrat 2xl:text-xl 3xl:text-[25px] max-w-[170px] sm:max-w-[200px] lg:max-w-[270px] 3xl:max-w-[315px] w-full">
            Funding Campaign
          </h4>
          {donationType === "once" && (
            <>
              {" "}
              <h2 className="text-3xl md:text-4xl xl:text-[44px] !leading-[129%] 1300:text-5xl 1700:text-[52px] 3xl:text-[55px] text-center sm:!text-left !mx-auto xl:!mx-0 !font-michroma !pb-5 2xl:!pb-6 3xl:!pb-7 w-fit relative !mt-3 xl:!mt-4">
                Improve Cluster Reliability
                <span className="absolute w-[28%] h-[6px] left-1/2 -translate-x-1/2 xl:-translate-x-0 xl:left-0 bg-gradient-to-r from-[#FF7E4B] via-[#FF518C] to-[#66319B] bottom-0"></span>
              </h2>{" "}
              <p className="font-montserrat text-center !leading-[154%] xl:!text-left text-base sm:text-xl mx-auto xl:!mx-0 font-medium 1600:text-2xl max-w-[650px] w-full 3xl:max-w-[770px] 3xl:text-[30px] !mt-6 xl:!mt-8 2xl:mt-9 3xl:!mt-[42px]">
                Apache Pekko is an independent open-source project powered by volunteers in their free time.
              </p>
              <p className="font-montserrat text-base text-center xl:!text-left sm:text-left sm:text-xl font-medium  1600:text-2xl 3xl:text-[30px] xl:!my-6 !my-4 3xl:!my-8">
                We need your help.{" "}
              </p>
            </>
          )}

          {donationType === "monthly" && (
            <>
              {" "}
              <h2 className="section-heading sm:!text-nowrap !mx-auto xl:!mx-0 !font-michroma !pb-5 2xl:!pb-8 3xl:!pb-10 w-fit relative !mb-4 3xl:!mb-5 !mt-4">
                Improve Cluster Reliability
                <span className="absolute w-[25%] h-[6px] left-0 bg-gradient-to-r from-[#FF7E4B] via-[#FF518C] to-[#66319B] bottom-0"></span>
              </h2>{" "}
              <VideoPlayer />
              <p className="font-montserrat text-base xl:text-xl font-medium 3xl:text-2xl !my-5 xl:!my-3 3xl:!my-5">
                Apache Pekko is an independent open-source project powered by volunteers in their free time.
              </p>
            </>
          )}
          <FeatureList donationType={donationType} />
        </div>

        {/* Right Section */}
        <div className="max-w-[800px] xl:w-[40%] 3xl:!w-[672px] w-full relative z-20">
          <div className="!bg-secondary py-10 w-full xl:py-11 3xl:py-12 !px-4 sm:!px-7 2xl:!px-10 3xl:!px-16 border !border-[#324053] rounded-2xl lg:rounded-[35px]">
            <Progress currentAmount={props.currentAmount} targetAmount={props.targetAmount} backers={props.backers} daysLeft={props.daysLeft} />
            <DonationControls
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
              donationType={donationType}
              setDonationType={setDonationType}
            />
          </div>
          <CompanyBanner leftButtonText="Only $100/mo" rightButtonText="for 100 Companies" />
        </div>
      </div>
    </section>
  );
}
