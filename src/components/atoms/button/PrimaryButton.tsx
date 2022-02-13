import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    disbled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, disbled = false, loading = false, onClick } = props;
    return (
        <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
            disabled={disbled || loading}
            isLoading={loading}
        >
            {children}
        </Button>
    )
});