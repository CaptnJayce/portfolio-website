import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faItchIo,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full max-w-5xl grid grid-cols-2">
                <div className="self-start">
                    <p className="text-4xl pb-5">Casey Jestico</p>
                    <p className="text-2xl pb-5">Game & Web Developer</p>
                    <p className="text-1xl">
                        I love creating efficient and fun applications to
                        express my ideas.
                    </p>
                    <p className="text-1xl pb-5">
                        Most of my games will be canonical tales that take place
                        in a Universe called Kalpa, that I hope to keep adding
                        to over my life :)
                    </p>

                    <div className="flex gap-x-8 items-center pb-15">
                        <a
                            href="https://github.com/CaptnJayce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-8" />
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
                            <FontAwesomeIcon icon={faDiscord} className="w-8" />
                        </a>

                        <a
                            href="https://captnjayce.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                        >
                            <FontAwesomeIcon icon={faItchIo} className="w-8" />
                        </a>
                    </div>

                    <p className="text-2xl pb-2">About Me</p>
                </div>

                <div className="justify-self-end">
                    <img
                        src="https://l9eocjqs7z.ufs.sh/f/o1OesjXRQmL1SWeu4YVEGqKvQUZVmWlnDbPTfFwujRYe6OB0"
                        alt="avatar"
                        width="300"
                        height="300"
                    ></img>
                </div>
            </div>

            <div className="w-full max-w-5xl text-[#907aa9]">
                <p className="text-1xl pb-2">
                    I'm a computer science graduate passionate about making
                    software and games. I love developing for the web using
                    stacks like T3, and getting closer to the hardware with C++.
                    For me, programming is the best way to express the ideas I
                    come up with due to the breadth of options and sheer level
                    of control.
                </p>
                <p className="text-1xl pb-2">
                    I'm always focused on growing my skills to become the best
                    developer I can be. Admittedly, I went through University
                    delusional - believing the degree was enough to work in SWE.
                    Upon graduating I was quickly humbled when confronted with
                    just how much I didn't know and quickly sought to make
                    amendments to gaps in knowledge and ability. I did this
                    through personal and collaborative projects, additional
                    coursework, events, and some freelance.
                </p>
                <p>
                    Outside of coding, I enjoy exploring new technology, gaming,
                    3D printing, and socialising with friends.
                </p>
            </div>
        </div>
    );
}
