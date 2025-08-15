import { db } from "~/server/db";

export default async function HomePage() {
    const posts = await db.post.findMany();
    console.log(posts);

    const projects = await db.project.findMany();
    console.log(projects);

    return <div></div>;
}
