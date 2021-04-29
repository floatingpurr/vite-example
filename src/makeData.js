import { range } from 'd3';

// build data
export const makeData = (n, t) => {
  
  const data = range(n).map((d) => ({
    x: d * 50 + 50,
    y: 250 + Math.sin(d * 0.5 + t) * 220,
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
  }));
  
  return data;
};