export default function About() {
    return (
        <div className="container mx-auto px-8">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-5xl font-[roboto]">
                    <p className="text-[40px] font-[Tiny5]">About Me</p>
                    <p className="text-[18px] pb-2">
                        I&apos;m a computer science graduate who loves to
                        develop for the web using stacks like T3, and getting
                        closer to the hardware with C++. For me, programming is
                        the best way to express the ideas I come up with due to
                        the breadth of options and sheer level of control.
                    </p>
                    <p className="text-[18px] pb-2">
                        Currently, I&apos;m developing <em>Dimentia</em>, a
                        roguelike shoot-em-up which will feature various unique
                        gameplay mechanics and lore surrounding the theme of{" "}
                        <em>chaos</em>. You can find out more in the projects
                        tab :)
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
