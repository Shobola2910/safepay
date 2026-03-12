import { ScrollView } from 'react-native';
import { cards } from '@/data/mock';
import { PaymentCard } from './PaymentCard';

export function CardCarousel() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cards.map((card) => (
        <PaymentCard key={card.id} card={card} />
      ))}
    </ScrollView>
  );
}
