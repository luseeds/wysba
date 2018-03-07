const DEFAULT_STATE = {
  data: [
    { name: 'pigs', lifespan: '12 years', slaughter: '6 months', ratio: 4.17 },
    { name: 'male dairy calves', lifespan: '20 years', slaughter: '1-24 weeks', ratio: 1.25 },
    { name: 'cows used for meat', lifespan: '20 years', slaughter: '18 months', ratio: 7.5 },
    { name: 'male egg chicks', lifespan: '8 years', slaughter: '1 day', ratio: 0.0003 },
    { name: 'lambs', lifespan: '12 years', slaughter: '6-8 months', ratio: 4.20 },
    { name: 'chickens used for eggs', lifespan: '8 years', slaughter: '1-2 years', ratio: 18.75 },
    { name: 'turkeys', lifespan: '15 years', slaughter: '5 months', ratio: 2.78 },
    { name: 'cows used for milk', lifespan: '20 years', slaughter: '4 years', ratio: 20 },
    { name: 'chickens used for meat', lifespan: '8 years', slaughter: '6 weeks', ratio: 1.5625 },
  ],
}
const reducer = (state = DEFAULT_STATE) => state

export { reducer }
