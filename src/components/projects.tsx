import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "~/server/db";

export default async function Projects() {
    const projects = await db.project.findMany({
        orderBy: { createdAt: "desc" },
    });

    const projectsWithDuration = projects.map((project) => {
        let durationDays: number | null = null;

        if (project.startedAt && project.finishedAt) {
            const ms =
                project.finishedAt.getTime() - project.startedAt.getTime();
            durationDays = Math.floor(ms / (1000 * 60 * 60 * 24));
        }

        return { ...project, durationDays };
    });

    const getRepoIcon = (url: string) => {
        if (url.includes("gitlab")) return faGitlab;
        return faGithub;
    };

    return (
        <div className="container mx-auto mb-10">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-6xl font-[roboto]">
                    <p className="text-[40px] font-[Tiny5]">Projects</p>
                    <div className="mt-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsWithDuration.map((project) => (
                            <div
                                key={project.id}
                                className="border-2 border-[var(--colour-highlight)] rounded-lg p-4 shadow-[#E84A72] hover:shadow-lg transition flex flex-col h-full"
                            >
                                <div className="w-full h-48 object-cover rounded">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded"
                                        />
                                    ) : (
                                        <div className="w-full h-48 flex items-center justify-center rounded text-48px font-[tiny5]">
                                            No image available :(
                                        </div>
                                    )}
                                </div>
                                <h2 className="mt-2 text-[24px] font-[Tiny5] flex items-center">
                                    {project.title}
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto"
                                    >
                                        <FontAwesomeIcon
                                            icon={getRepoIcon(
                                                project.projectUrl,
                                            )}
                                            className="w-8 hover:text-[var(--colour-highlight)] duration-200 ease-in-out"
                                        />
                                    </a>
                                </h2>
                                <div className="flex items-center justify-between text-sm">
                                    <span>
                                        {project.isCollaborative
                                            ? `Team Project | ${project.collaborators.join(", ")}`
                                            : `Solo Project`}
                                    </span>
                                    {project.durationDays !== null ? (
                                        <span>
                                            Duration: {project.durationDays}{" "}
                                            days
                                        </span>
                                    ) : project.startedAt ? (
                                        <span>Work in Progress</span>
                                    ) : null}
                                </div>
                                <p className="text-[18px] mt-2">
                                    {project.description}
                                </p>
                                <div className="flex-grow" />
                                {project.toolsUsed?.length > 0 && (
                                    <p className="text-sm mt-2">
                                        Tools: {project.toolsUsed.join(", ")}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
