import ContentList from "../home/ContentList";

const filters = {
  tranging: [
    { id: 1, text: "movie", active: true, url: "/trending/movie/week" },
    { id: 2, text: "tv", active: false, url: "/trending/tv/week" },
    // { id: 3, text: "people", active: false, url: "/trending/person/week" },
  ],
  popular: [
    { id: 1, text: "tv", active: true, url: "/tv/popular" },
    { id: 2, text: "movie", active: false, url: "/movie/popular" },
  ],
};

function Home() {
  return (
    <div>
      <ContentList title="트렌딩" initialState={filters.tranging} />
      <ContentList title="뭐가 인기 있니" initialState={filters.popular} />
    </div>
  );
}

export default Home;
