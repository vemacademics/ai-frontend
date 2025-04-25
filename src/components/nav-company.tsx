"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
 
} from "@/components/ui/sidebar"

export function NavCompany({
  company,
}: {
    company: {
    name: string
    avatar: string
    plan: string
  }
}) {


  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={company.avatar} alt={company.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
             
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{company.name}</span>
                <span className="truncate text-xs">{company.plan}</span>
              </div>
             
            </SidebarMenuButton>
          </DropdownMenuTrigger>
         
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
