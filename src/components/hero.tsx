import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faItchIo,
    faDiscord,
    faGitlab,
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
        <div className="container mx-auto mb-10">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-6xl grid grid-cols-2">
                    <div className="self-center flex flex-col justify-center">
                        <p className="text-[20px] font-[roboto] pb-5">
                            C++ | Typescript | Linux
                        </p>
                        <p className="text-[20px] font-[roboto] pb-5">
                            Hi! I&apos;m a web and game developer with a strong
                            focus on creativity. I specialize in C++ and
                            Typescript, but I work in a variety of languages due
                            to modding different games x)
                        </p>
                        <p className="text-[32px]">Upcoming...</p>
                        <p className="text-[20px] font-[roboto] pb-5">
                            Currently working on Halal Games Index™
                            <br></br>
                        </p>
                        <div className="flex gap-x-8 items-center text-[var(--colour-highlight)]">
                            <a
                                href="https://gitlab.com/CaptnJayce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 duration-200 ease-in-out"
                            >
                                <FontAwesomeIcon
                                    icon={faGitlab}
                                    className="w-10"
                                />
                            </a>
                            <a
                                href="https://github.com/CaptnJayce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 duration-200 ease-in-out"
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
                                className="hover:opacity-70 duration-200 ease-in-out"
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
                                className="hover:opacity-70 duration-200 ease-in-out"
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
                        className="justify-self-end border-3 shadow-lg shadow-[#E84A72] border-[var(--colour-border)] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
