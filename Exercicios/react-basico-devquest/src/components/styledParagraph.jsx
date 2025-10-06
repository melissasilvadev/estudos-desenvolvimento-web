const StyledParagraph = ({text, color}) => {
    const textUpper = text.toUpperCase();
    return <p style={{color: color}}>{textUpper}</p>
}

export default StyledParagraph