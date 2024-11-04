import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvatar = () => {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src='/logo1.png' />
            <AvatarFallback>
                You
            </AvatarFallback>
        </Avatar>
    );
}

