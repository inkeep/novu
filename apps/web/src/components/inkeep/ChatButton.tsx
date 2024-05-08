import * as inkeepEmbed from '@inkeep/widgets-embed';
import { useRef, useEffect } from 'react';

const baseSettings = {
  apiKey: process.env.INKEEP_INTEGRATION_API_KEY,
  integrationId: process.env.INKEEP_INTEGRATION_ID,
  organizationId: process.env.INKEEP_ORGANIZATION_ID,
  organizationDisplayName: 'Novu',
  primaryBrandColor: '#f8247c',
};

const inkeepChatButtonProps = {
  baseSettings: {
    ...baseSettings,
  },
  modalSettings: {
    // optional typeof InkeepModalSettings
  },
  searchSettings: {
    // optional typeof InkeepSearchSettings
  },
  aiChatSettings: {
    // optional typeof InkeepAIChatSettings
    botAvatarSrcUrl: '/img/inkeep-logo.svg',
    quickQuestions: ['Example question 1?', 'Example question 2?', 'Example question 3?'],
  },
};

export const ChatButton = () => {
  const chatButtonRef = useRef<any>(null);

  useEffect(() => {
    const inkeep = inkeepEmbed.Inkeep(baseSettings);
    chatButtonRef.current = inkeep.embed({
      componentType: 'ChatButton',
      targetElement: '#chat-button',
      colorModeSync: {
        observedElement: document.documentElement,
        isDarkModeCallback: (el) => {
          return (el as HTMLElement).classList.contains('dark');
        },
        colorModeAttribute: 'class',
      },
      properties: inkeepChatButtonProps,
    });
  }, []);

  return <div id="chat-button"></div>;
};
