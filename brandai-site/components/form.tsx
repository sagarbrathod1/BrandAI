interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    chLimit: number;
}

const Form: React.FC<FormProps> = (props) => {

    const isPromptValid = props.prompt.length < props.chLimit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.chLimit) {
          props.setPrompt(text);
        }
      };

    return (
        <>
            <p>
                Please input your "product/brand" and I will generate a tagline and keywords for you.
            </p>
            <input 
                type="text" 
                placeholder="i.e. coffee" 
                value={props.prompt}
                onChange={(e) => updatePromptValue(e.currentTarget.value)}
            ></input>
            <div>
                {props.prompt.length}/{props.chLimit}
            </div>
            <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Submit</button>
        </>
    );
};

export default Form;