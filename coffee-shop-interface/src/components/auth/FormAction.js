export default function FormAction({
    handleSubmit,
    type="Button",
    action="submit",
    text
}){
    return (
        <>
            {
                type === "Button" ?
                <button
                    type={action}
                    className="my-4 group relative mx-auto"
                    onClick={handleSubmit}
                >
                    {text}
                </button>
                :
                <></>
            }
        </>
    );
};