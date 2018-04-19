import { PersonUpperCasePipe } from './person-upper-case.pipe';

describe('PersonUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
