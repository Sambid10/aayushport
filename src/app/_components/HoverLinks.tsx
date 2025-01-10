"use client";
import { useRef } from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { useAnimate, motion } from "framer-motion";
import { IconType } from "react-icons";

export default function FooterLinks() {
    return (
       
            <div className="flex justify-center items-center h-full">
                <LinkContainer />
          
        </div>
    );
}

 const LinkContainer = () => {
    return (
        <div className="divide-y w-[100%] lg:w-[60%] border-px">
            <div className="grid grid-cols-4 lg:h-24 h-12 divide-x border-px border-gray-50">
                <IconContainer Icon={SiFacebook} />
                <IconContainer Icon={SiLinkedin} />
                <IconContainer Icon={SiInstagram} />
                <IconContainer Icon={SiX} />
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const IconContainer = ({ Icon }: { Icon: IconType }) => {
    const[scope,animate]=useAnimate()

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    const getNearestSide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): string => {
        const box = e.currentTarget.getBoundingClientRect();
        const proximity = [
            { side: "left", value: Math.abs(box.left - e.clientX) },
            { side: "right", value: Math.abs(box.right - e.clientX) },
            { side: "top", value: Math.abs(box.top - e.clientY) },
            { side: "bottom", value: Math.abs(box.bottom - e.clientY) },
        ];

        proximity.sort((a, b) => a.value - b.value);
        return proximity[0].side;
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative grid place-content-center  pointer-events-auto border-gray-500"
        >
            <Link href="/">
                <Icon className="text-[#fff] lg:h-9 lg:w-10 h-5 w-5" />
            </Link>
            <motion.div
                ref={scope}
                style={{
                    clipPath: "polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)",
                }}
                className="grid place-content-center bg-[#ffff] absolute inset-0"
            >
                <Link href="/">
                    <Icon className="text-[#000] lg:h-9 lg:w-10 h-5 w-5" />
                </Link>
            </motion.div>
        </div>
    );
};