
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import Image from "next/image"


function Sidebar() {
  return (

    <section className="fixed mt-6 ml-4 top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
        <div className="mb-7">
        <Image
        src="https://rb.gy/ptpaut"
        width={100}
        height={100}
        objectFit="contain"
        alt=""
      />
      </div>

      <div className="flex flex-col space-y-6 items-center">
        <HomeIcon className="sidebarIcon text-black" />
        <RiCompassFill className="sidebarIcon text-2xl opacity-[0.65]"  />
        <FaMicrophoneAlt className="sidebarIcon opacity-[0.65]" />
        <ChartBarIcon className="sidebarIcon opacity-[0.65]" />
        <ClockIcon className="sidebarIcon opacity-[0.65]" />
        <DotsHorizontalIcon className="sidebarIcon opacity-[0.65]" />
      </div>

    </section>
  )
}

export default Sidebar