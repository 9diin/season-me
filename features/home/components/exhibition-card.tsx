import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage, Button, Card, Separator } from "@/components/ui"

export default function ExhibitionCard({ data }: { data: { imgUrl: string } }) {
    return (
        <div className="group relative w-full pt-0.5">
            <div
                className="absolute -top-1.5 left-1/2 z-0 h-6 w-[96%] -translate-x-1/2 rounded-t-xl border border-border/40 bg-muted/90 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                aria-hidden="true"
            />

            <Card className="relative z-10 h-72 w-full overflow-hidden border-none p-0 shadow-lg transition-transform duration-300 ease-out">
                {/* 작성자 아바타 뱃지 */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full bg-black/50 py-0.5 pr-2.5 pl-1.5 backdrop-blur-xs">
                    <Avatar className="h-6! w-6! bg-black">
                        <AvatarImage src="https://github.com/9diin.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="mt-px text-xs font-semibold text-white">방배동워렌버핏</span>
                </div>

                {/* 메인 이미지 & 오버레이 */}
                <div className="relative h-72 w-full">
                    <Image src={data.imgUrl} fill className="object-cover" alt="이미지" priority />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-linear-to-tr from-black/80 via-black/30 to-transparent" />
                </div>

                {/* 하단 텍스트 및 버튼 */}
                <div className="absolute bottom-0 z-20 flex w-full flex-col gap-2 p-3">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-base font-bold text-white drop-shadow-xs">무이네 사막에서 만난 해적왕</h3>
                        <p className="line-clamp-3 text-justify text-xs text-neutral-300/90">
                            붉은 모래 언덕 위로 노을이 비껴들 때, 고글을 쓴 노인이 붉은 망토를 휘날리며 샌드보드를 타고 바람처럼 내려왔다. 손때 묻은 지도를
                            내밀던 그는 자신을 무이네 사막의 해적왕이라 칭하며, 이 아득한 모래 바다 아래에는 옛 선원들이 묻어둔 바람의 노래가 숨겨져 있다고
                            속삭였다. 거센 사구의 바람 속에서 타오르던 그의 눈빛은, 붉은 모래밭마저 사막이 아닌 끝없는 거친 바다로 착각하게 만들 만큼 강렬했다.
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        className="w-full border border-white/20 bg-white/5 pt-0.5 font-semibold text-white backdrop-blur-xs duration-300 ease-in hover:border-white/40 hover:bg-white/20 hover:text-white"
                    >
                        작품 관람
                    </Button>
                </div>
            </Card>
        </div>
    )
}
