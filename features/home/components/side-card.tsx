"use client"

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui"

export default function SideCard({
    data,
}: {
    data: {
        imgUrl: string
    }
}) {
    return (
        <Card className="w-full flex-1 gap-2 bg-transparent p-0 ring-0">
            <div className="relative aspect-video w-full">
                <Image src={data.imgUrl} fill className="rounded-xl object-cover" alt="이미지" />
                {/* 전체 블랙 명암 레이어 */}
                <div className="absolute inset-0 rounded-xl bg-black/20" />
                {/* 왼쪽 하단 -> 오른쪽 상단 그라데이션 레이어 */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-black/80 via-black/30 to-transparent" />
                {/* 넷플릭스 스타일 순위 숫자 */}
                <span
                    className="absolute top-5 left-5 text-5xl leading-none font-black text-black drop-shadow-md select-none md:text-5xl"
                    style={{ WebkitTextStroke: "3px var(--color-neutral-300, #d4d4d4)", paintOrder: "stroke fill" }}
                >
                    2
                </span>
                <div className="absolute bottom-0 left-0 flex flex-col gap-1 p-5 pb-4">
                    <h3 className="text-xl font-bold text-white">제주도 푸른 밤, 우리만의 시간</h3>
                    <p className="text-xs text-neutral-300">
                        함덕 해변의 투명한 바다와 돌담길을 따라 걸으며 나누었던 이야기들. 평생 잊지 못할 노을 아래에서의 식사
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="h-7! w-7!">
                        <AvatarImage src="https://github.com/9diin.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="mt-px font-semibold">방배동워렌버핏</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <Image src={"/icons/heart.svg"} alt="icon" width={18} height={18} />
                        <span className="mt-0.75 font-semibold">100</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={"/icons/eyes.svg"} alt="icon" width={18} height={18} />
                        <span className="mt-0.75 font-semibold">100</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
