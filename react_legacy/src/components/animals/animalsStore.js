const DEFAULT_STATE = {
  data: [
    { name: 'pigs', lifespan: '12 years', slaughter: '6 months', ratio: 4.17, key: 'pig' },
    { name: 'male dairy calves', lifespan: '20 years', slaughter: '1-24 weeks', ratio: 1.25, key: 'malecalve' },
    { name: 'cows used for meat', lifespan: '20 years', slaughter: '18 months', ratio: 7.5, key: 'cow' },
    { name: 'male egg chicks', lifespan: '8 years', slaughter: '1 day', ratio: 0.0003, key: 'malechick' },
    { name: 'lambs', lifespan: '12 years', slaughter: '6-8 months', ratio: 4.20, key: 'lamb' },
    { name: 'chickens used for eggs', lifespan: '8 years', slaughter: '1-2 years', ratio: 18.75, key: 'eggchicken' },
    { name: 'turkeys', lifespan: '15 years', slaughter: '5 months', ratio: 2.78, key: 'turkey' },
    { name: 'cows used for milk', lifespan: '20 years', slaughter: '5 years', ratio: 25, key: 'milkcow' },
    { name: 'chickens used for meat', lifespan: '8 years', slaughter: '6 weeks', ratio: 1.5625, key: 'meatchicken' },
  ],
}
const reducer = (state = DEFAULT_STATE) => state

export { reducer }
