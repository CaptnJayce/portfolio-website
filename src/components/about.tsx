export default function About() {
    return (
        <div className="container mx-auto px-8">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-6xl font-[roboto]">
                    <p className="text-[40px] font-[Tiny5]">About Me</p>
                    <p className="text-[18px] pb-2">
                        Hi! I&apos;m Casey, a computer science graduate who
                        loves to develop webapps and games. Since graduation, I
                        have worked freelance as well as voluntarily.
                    </p>
                    <p className="text-[18px] pb-2">
                        Currently, I&apos;m developing <em>Dimentia</em>, a
                        roguelike shoot-em-up which will feature various unique
                        gameplay mechanics and lore surrounding the theme of{" "}
                        <em>chaos</em>. <br></br> Additionally, I&apos;m working
                        with some fellow graduates on a startup called
                        'Covelopers'. We're currently developing an InterviewAI
                        to help anyone hone their interview technique and
                        speaking skills.
                    </p>
                    <p className="text-[18px] pb-2">
                        Outside of coding, I enjoy exploring new technology,
                        gaming, 3D printing, and socialising with friends.
                    </p>
                </div>
            </div>
        </div>
    );
}
