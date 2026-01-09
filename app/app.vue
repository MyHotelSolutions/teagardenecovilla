<template>
  <UApp>
    <NuxtPage />
    <ContactButtons></ContactButtons>
  </UApp>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const { default: Chatbot } = await import(
    'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js'
  )

  Chatbot.init({
    chatflowid: "060546c3-5e99-48b2-bdda-84bebfd60e1f",
    apiHost: "http://51.79.254.40:3000",
    chatflowConfig: {
            /* Chatflow Config */
        },
        observersConfig: {
            /* Observers Config */
        },
        theme: {
            button: {
                backgroundColor: 'oklch(59.6% 0.145 163.225)',
                right: 75,
                bottom: 60,
                size: 58,
                dragAndDrop: true,
                iconColor: 'white',
                customIconSrc: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/icons/chatbot-speech-bubble.svg',
                autoWindowOpen: {
                    autoOpen: true,
                    openDelay: 2,
                    autoOpenOnMobile: false
                }
            },
            tooltip: {
                showTooltip: true,
                tooltipMessage: 'Do you want help ?',
                tooltipBackgroundColor: 'oklch(43.7% 0.078 188.216)',
                tooltipTextColor: 'white',
                tooltipFontSize: 16
            },
            disclaimer: {
                title: 'Disclaimer',
                textColor: 'black',
                buttonColor: '#3b82f6',
                buttonText: 'Start Chatting',
                buttonTextColor: 'white',
                blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                backgroundColor: 'white'
            },
            customCSS: ``,
            chatWindow: {
                showTitle: true,
                showAgentMessages: true,
                title: 'Customer suport',
                // titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                welcomeMessage: 'Hello! Welcome to the Tea Garden Eco Villa Customer support. what do you what to know about us ?',
                errorMessage: 'Sorry. something go wrong. try again leter or dial +44 2357 4567 45',
                backgroundColor: '#ffffff',
                backgroundImage: 'enter image path or link',
                height: 550,
                width: 400,
                fontSize: 14,
                starterPrompts: [
                    "Where tea garden eco villa located in?"
                ],
                starterPromptFontSize: 14,
                clearChatOnReload: false,
                sourceDocsTitle: 'Sources:',
                renderHTML: true,
                botMessage: {
                    backgroundColor: '#f7f8ff',
                    textColor: '#303235',
                    showAvatar: false,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
                },
                userMessage: {
                    backgroundColor: 'oklch(59.6% 0.145 163.225)',
                    textColor: '#ffffff',
             showAvatar: false,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
                },
                textInput: {
                    placeholder: 'What you want to know ?',
                    backgroundColor: '#ffffff',
                    textColor: '#303235',
                    sendButtonColor: 'oklch(70.4% 0.14 182.503)',
                    maxChars: 60,
                    maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                    autoFocus: true,
                    sendMessageSound: true,
                    // sendSoundLocation: 'send_message.mp3',
                    receiveMessageSound: true,
                    receiveSoundLocation: 'receive_message.mp3'
                },
                feedback: {
                    color: '#303235'
                },
                dateTimeToggle: {
                    date: true,
                    time: true
                },
                footer: {
                    textColor: 'oklch(70.4% 0.14 182.503)',
                    text: 'Powered by',
                    company: 'myhotel solusions',
                    companyLink: 'https://myhotel.website'
                }
            }
          }
  })
})
</script>