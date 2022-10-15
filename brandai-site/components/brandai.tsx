import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/openai.svg";

const BrandAI: React.FC = () => {

    const chLimit: number = 32;

    const ENDPOINT: string = "https://ok4bu1kov0.execute-api.us-east-2.amazonaws.com/prod/generate_snippet_and_keywords";
    
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
            .then((res) => res.json())
            .then(onResult)
    };

    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true);
        setIsLoading(false);
    };

    const onReset = () => {
        setPrompt("");
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = <Results snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt} />
    } else {
        displayedElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} chLimit={chLimit} />;
    }

    const gradientTextStyle = "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-medium w-fit mx-auto";


    return (
        <div className="h-screen flex">
            <div className="max-w-md m-auto p-2">
                <div className="bg-slate-800 p-6 rounded-md text-white">
                    <div className="text-center my-6">
                        <Image src={logo} width={65} height={65} />
                        <h1 className={gradientTextStyle + " text-4xl"}>
                            Brand AI
                        </h1>
                    </div>
                    {displayedElement}
                </div>
            </div>
        </div>
    );
}

export default BrandAI;