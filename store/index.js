export const state = () => ({
  brews: [
    {
      id: 1,
      name: 'Kozel',
      tagline: 'A Real Bitter Experience.',
      foodPairing: [
        'Spicy chicken tikka masala',
        'Grilled chicken quesadilla',
        'Caramel toffee cake'
      ],
      imageUrl: 'https://images.punkapi.com/v2/keg.png'
    }
  ]
})

export const mutations = {
  addBrew(state, payload) {
    payload.id = state.brews.length + 1
    state.brews.push(payload)
  },
  deleteBrew(state, payload) {
    const newState = state.brews.filter(
      ({ id }) => id.toString() !== payload.id.toString()
    )
    state.brews = [...newState]
  }
}
