import './Alert.css'
import PropTypes from 'prop-types';

function Alert({ text , type= 'success'}) {
    return (
        <p role="alert" className={`Alert Alert--${type}`}>
            {text}
        </p>
    );
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error'])
}

export default Alert;