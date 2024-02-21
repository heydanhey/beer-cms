import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import TagEmoji from "./TagEmoji";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug} legacyBehavior>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>
          {post.title}
          <TagEmoji tags={post.tags} />
        </h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
