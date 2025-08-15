import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faItchIo,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { db } from "~/server/db";

export default async function Hero() {
    // fetch avatar
    const avatar = await db.avatar.findFirst({
        select: {
            imageUrl: true,
        },
    });

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
                            Hi! I&apos;m a web and game developer with a strong
                            focus on user experience — and just enough
                            stubbornness to make sure it&apos;s done right. I
                            specialize in C++, Raylib, and Linux.
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
                    </div>

                    <img
                        src={avatar!.imageUrl}
                        alt="avatar"
                        width="300"
                        height="300"
                        className="justify-self-end rounded-full shadow-lg shadow-[#575279] dark:shadow-white"
                    />
                </div>
            </div>
        </div>
    );
}
