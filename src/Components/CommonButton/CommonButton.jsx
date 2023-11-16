import PropTypes from 'prop-types'

const CommonButton = ({ btnText, btnIcon }) => {
    return (
        <button className="bg-buttonBG hover:bg-hoverButtonBG  hover:translate-y-3  hover:scale-110 p-3 px-5 text-white uppercase font-bold font-Cinzel rounded-sm flex gap-2 justify-center items-center transition-all duration-300">
            {btnText}{btnIcon}
        </button>
    )
}

CommonButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    btnIcon: PropTypes.object.isRequired,
}

export default CommonButton