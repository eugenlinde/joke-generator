import { Joke } from "../types";

interface ButtonProps {
    text: string
    value: string
    callback: (argument: Joke) => void
}

const Button = ({text, callback, value}: ButtonProps): JSX.Element => {
    return <div data-testid="test-button">
        <button
            onClick={() => callback({ value: value })}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
            {text}
        </button>
    </div>
}

export default Button