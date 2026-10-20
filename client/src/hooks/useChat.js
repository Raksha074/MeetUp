import { useCallback, useEffect, useRef, useState } from "react"
import { socket } from "../config/socket";

export const useChat = (roomId, user) => {
    const [messages, setMessages] = useState([])
    const [unreadCount, setUnreadCount] = useState(0);
    const [isChatOpen, setIsChatOpen] = useState(false)

    const isChatOpenRef = useRef(isChatOpen);
    useEffect(() => {
        isChatOpenRef.current = isChatOpen;
    }, [isChatOpen])

    useEffect(() => {
        if (!roomId) return;
        const handleReceiveMessage = (message) => {
            setMessages((prev) => [...prev, message]);
            if (!isChatOpenRef.current) {
                setUnreadCount((prev) => prev + 1);
            }
        }
        socket.on("receive-message", handleReceiveMessage)

        return () => {
            socket.off("receive-message", handleReceiveMessage)
        }
    }, [roomId])

    const sendMessage = useCallback(
        async (text, file = null) => {
            console.log("1. Send button clicked, text is:", text);
            console.log("2. User data is:", user);
            console.log("3. Room ID is:", roomId);
            console.log("4. File is:", file);

            // Check if user is missing
            if (!user) {
                console.log("❌ ERROR: Message not sent because user data is missing!");
                return;
            }

            // Check if both text and file are empty
            if (!text.trim() && !file) {
                console.log("❌ ERROR: Message not sent because both text and file are empty!");
                return;
            }

            let fileData = null;
            if (file) {
                // Convert file to base64 for transmission
                const reader = new FileReader();
                fileData = await new Promise((resolve) => {
                    reader.onload = (e) => {
                        resolve({
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            data: e.target.result
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }

            const message = {
                id: Date.now().toString(),
                text: text.trim(),
                senderName: user.name || user.fullName || "You",
                senderId: user.id,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                file: fileData
            }

            console.log("✅ SUCCESS: Sending message to backend:", message);
            socket.emit("send-message", { roomId, message })
        },
        [roomId, user] // Updated dependency array
    );

    const toggleChat = useCallback(() => {
        setIsChatOpen((prev) => {
            if (!prev) setUnreadCount(0);
            return !prev;
        })
    }, [])

    return {
        messages,
        sendMessage,
        unreadCount,
        isChatOpen,
        toggleChat
    }
}