export function Intro(props) {

    const { headingText, description, buttonText } = props;

    return (
        <div>
            <h1>{headingText}</h1>
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    )
}