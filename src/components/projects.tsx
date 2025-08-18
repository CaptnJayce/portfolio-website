import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "~/server/db";

export default async function Projects() {
    // fetch projects
    const projects = await db.project.findMany({
        orderBy: { createdAt: "desc" },
    });

    // calculate days / may remove
    const projectsWithDuration = projects.map((project) => {
        let durationDays: number | null = null;

        if (project.startedAt && project.finishedAt) {
            const ms =
                project.finishedAt.getTime() - project.startedAt.getTime();
            durationDays = Math.floor(ms / (1000 * 60 * 60 * 24));
        }

        return { ...project, durationDays };
    });

    return (
        <div className="container mx-auto px-8 pb-20">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-5xl font-[roboto]">
                    <p className="text-[40px] justify-self-start font-[Tiny5]">
                        Projects
                    </p>
                    <div className="mt-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsWithDuration.map((project) => (
                            <div
                                key={project.id}
                                className="border-2 border-[var(--colour-highlight)] rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full"
                            >
                                {project.imageUrl && (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                )}
                                <h2 className="mt-4 text-xl font-bold flex items-center">
                                    {project.title}
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto hover:opacity-70 transition-opacity"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="w-8"
                                        />
                                    </a>
                                </h2>
                                <div className="flex items-center justify-between text-sm">
                                    <span>
                                        {project.isCollaborative
                                            ? `Team Project | ${project.collaborators.join(", ")}`
                                            : `Solo Project | ${project.author}`}
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
                                <p className="text-md mt-2">
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
