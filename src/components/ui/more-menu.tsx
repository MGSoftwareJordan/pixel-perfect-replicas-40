
import * as React from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu"
import { MoreHorizontal, Eye, Pencil, Copy, Pause, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface MoreMenuProps {
  offerId: string
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onDuplicate?: (id: string) => void
  onPause?: (id: string) => void
  onDelete?: (id: string) => void
}

export function MoreMenu({
  offerId,
  onView,
  onEdit,
  onDuplicate,
  onPause,
  onDelete,
}: MoreMenuProps) {
  // Prevent triggering the parent's click event
  const handleItemClick = (e: React.MouseEvent, callback?: (id: string) => void) => {
    e.stopPropagation()
    if (callback) {
      callback(offerId)
    }
  }
  
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0" aria-label="Meer acties">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Meer acties</span>
        </Button>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => handleItemClick(e, onView)}
        >
          <Eye className="h-4 w-4" />
          <span>Bekijken</span>
        </ContextMenuItem>
        
        <ContextMenuItem 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => handleItemClick(e, onEdit)}
        >
          <Pencil className="h-4 w-4" />
          <span>Bewerken</span>
        </ContextMenuItem>
        
        <ContextMenuItem 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => handleItemClick(e, onDuplicate)}
        >
          <Copy className="h-4 w-4" />
          <span>Dupliceren</span>
        </ContextMenuItem>
        
        <ContextMenuSeparator />
        
        <ContextMenuItem 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => handleItemClick(e, onPause)}
        >
          <Pause className="h-4 w-4" />
          <span>Pauzeren</span>
        </ContextMenuItem>
        
        <ContextMenuItem 
          className="flex items-center gap-2 cursor-pointer text-red-500 focus:text-red-500" 
          onClick={(e) => {
            e.stopPropagation()
            if (onDelete) {
              const confirmed = confirm('Weet je zeker dat je deze aanbieding wilt verwijderen?')
              if (confirmed) {
                onDelete(offerId)
                toast.success("Aanbieding is verwijderd")
              }
            }
          }}
        >
          <Trash2 className="h-4 w-4" />
          <span>Verwijderen</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
