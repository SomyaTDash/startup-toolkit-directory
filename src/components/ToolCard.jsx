function ToolCard({ tool, isFavorite, toggleFavorite }) {
  return (
    <div className="tool-card">
      <img src={tool.logo} alt={tool.name} width="80" />
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      <p>⭐ {tool.rating}</p>
      <button onClick={() => toggleFavorite(tool.name)}>
        {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
      </button>
    </div>
  );
}

export default ToolCard;
