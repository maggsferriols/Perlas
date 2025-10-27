
export type Screen = 'Home' | 'Safety' | 'Wallet' | 'Comms' | 'More';

export interface NavItem {
  id: Screen;
  label: string;
  icon: React.ElementType;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
