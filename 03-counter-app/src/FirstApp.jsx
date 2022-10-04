import PropTypes from 'prop-types';

export const FisrtApp = ({ title, subTitle }) =>{

    return (
        <>
            <h1>{ title }</h1>
            <h5>{ subTitle }</h5>
        </>
    );
}

FisrtApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FisrtApp.defaultProps = {
    title:'Sin titulo',
    subTitle:'Sin subtitulo'
}