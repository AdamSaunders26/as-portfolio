import { AiFillGithub } from "react-icons/ai";

export default function GithubLink({ url }: { url: string }) {
  return (
    <a target="_blank" href={url}>
      <AiFillGithub className="h-8 w-8" />
    </a>
  );
}
