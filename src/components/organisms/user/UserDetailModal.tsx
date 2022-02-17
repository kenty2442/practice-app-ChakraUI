import { useState, memo, VFC, useEffect, ChangeEvent } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack
} from "@chakra-ui/react";

import { User } from "../../../types/api/user"
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    isAdmin?: boolean;
}


export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, onClose, isAdmin } = props;

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUserName(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    }, [user])

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
        setUserName(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value);

    const onClickUpdate = () => alert('e')
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInRight">
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input onChange={onChangeUserName} value={userName} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input onChange={onChangeName} value={name} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input onChange={onChangeEmail} value={email} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input onChange={onChangePhone} value={phone} isReadOnly={!isAdmin} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin && (
                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                    </ModalFooter>
                )}

            </ModalContent>
        </Modal>
    )
});