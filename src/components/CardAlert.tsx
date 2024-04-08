import Icon from '../assets/Icon';

const CardAlert = ({ text }: { text: string }) => {
    return (
        <div
            className="flex min-h-screen items-center justify-center"
            data-testid="test-card-alert"
        >
            <div className="rounded-xl ring-1 ring-gray-200 px-16 py-14">
                <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full p-4">
                        <Icon />
                    </div>
                </div>
                <p className="w-[230px] text-center font-normal text-gray-600">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default CardAlert;
