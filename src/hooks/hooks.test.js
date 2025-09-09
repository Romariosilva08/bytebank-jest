import { renderHook } from '@testing-library/react';
import { useState, useEffect } from 'react';

test('Hooks', () => {
  const { result } = renderHook(() => {
    const [nome, setNome] = useState('');
    useEffect(() => {
      setNome('Alice');
    }, []);

    return nome;
  });

  // espera que o nome seja 'Alice' após o efeito
  expect(result.current).toBe('Alice');
});