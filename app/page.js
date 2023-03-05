// import Movie from "./Movie";
import { Graph } from "react-github-activity-calendar";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  console.log(res);

  // GITHUB GRAPH
  const githubApiKey = ""; // <your-github-api-key>
  const githubUserName = "TobyVB"; // <github-username>
  const bgcolor = "";
  const textColor = "";

  return (
    <main>
      <div>
        <h1 className="text-4xl p-20">some text </h1>
      </div>
      {/* <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        lacus dui, luctus sed nisl non, pretium viverra ipsum. Vivamus ipsum ex,
        volutpat non molestie quis, eleifend at justo. Aliquam vitae lacus nibh.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Graph
        userName={githubUserName}
        backgroundColor={bgcolor}
        githubApiKey={githubApiKey}
        color={textColor}
      />
    </main>
  );
}
