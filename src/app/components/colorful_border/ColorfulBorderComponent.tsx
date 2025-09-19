import { ReactNode } from "react"

interface ColorfulBorderComponentProps{
  header?: string | ReactNode
  content: string | ReactNode
}

function ColorfulBorderComponent({content, header}: ColorfulBorderComponentProps){
  return(
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="animated-border-box">
          <div className="inner-content text-center">
            <h2 className="text-2xl font-bold text-cyan-300">{header}</h2>
            <div className="text-gray-300">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorfulBorderComponent;