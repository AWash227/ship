import React, { useEffect } from "react";
import "./App.css";
import { PortfolioItem } from "./components/PortfolioItem";
import styled from "styled-components";

const MainURL = "https://api.github.com";

const defaultPorts = [
  {
    name: "",
    description: "",
    image: "",
    owner: { avatar_url: "" },
    id: 1,
    url: "",
    language: "Javascript"
  }
];

const PortfolioItems = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
`;
const App: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = React.useState(defaultPorts);

  useEffect(() => {
    fetch(`${MainURL}/users/AWash227/repos`)
      .then(response => response.json())
      .then(result => {
        setPortfolioItems([...result]);
        console.log(result);
      });
  }, []);

  return (
    <div className="App">
      <PortfolioItems>
        {portfolioItems.map((portfolioItem: any) => (
          <PortfolioItem
            key={portfolioItem.id}
            url={portfolioItem.html_url}
            date={portfolioItem.created_at}
            update={portfolioItem.updated_at}
            name={portfolioItem.name}
            description={portfolioItem.description}
            image={portfolioItem.owner.avatar_url}
            language={portfolioItem.language}
          />
        ))}
      </PortfolioItems>
    </div>
  );
};

export default App;
