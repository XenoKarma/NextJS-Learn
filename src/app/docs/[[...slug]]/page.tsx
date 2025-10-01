/** @format **/

export default function Docs({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params?.slug ?? [];

  let title = "Docs Page";

  if (slug.length === 1) {
    title = `Feature ${slug[0]}`;
  } else if (slug.length === 2) {
    title = `Feature ${slug[0]} Concept ${slug[1]}`;
  } else if (slug.length === 3) {
    title = `Feature ${slug[0]} Concept ${slug[1]} Example ${slug[2]}`;
  }

  return (
    <div>
      <h1>Navbar</h1>
      <p>{title}</p>
      <h2>Footer</h2>
    </div>
  );
}
