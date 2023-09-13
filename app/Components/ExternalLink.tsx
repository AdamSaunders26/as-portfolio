import { FiExternalLink } from "react-icons/fi";

export default function ExternalLink({ url }: { url: string }) {
  return (
    <a target="_blank" href={url}>
      <FiExternalLink className="m-1 h-6 w-6" />
    </a>
  );
}
