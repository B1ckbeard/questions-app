import { memo, useMemo } from "react";
import styles from "./styles.module.css";
import DOMPurify from "dompurify";

interface Props {
  answer: string;
}

const QuestionHtml = memo(({ answer }: Props) => {
  const cleanHtml = useMemo(() => {
    return DOMPurify.sanitize(answer, {
      ALLOWED_TAGS: [
        "p",
        "strong",
        "em",
        "b",
        "i",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "a",
        "span",
        "div",
        "br",
        "hr",
      ],
      ALLOWED_ATTR: ["class", "href", "target", "rel", "style"],
      ALLOW_DATA_ATTR: false,
    });
  }, [answer]);

  return (
    <div
      className={styles.answer}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
});

export default QuestionHtml;
