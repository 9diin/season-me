import { Play } from "lucide-react"
import { Button, Separator, SidebarTrigger } from "../ui"

export default function AppHeader() {
    return (
        <header className="flex h-16 w-full shrink-0 items-center justify-between gap-2 pr-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-1 px-4">
                <SidebarTrigger className="-ml-1 cursor-pointer" />
                <Separator orientation="vertical" className="mt-1.5 mr-2 data-[orientation=vertical]:h-4" />
                <div className="mt-0.5 flex items-center gap-2 font-medium">
                    <span>안녕하세요,</span>
                    <span>방배동워렌버핏님!</span>
                </div>
            </div>
            {/* 음악 플레이어 */}
            <div className="flex items-center gap-1 rounded-md bg-[#5200FF]/5 px-1.5 py-0.75">
                <Button className="h-6 w-6 rounded-full bg-[#5200FF] hover:bg-[#5200FF]">
                    <Play fill="#ffffff" className="h-3! w-3!" />
                </Button>
                <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-[#5200FF]">지금 재생 중</span>
                    <span className="text-[10px] font-semibold">무제 (Untitled) - 지드래곤</span>
                </div>
            </div>
        </header>
    )
}
