import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faItchIo,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
    return (
        <div className="container mx-auto px-8">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-5xl grid grid-cols-2">
                    <div className="self-start">
                        <p className="text-[40px] h-12">Casey Jestico</p>
                        <p className="text-[32px]">Game &amp; Web Developer</p>
                        <p className="text-[18px] font-[roboto] pb-5">
                            Full Stack | C++ | Raylib
                        </p>
                        <p className="text-[18px] font-[roboto] pb-5">
                            Hi! I'm a web and game developer with a strong focus
                            on user experience — and just enough stubbornness to
                            make sure it's done right.
                        </p>
                        <p className="text-[18px] font-[roboto] pb-5">
                            Dimentia demo releasing on Itch.io soon™
                        </p>
                        <div className="flex gap-x-8 items-center pb-10">
                            <a
                                href="https://github.com/CaptnJayce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-8"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jc444/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="w-8"
                                />
                            </a>

                            <a
                                href="https://www.discord.com/users/775894736623239260"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <FontAwesomeIcon
                                    icon={faDiscord}
                                    className="w-8"
                                />
                            </a>

                            <a
                                href="https://captnjayce.itch.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <FontAwesomeIcon
                                    icon={faItchIo}
                                    className="w-8"
                                />
                            </a>
                        </div>
                        <p className="text-[40px] pb-2">About Me</p>
                    </div>

                    <img
                        src="https://l9eocjqs7z.ufs.sh/f/o1OesjXRQmL1SWeu4YVEGqKvQUZVmWlnDbPTfFwujRYe6OB0"
                        alt="avatar"
                        width="300"
                        height="300"
                        className="justify-self-end rounded-full shadow-lg shadow-[#575279]  dark:shadow-white"
                    />
                </div>

                <div className="w-full max-w-5xl font-[roboto]">
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
