'use client';
import React, {FC, useState} from 'react';
import {Conversation} from "@prisma/client";
import {useRouter} from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import {MdOutlineGroup} from "react-icons/md";
import ConversationBox from "@/app/conversations/components/ConversationBox";

interface ConversationListProps {
    initialItems: Conversation[];
}

const ConversationList: FC<ConversationListProps> = ({initialItems}) => {
    const [items, setItems] = useState(initialItems);
    const router = useRouter();
    const {isOpen, conversationId} = useConversation();

    return (

        <aside className={clsx(`fixed 
        inset-y-0 
        pb-20 
        lg:pb-0 
        lg:left-20 
        lg:w-80 
        lg:block 
        overflow-y-auto 
        border-r 
        border-gray-200`, isOpen ? 'hidden' : 'block w-full left-0')}>
            <div className="px-5">

                <div
                    className="flex
                justify-between
                items-center
                mb-4
                pt-4
                "
                >
                    <div
                        className="
                    text-2xl
                    font-bold
                    text-neutral-800
                    "
                    >
                        Messages
                    </div>

                    <div>
                        <MdOutlineGroup/>
                    </div>
                </div>
                {items.map((item) => (
                    <ConversationBox
                        key={item.id}
                        data={item}
                        selected={conversationId === item.id}
                    />
                ))}
            </div>
        </aside>
    );
};

export default ConversationList;