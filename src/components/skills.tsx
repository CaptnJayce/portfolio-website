// TODO HIGH: Move this into prisma so i dont have to redeploy each time its updated
export default function Skills() {
    return (
        <div className="container mx-auto mb-10">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-6xl font-[Tiny5] ">
                    <p className="text-[40px]">Expertise</p>
                    <div className="text-[24px] flex flex-wrap gap-4">
                        <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                            C++
                        </p>
                        <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                            Typescript
                        </p>
                        <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                            Linux
                        </p>
                        <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                            Aseprite
                        </p>
                        <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                            Git
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
