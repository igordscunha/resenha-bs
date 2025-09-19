import { ReactNode } from "react";
import { hennypenny } from '../../fonts/fonts';

interface TopicComponentProps{
  children: string | ReactNode
}

function TopicComponent({children}: TopicComponentProps){
  return(
      <div className="flex items-center gap-6 justify-center md:py-16 pt-12 md:pt-0">
        <hr className="border-2 h-1 w-24 bg-gray-300" />
        <span className={`text-4xl md:text-5xl ${hennypenny.className}`}>{children}</span>
      </div>
  )
}

export default TopicComponent;