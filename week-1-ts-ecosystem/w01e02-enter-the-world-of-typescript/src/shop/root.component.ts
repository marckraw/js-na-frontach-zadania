import { div } from '../framework/dom-creators.js'
import { cartPanel } from './cart-panel.component.js'
import { hero } from './hero.component.js'

interface Price {
  value: number;
  currency: 'PLN' | 'USD';
}

interface Item {
  name: string;
  amount: number;
  unit: 'kg' | 'g';
  price: Price;
}

const items: Item[] = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: 'PLN' },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: 'PLN' },
  },
]

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
