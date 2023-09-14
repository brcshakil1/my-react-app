import PropTypes from 'prop-types'

const MyButton = ({count, onClick}) => {
    console.log(count, onClick)
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={onClick}>Count {count} times</button>
        </div>
    );
};

MyButton.propTypes = {
    count: PropTypes.number,
    onClick: PropTypes.func
}

export default MyButton;