import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
        <section>
            <MaxWidthWrapper>
                <div>
                    <h1 className="font-bold justify-center flex flex-col items-center text-2xl">
                        REWASTE
                    </h1>
                </div>
            </MaxWidthWrapper>
        </section>
    </div>
  )
}
