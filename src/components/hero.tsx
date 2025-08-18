import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faItchIo,
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
        <div className="container mx-auto px-8 pt-5 pb-20">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-5xl grid grid-cols-2">
                    <div className="self-center flex flex-col justify-center">
                        <p className="text-[20px] font-[roboto] pb-5">
                            C++ | Raylib | Full Stack
                        </p>
                        <p className="text-[20px] font-[roboto] pb-5">
                            Hi! I&apos;m a web and game developer with a strong
                            focus on user experience — and just enough
                            stubbornness to make sure it&apos;s done right. I
                            specialize in C++, Raylib, and Linux.
                        </p>
                        <p className="text-[20px] font-[roboto] pb-5">
                            Dimentia demo releasing on Itch.io soon™
                        </p>
                        <div className="flex gap-x-8 items-center text-[#ffbfe8]">
                            <a
                                href="https://github.com/CaptnJayce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-10"
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
                                    className="w-10"
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
                                    className="w-10"
                                />
                            </a>
                        </div>
                    </div>

                    <img
                        src={avatar!.imageUrl}
                        alt="avatar"
                        width="300"
                        height="300"
                        className="justify-self-end rounded-full shadow-lg shadow-[#ffbfe8]"
                    />
                </div>
            </div>
        </div>
    );
}
