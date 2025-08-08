import { useEffect, useState } from "react";
import ToolCard from "./components/ToolCard";

function App() {
  const [tools, setTools] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔁 Fetch tool data from API on page load
  useEffect(() => {
    fetch("https://your-api-endpoint.com/tools") // ⬅️ Replace with your actual API URL
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch((err) => console.error("Failed to load tools:", err));
  }, []);

  // 📝 Store favorites in localStorage
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

      {tools.length === 0 ? (
        <p>Loading tools...</p>
      ) : (
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
      )}
    </div>
  );
}

export default App;
