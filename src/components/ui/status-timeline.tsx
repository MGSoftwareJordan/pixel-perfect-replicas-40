
import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

interface TimelineStepProps {
  status: "completed" | "current" | "upcoming"
  title: string
  description: string
  icon?: React.ReactNode
  isLast?: boolean
}

const TimelineStep = ({ status, title, description, icon, isLast }: TimelineStepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex h-8 w-8 rounded-full items-center justify-center",
          status === "completed" ? "bg-green-100 text-green-600" : 
          status === "current" ? "bg-yellow-100 text-yellow-600" : 
          "bg-gray-100 text-gray-400"
        )}>
          {icon || (
            status === "completed" ? <CheckCircle className="h-5 w-5" /> :
            status === "current" ? <Clock className="h-5 w-5" /> :
            <Clock className="h-5 w-5" />
          )}
        </div>
        {!isLast && (
          <div className={cn(
            "w-0.5 h-full mt-1",
            status === "completed" ? "bg-green-200" : "bg-gray-200"
          )} />
        )}
      </div>
      <div className="ml-4 pb-8">
        <h4 className={cn(
          "text-sm font-medium",
          status === "completed" ? "text-green-600" : 
          status === "current" ? "text-yellow-600" : 
          "text-gray-500"
        )}>
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

interface StatusTimelineProps {
  status: string
  className?: string
}

export function StatusTimeline({ status, className }: StatusTimelineProps) {
  // Bepaal de huidige stap op basis van de status
  const getTimelineStatus = (stepStatus: string): "completed" | "current" | "upcoming" => {
    const statusOrder = ["pending", "approved", "active", "sold", "completed"];
    const currentIndex = statusOrder.indexOf(status);
    const stepIndex = statusOrder.indexOf(stepStatus);
    
    if (stepIndex < currentIndex) return "completed";
    if (stepIndex === currentIndex) return "current";
    return "upcoming";
  };
  
  // Status is rejected? Dan tonen we een aangepaste tijdlijn
  if (status === "rejected") {
    return (
      <div className={cn("space-y-1", className)}>
        <div className="flex">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 rounded-full bg-red-100 text-red-600 items-center justify-center">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-sm font-medium text-red-600">
              Afgekeurd
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Je aanbieding is helaas afgekeurd. Bekijk de reden en probeer het opnieuw.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-1", className)}>
      <TimelineStep
        status={getTimelineStatus("pending")}
        title="Ingediend"
        description="Je aanbieding wordt beoordeeld"
      />
      
      <TimelineStep
        status={getTimelineStatus("approved")}
        title="Goedgekeurd"
        description="Aanbieding is goedgekeurd (±24 uur)"
      />
      
      <TimelineStep
        status={getTimelineStatus("active")}
        title="Online"
        description="Je aanbieding is live en zichtbaar"
        isLast={status !== "sold" && status !== "completed"}
      />
      
      {(status === "sold" || status === "completed") && (
        <TimelineStep
          status={getTimelineStatus("completed")}
          title="Verkocht"
          description="Je aanbieding is verkocht"
          isLast={true}
        />
      )}
    </div>
  )
}
