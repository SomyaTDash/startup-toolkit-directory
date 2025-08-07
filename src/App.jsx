import { useEffect, useState } from "react";
import toolsData from "./data/tools.json";
import ToolCard from "./components/ToolCard";

function App() {
  const [tools, setTools] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setTools(toolsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (toolName) => {
    setFavorites((prev) =>
      prev.includes(toolName)
        ? prev.filter((name) => name !== toolName)
        : [...prev, toolName]
    );
  };

  return (
    <div>
      <h1>🚀 Startup Toolkit Directory</h1>
      <div className="tool-list">
        {tools.map((tool) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            isFavorite={favorites.includes(tool.name)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
