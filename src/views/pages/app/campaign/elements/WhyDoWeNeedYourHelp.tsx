import needHelp from "src/assets/whyneedhelp.webp";
import { ListItem } from "./ListItem";
import React from "react";
import { CampaignDescription } from "src/model";

interface WhyDoWeNeedYourHelpProps {
  description: CampaignDescription.Section;
}

export function WhyDoWeNeedYourHelp(props: WhyDoWeNeedYourHelpProps) {
  return (
    <section className="3xl:max-w-[1528px] !px-4 xl:max-w-[90%] 2xl:max-w-[1380px] mx-auto justify-between gap-10 xl:gap-14 flex items-center xl:flex-row flex-col 3xl:gap-[112px] pb-12 xl:pb-0">
      {/* ======= Left Image ====  */}
      <div className="max-w-[640px] 2xl:max-w-[590px] 3xl:max-w-[666px] w-full relative">
        <div className="!bg-secondary !bg-opacity-35 rounded-full xl:pt-10 w-full h-full absolute max-w-[89%] lg:-top-5 shadow-imgShadow right-0 lg:-right-7"></div>
        <img src={needHelp} alt="" className="object-cover relative z-20" />
      </div>
      <div className="max-w-[640px] 2xl:max-w-[600px] w-full 3xl:max-w-[728px] relative z-20">
        <h1 className="text-2xl 1400:text-[32px] 3xl:text-[40px] pb-3 lg:!pb-5 3xl:!pb-7 w-fit relative font-semibold sm:text-nowrap">
          <span className="absolute sm:inline hidden left-0 w-[37%] bottom-0 h-1 3xl:h-1.5 bg-gradient-to-r from-[#FF7E4B] via-[#FF518C] to-[#66319B]"></span>
          Why Do We Need Your Help?
        </h1>
        {props.description.paragraph1 && <p className="text-base sm:text-xl font-medium 3xl:text-2xl !mt-3 xl:!mt-4">{props.description.paragraph1}</p>}
        {props.description.items && (
          <ul className="space-y-4 2xl:space-y-5 mt-4 xl:!mt-8 !text-left">
            {/*<h3 className="text-base sm:text-xl font-medium 3xl:text-[25px]">To have a more robust and reliable Pekko Cluster we need:</h3>*/}
            {props.description.items.map((item, index) => (
              <ListItem key={index}>{item.text}</ListItem>
            ))}
          </ul>
        )}
        {props.description.paragraph2 && (
          <p className="text-base xl:max-w-[520px] 3xl:max-w-[628px] sm:text-xl font-medium 3xl:text-2xl !mt-5 md:!mt-8">{props.description.paragraph2}</p>
        )}
      </div>
    </section>
  );
}
