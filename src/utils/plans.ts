export interface PlanBenefit {
  icon: string;
  text: string;
  subtext: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  cents: string;
  benefits: PlanBenefit[];
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: '19',
    cents: '90',
    benefits: [
      { icon: 'ticket', text: '2 Ingressos', subtext: 'por mês' },
      { icon: 'popcorn', text: '5% de desconto', subtext: 'em comidas' },
      { icon: 'calendar', text: 'Acesso antecipado', subtext: 'em pré-vendas' },
    ],
  },
  {
    id: 'plus',
    name: 'PLUS',
    price: '59',
    cents: '90',
    benefits: [
      { icon: 'ticket', text: '6 Ingressos', subtext: 'por mês' },
      { icon: 'popcorn', text: '15% de desconto', subtext: 'em comidas' },
      { icon: 'calendar', text: 'Acesso antecipado', subtext: 'em pré-vendas' },
      { icon: 'creditCard', text: 'Sem taxa online', subtext: 'na compra de ingressos' },
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '119',
    cents: '90',
    benefits: [
      { icon: 'ticket', text: 'Ilimitado', subtext: 'filmes selecionados' },
      { icon: 'popcorn', text: '30% de desconto', subtext: 'em comidas' },
      { icon: 'calendar', text: 'Acesso antecipado', subtext: 'em pré-vendas' },
      { icon: 'creditCard', text: 'Sem taxa online', subtext: 'na compra de ingressos' },
      { icon: 'vip', text: 'Acesso VIP', subtext: 'conforto exclusivo' },
    ],
  },
]
