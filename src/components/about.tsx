export default function About() {
    return (
        <div className="container mx-auto mb-15">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-6xl font-[roboto]">
                    <p className="text-[40px] font-[Tiny5]">About Me</p>
                    <p className="text-[18px] pb-2">
                        Hi! I&apos;m Casey, a computer science graduate who
                        loves to develop webapps and games. Since graduation, I
                        have worked freelance as well as voluntarily,
                        independently and within teams of people.
                    </p>
                    <p className="text-[18px]">
                        Currently, myself and several friends from University
                        are working on a startup called Covelopers, a developer
                        focused community that aims to provide practical SWE
                        experience as well as help with sourcing developers and
                        project leads. <br /> At the moment, we are working on
                        our debut InterviewAI project, where we help developers
                        hone their interview technique and social skills. In the
                        future, we hope to expand this project beyond just SWE.
                    </p>
                </div>
            </div>
        </div>
    );
}
