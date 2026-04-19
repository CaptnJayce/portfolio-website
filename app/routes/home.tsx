import { type MetaFunction, type LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faItchIo,
  faDiscord,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { supabase, type Project, type Avatar } from "~/lib/supabase";

export const meta: MetaFunction = () => {
  return [
    { title: "CaptnJayce" },
    { name: "description", content: "Portfolio Website for CaptnJayce" },
  ];
};

export async function loader(_args: LoaderFunctionArgs) {
  const [avatarResult, projectsResult] = await Promise.all([
    supabase.from("avatar").select("*").limit(1).maybeSingle(),
    supabase
      .from("project")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

  if (projectsResult.error) {
    console.error("Projects fetch error:", projectsResult.error);
  }

  return {
    avatar: avatarResult.data as Avatar | null,
    projects: (projectsResult.data ?? []) as Project[],
  };
}

export default function Home() {
  const { avatar, projects } = useLoaderData<typeof loader>();

  const projectsWithDuration = projects.map((project) => {
    let durationDays: number | null = null;

    if (project.started_at && project.finished_at) {
      const ms =
        new Date(project.finished_at).getTime() -
        new Date(project.started_at).getTime();
      durationDays = Math.floor(ms / (1000 * 60 * 60 * 24));
    }

    return { ...project, durationDays };
  });

  const getRepoIcon = (url: string) => {
    if (url.includes("gitlab")) return faGitlab;
    return faGithub;
  };

  return (
    <div className="min-h-screen bg-[#16161C] text-[#FDF0ED] font-roboto">
      <nav className="flex justify-center gap-40 mb-10 font-tiny5 text-[56px]">
        <p>Casey Jestico</p>
        <p>Game &amp; Web Developer</p>
      </nav>

      <div className="container mx-auto mb-10">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-6xl grid grid-cols-2">
            <div className="self-center flex flex-col justify-center">
              <p className="text-[20px] pb-5">
                C++ | Typescript | Linux
              </p>
              <p className="text-[20px] pb-5">
                Hi! I&apos;m a web and game developer with a strong
                focus on creativity. I specialize in C++ and
                Typescript, but I work in a variety of languages due
                to modding different games x)
              </p>
              <p className="text-[32px] font-tiny5">Upcoming...</p>
              <p className="text-[20px] pb-5">
                Currently working on Halal Games Index™
                <br></br>
              </p>
              <div className="flex gap-x-6 items-center text-[var(--colour-highlight)]">
                <a
                  href="https://gitlab.com/CaptnJayce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 duration-200 ease-in-out"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <FontAwesomeIcon icon={faGitlab} style={{ width: "2.5rem", height: "2.5rem" }} />
                </a>
                <a
                  href="https://github.com/CaptnJayce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 duration-200 ease-in-out"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ width: "2.5rem", height: "2.5rem" }} />
                </a>
                <a
                  href="https://www.discord.com/users/775894736623239260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 duration-200 ease-in-out"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <FontAwesomeIcon icon={faDiscord} style={{ width: "2.5rem", height: "2.5rem" }} />
                </a>
                <a
                  href="https://captnjayce.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 duration-200 ease-in-out"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <FontAwesomeIcon icon={faItchIo} style={{ width: "2.5rem", height: "2.5rem" }} />
                </a>
              </div>
            </div>

            <img
              src={avatar?.image_url ?? ""}
              alt="avatar"
              width="300"
              height="300"
              className="justify-self-end border-3 shadow-lg shadow-[#E84A72] border-[var(--colour-border)] rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-6xl">
            <p className="text-[40px] font-tiny5">Projects</p>
            <div className="mt-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsWithDuration.map((project) => (
                <div
                  key={project.id}
                  className="border-2 border-[var(--colour-highlight)] rounded-lg p-4 shadow-[#E84A72] hover:shadow-lg transition flex flex-col h-full"
                >
                  <div className="w-full h-48 object-cover rounded">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded"
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center rounded text-[24px] font-tiny5">
                        No image available :(
                      </div>
                    )}
                  </div>
                  <h2 className="mt-2 text-[24px] font-tiny5 flex items-center">
                    {project.title}
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <FontAwesomeIcon
                        icon={getRepoIcon(project.project_url)}
                        className="w-8 hover:text-[var(--colour-highlight)] duration-200 ease-in-out"
                      />
                    </a>
                  </h2>
                  <div className="flex items-center justify-between text-sm">
                    <span>
                      {project.is_collaborative
                        ? `Team Project | ${project.collaborators?.join(", ")}`
                        : `Solo Project`}
                    </span>
                    {project.durationDays !== null ? (
                      <span>Duration: {project.durationDays} days</span>
                    ) : project.started_at ? (
                      <span>Work in Progress</span>
                    ) : null}
                  </div>
                  <p className="text-[18px] mt-2">{project.description}</p>
                  <div className="flex-grow" />
                  {project.tools_used?.length > 0 && (
                    <p className="text-sm mt-2">Tools: {project.tools_used.join(", ")}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-6xl font-tiny5">
            <p className="text-[40px]">Expertise</p>
            <div className="text-[24px] flex flex-wrap gap-4">
              <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                C++
              </p>
              <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                Typescript
              </p>
              <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                Linux
              </p>
              <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                Aseprite
              </p>
              <p className="border-2 border-[var(--colour-border)] rounded-md pr-1 pl-1">
                Git
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-15 pb-20">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-6xl">
            <p className="text-[40px] font-tiny5">About Me</p>
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

      <footer className="flex flex-col items-center max-w-7xl w-full mx-auto font-tiny5 text-[24px]">
        <div className="grid grid-cols-2 w-full">
          <div className="justify-self-start">
            <p>@2025 Casey Jestico</p>
          </div>
          <div className="justify-self-end">
            <p>Other fun text here</p>
          </div>
        </div>
      </footer>
    </div>
  );
}