jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('waits 1 second before printing "Hi, Thundercat"', () => {
  const timerGame = require('../src/index');
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000, "Thundercat");
});