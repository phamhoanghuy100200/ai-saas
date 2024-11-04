import Image from "next/image";

interface EmptyProps {
    label: string;
}


export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className=" h-full p-20 flex flex-col items-center justify-center">
            <div className=" relative h-56 w-56">
                <Image
                    fill
                    src="/empty1.png"
                    alt="empty"
                />
            </div>
            <p className="text-muted-foreground  text-center text-xl">
                {label}
            </p>

        </div>
    );
}

