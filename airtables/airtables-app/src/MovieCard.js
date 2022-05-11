const MovieCard = ({ title, year, description, imageURL }) => (
  <div className='col'>
    <div className='card-deck'>
      <div className='card'>
        <img className='card-img-top' src={imageURL[0].url} alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>
            <small className='text-muted'>{year}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default MovieCard;
