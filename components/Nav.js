import Link from "next/link";
export default function Nav() {
  return (
    <div
      className="fixed w-screen"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
        borderBottom: "1px solid white",
        background: "rgba(0,0,0,.85)",
      }}
    >
      <h1 style={{ fontSize: "1.25rem" }}>
        <Link href="/">TobyVB</Link>
      </h1>
      <ul style={{ display: "flex", gap: "2em", fontSize: "1.25rem" }}>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="projects">Projects</Link>
        </li>
        <li>
          <Link href="resume">Resume</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
        <li>
          <Link href="github">Github</Link>
        </li>
      </ul>
    </div>
  );
}
