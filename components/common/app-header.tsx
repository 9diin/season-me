import { Separator, SidebarTrigger } from "../ui"

export default function AppHeader() {
    return (
        <header className="flex h-16 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1 cursor-pointer" />
                <Separator orientation="vertical" className="mt-1.5 mr-2 data-[orientation=vertical]:h-4" />
                <div className="mt-0.5 flex items-center gap-2 font-medium">
                    <span>안녕하세요,</span>
                    <span>방배동워렌버핏님!</span>
                </div>
            </div>
        </header>
    )
}
