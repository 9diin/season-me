import { ExhibitionCard, HeroCard, SideCard } from "@/features/home/components"
import { Button } from "@/components/ui"
import { ArrowRight } from "lucide-react"

const data = [
    {
        imgUrl: "/images/sample-002.jpeg",
    },
    {
        imgUrl: "/images/sample-003.jpeg",
    },
]

const data2 = [
    {
        imgUrl: "/images/sample-004.jpeg",
    },
    {
        imgUrl: "/images/sample-005.jpeg",
    },
    {
        imgUrl: "/images/sample-006.jpeg",
    },
    {
        imgUrl: "/images/sample-007.jpeg",
    },
    {
        imgUrl: "/images/sample-008.jpeg",
    },
]

export default function Home() {
    return (
        <div className="flex h-full w-full flex-col gap-12">
            {/* 이번 주 하이라이트 */}
            <section className="flex w-full flex-col gap-4">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-[#5200FF]">HIGHLIGHT</span>
                        <h2 className="text-2xl font-bold">이번주 하이라이트</h2>
                    </div>
                    <Button variant="link" className="flex h-fit items-center gap-0.5 p-0 font-medium text-[#5200FF]">
                        모두 보기
                        <ArrowRight className="mb-0.5 size-3.5" />
                    </Button>
                </div>
                <div className="flex w-full gap-4">
                    <HeroCard />
                    <div className="flex w-1/3 max-w-1/3 flex-col gap-4">
                        <SideCard data={data[0]} />
                        <SideCard data={data[1]} />
                    </div>
                </div>
            </section>
            {/* 당신에게 추천하는 */}
            <section className="flex w-full flex-col gap-4">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-[#5200FF]">CURATED FOR YOU</span>
                        <h2 className="text-2xl font-bold">오직 당신의 고요를 위해 마련된 프라이빗 기획전</h2>
                    </div>
                    <Button variant="link" className="flex h-fit items-center gap-0.5 p-0 font-medium text-[#5200FF]">
                        모두 보기
                        <ArrowRight className="mb-0.5 size-3.5" />
                    </Button>
                </div>
                <div className="grid w-full grid-cols-5 gap-4">
                    {data2.map((item) => (
                        <ExhibitionCard data={item} key={item.imgUrl} />
                    ))}
                </div>
            </section>
        </div>
    )
}
