export const chartData = {xAxisData: [], values: []};

for (let i = 0; i < 10; i++) {
  chartData.xAxisData.push('category' + i);
  chartData.values.push(Math.floor(Math.random() * (100 - 20 + 1) + 20));
}
