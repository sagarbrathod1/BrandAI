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

  let statusColor = "text-slate-500";
  let statusText = null;
  if (!isPromptValid) {
    statusColor = "text-red-400";
    statusText = `Input must be less than ${props.chLimit} characters.`;
  }

  return (
    <>
      <div className="mb-6 text-slate-400 text-center">
        <p>
          Please input your "product/brand" and I will generate an upbeat
          tagline and SEO keywords for you.
        </p>
      </div>
      <input
        className="p-2 w-full rounded-md focus:outline-teal-400 focus:outline text-slate-700"
        type="text"
        placeholder="i.e. yoga mat"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + " flex justify-between my-2 mb-6 text-sm"}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.chLimit}
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-emerald-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg"
        onClick={props.onSubmit}
        disabled={props.isLoading || !isPromptValid}
      >
        Submit
      </button>
      <div className="text-red-500 my-4 text-center">
        Apologies, but this app is no longer functional. 😅
      </div>
      <div className="text-green-500 my-4 text-center">
        Check out the source code{" "}
        <a
          href="https://github.com/sagarbrathod1/BrandAI"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </div>
      <footer className="mt-6 font-thin text-xs text-slate-400 text-center">
        Powered by OpenAI
      </footer>
    </>
  );
};

export default Form;
