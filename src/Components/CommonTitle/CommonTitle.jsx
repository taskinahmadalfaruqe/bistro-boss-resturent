
import PropTypes from 'prop-types'

const CommonTitle = ({ hedding, subdedding }) => {
    return (
        <div className='mt-5 mx-auto text-center max-w-fit space-y-4 mb-10'>
            <h4 className="text-HeddingColor text-xl">---{subdedding}---</h4>
            <h2 className='text-4xl py-3 font-semibold uppercase border-y border-BlackColor '>{hedding}</h2>
        </div>
    )
}

CommonTitle.propTypes = {
    hedding: PropTypes.string.isRequired,
    subdedding: PropTypes.string.isRequired,
}

export default CommonTitle