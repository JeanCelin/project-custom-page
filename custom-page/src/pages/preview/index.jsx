import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter();
  const { navbar, main, footer } = router.query;

  return (
    <div>
      <h1>Preview Your Page</h1>
      <div>{navbar && <div dangerouslySetInnerHTML={{ __html: navbar }} />}</div>
      <div>{main && <div dangerouslySetInnerHTML={{ __html: main }} />}</div>
      <div>{footer && <div dangerouslySetInnerHTML={{ __html: footer }} />}</div>
    </div>
  );
}
