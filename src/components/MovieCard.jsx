const MovieCard = ({title, posterUrl, rating}) => {
    return(
        <div className="movie-card" style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '10px',
            margin: '10px',
            maxWidth: '200px'
          }}>
            <img src={posterUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
            <h3>{title}</h3>
            <p>Note : {rating}/5</p>
        </div>
    )
}

export default MovieCard;