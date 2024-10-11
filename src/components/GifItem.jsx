import { PropTypes } from 'prop-types';

export const GifItem = ({ url, title, description }) => {
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={url} alt={description} width={300} height={300} style={{objectFit: 'cover'}}/>
        </div>
        {/* <div className='card-tags'>
            {
                tags.map( (tag, i) => 
                {
                    if(i >= 3) return false;
                    return <span key={tag.replace(/ /g, "_")} className='tag'>{tag.replace(/ /g, "_")}</span>
                })
            }
        </div> */}
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}