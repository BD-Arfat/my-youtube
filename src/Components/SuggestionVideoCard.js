import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "./Shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video.videoId}`}>
            <div className="md:flex mb-3">
                <div className="relative md:h-24 h-48 lg:h20 xl:h24 w-full min-w[168px] lg:w-36 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl gb-slate-800 overflow-hidden">
                    <img className="h-full w-full object-cover" src={video?.thumbnails?.[0]?.url} alt="" />
                    {video.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>

                <div className="flex text-white mt-3">

                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
                            {video?.title}
                        </span>

                        <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                            )}
                        </span>

                        <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncte overflow-hidden">
                            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">.</span>
                            <span className="truncate">{video?.publishedTimeText}</span>
                        </div>

                    </div>

                </div>

            </div>
        </Link>
    );
};

export default SuggestionVideoCard;