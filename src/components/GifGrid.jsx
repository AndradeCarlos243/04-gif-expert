import PropTypes from 'prop-types';
import { GifItem } from '../components';
import { useFetchGifs } from '../hooks';

export const GifGrid = ({ query, category }) => {
    const { images, isLoading } = useFetchGifs(query);

    return (
        <>
            <h3>
                { category }
            </h3>
            { isLoading && <p>Cargando...</p> }
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                        key={ image.id }
                        {... image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;

GifGrid.propTypes = {
    query: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}