function Tennisgame() {
  this.reset = () => {

  }
  this.echo = () => {
    return 'love-love'

  }
}
test('Echo "love-love" when game starts', () => {

  let app = new Tennisgame()
  app.reset()
  let result = app.echo()
  expect(result).toBe('love-love')
})
