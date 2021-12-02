import calculate from '../logic/calculate';

describe('Calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  
  test('the function returns an object', () => {
    expect(typeof (calculate(obj, 'AC'))).toBe('object');
  });

  test('button AC it returns obj with null values for each key', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('if buttonName and obj.next == 0 return {}', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  test('if operation and next exists, then buttonName is appended to obj.next', () => {
    obj.operation = '+';
    obj.next = '6';
    const result = calculate(obj, '3');

    expect(result.next).toBe('63');
  });

  test('if operation is null, return total to be null', () => {
    obj.operation = null;
    obj.next = '6';
    const result = calculate(obj, '3');

    expect(result.next).toBe('63');
    expect(result.total).toBeNull();
  });

  test('if no operation, and obj.next, but button is a number, return the number', () => {
    obj.operation = null;
    obj.next = null;
    const result = calculate(obj, '3');

    expect(result.next).toBe('3');
    expect(result.total).toBeNull();
  });
});
