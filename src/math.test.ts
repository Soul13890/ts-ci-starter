import { describe, it, expect } from 'vitest';
import { add, divide } from './math.js';

describe('Fonctions mathématiques', () => {
  it('additionne deux nombres correctement', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('divise deux nombres correctement', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('lève une erreur en cas de division par zéro', () => {
    expect(() => divide(10, 0)).toThrow('Division par zéro impossible');
  });
});