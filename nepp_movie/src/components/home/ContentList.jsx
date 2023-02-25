import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { tmdbAxios } from "../../api/tmdb";
import ContentItem from "./ContentItem";

function ContentList({ title, initialState }) {
  const [filters, setFilters] = useState(initialState);
  const [items, setItems] = useState([]);

  // const [program, setProgram] =

  const handleToggle = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  const fetchData = async (url) => {
    // const res = await tmdbAxios.get("/trending/movie/week");
    // const { results } = res.data;
    // cosnt results = res.data.results

    // const { data } = await tmdbAxios.get("/trending/movie/week");
    // const { results } = data;

    const {
      data: { results },
    } = await tmdbAxios.get(url);

    setItems(results);
  };

  useEffect(() => {
    const { url } = filters.find((filter) => filter.active);
    fetchData(url);
  }, [filters]);

  return (
    <Container>
      <ContentHeader>
        <h3>{title}</h3>
        <FilterList>
          {filters.map((e) => (
            <FilterItem
              active={e.active}
              key={e.id}
              onClick={() => handleToggle(e.id)}
            >
              {e.text}
            </FilterItem>
          ))}
        </FilterList>
      </ContentHeader>
      <ContentWrapper>
        {items.map((e) => (
          // <img src ={e.poster_path          } />

          <ContentItem key={e.id} item={e} />
        ))}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const FilterList = styled.ul`
  display: flex;
  /* border: 1px solid black; */
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid black;

  user-select: none;
  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: #fff;
    `}
`;

const ContentWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  /* overflow-x: auto; */
  gap: 20px;
`;

export default ContentList;
