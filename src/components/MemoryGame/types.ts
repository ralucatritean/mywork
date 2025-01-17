import { LucideIcon } from 'lucide-react';

export interface CardType {
  id: number;
  Icon: LucideIcon;
}

export interface CardProps {
  isFlipped: boolean;
  Icon?: LucideIcon;
  onClick: () => void;
}