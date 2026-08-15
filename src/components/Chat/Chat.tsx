import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { useChat } from '@ai-sdk/react';
import { isTextUIPart, type UIMessage } from 'ai';
import ReactMarkdown from 'react-markdown';

import * as Icons from '../../icons';
import {
    CloseButton,
    EmptyState,
    ErrorBanner,
    Header,
    InputForm,
    MessageBubble,
    MessageList,
    Panel,
    RetryButton,
    SendButton,
    SuggestionChip,
    SuggestionList,
    TextArea,
    Title,
    ToggleButton,
    TypingIndicator,
    Wrapper,
} from './Chat.styles';

const SUGGESTED_QUESTIONS = [
    'Where does Pablo work right now?',
    'What technologies does he use?',
    'How can I get in touch?',
];

/** Texto de un mensaje: concatena solo sus partes de tipo texto. */
function messageText(message: UIMessage): string {
    return message.parts.filter(isTextUIPart).map((part) => part.text).join('');
}

const markdownComponents = {
    p: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
        <a href={href} target={href?.startsWith('#') ? undefined : '_blank'} rel="noreferrer">
            {children}
        </a>
    ),
};

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');

    const { messages, sendMessage, status, error, clearError, regenerate } = useChat();

    const listRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const isBusy = status === 'streaming' || status === 'submitted';

    // Foco al abrir el panel.
    useEffect(() => {
        if (isOpen) {
            textareaRef.current?.focus();
        }
    }, [isOpen]);

    // Esc cierra el panel.
    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Auto-scroll al final en cada mensaje nuevo o token de streaming.
    useEffect(() => {
        const list = listRef.current;
        if (list) list.scrollTop = list.scrollHeight;
    }, [messages, status]);

    const submitMessage = useCallback(
        (text: string) => {
            const trimmed = text.trim();
            if (!trimmed || isBusy) return;
            setInput('');
            void sendMessage({ text: trimmed });
        },
        [isBusy, sendMessage],
    );

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitMessage(input);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submitMessage(input);
        }
    };

    return (
        <Wrapper>
            {isOpen && (
                <Panel role="region" aria-label="Chat about Pablo Grillo">
                    <Header>
                        <Title>Ask about Pablo</Title>
                        <CloseButton onClick={() => setIsOpen(false)} aria-label="Close">
                            <Icons.Close />
                        </CloseButton>
                    </Header>

                    <MessageList ref={listRef} aria-live="polite">
                        {messages.length === 0 ? (
                            <EmptyState>
                                <p>Ask me anything about Pablo&apos;s work, skills or background.</p>
                                <SuggestionList>
                                    {SUGGESTED_QUESTIONS.map((question) => (
                                        <SuggestionChip key={question} type="button" onClick={() => submitMessage(question)}>
                                            {question}
                                        </SuggestionChip>
                                    ))}
                                </SuggestionList>
                            </EmptyState>
                        ) : (
                            messages
                                .filter((message) => message.role === 'user' || message.role === 'assistant')
                                .map((message) => (
                                    <MessageBubble key={message.id} $role={message.role as 'user' | 'assistant'}>
                                        {message.role === 'assistant' ? (
                                            <ReactMarkdown components={markdownComponents}>{messageText(message)}</ReactMarkdown>
                                        ) : (
                                            <p>{messageText(message)}</p>
                                        )}
                                    </MessageBubble>
                                ))
                        )}

                        {status === 'submitted' && (
                            <TypingIndicator aria-label="Pablo's assistant is answering">
                                <span />
                                <span />
                                <span />
                            </TypingIndicator>
                        )}
                    </MessageList>

                    {error && (
                        <ErrorBanner role="alert">
                            <span>Something went wrong. Please try again.</span>
                            <RetryButton
                                type="button"
                                onClick={() => {
                                    clearError();
                                    void regenerate();
                                }}
                            >
                                Retry
                            </RetryButton>
                        </ErrorBanner>
                    )}

                    <InputForm onSubmit={handleFormSubmit}>
                        <TextArea
                            ref={textareaRef}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask a question…"
                            rows={1}
                            disabled={isBusy}
                        />
                        <SendButton type="submit" disabled={!input.trim() || isBusy} aria-label="Send">
                            <Icons.Send />
                        </SendButton>
                    </InputForm>
                </Panel>
            )}

            {!isOpen && (
                <ToggleButton type="button" onClick={() => setIsOpen(true)} aria-label="Ask about Pablo">
                    <Icons.MessageCircle />
                </ToggleButton>
            )}
        </Wrapper>
    );
}
