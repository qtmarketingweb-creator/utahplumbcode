// IFGC Table 402.4(2) - Low pressure, Schedule 40 steel pipe, CFH
export const STEEL_LOW: Record<number, Record<number, number>> = {
  20:  { 0.5:21, 0.75:47, 1:97,  1.25:182, 1.5:275, 2:541,  2.5:990,  3:1730 },
  30:  { 0.5:17, 0.75:38, 1:79,  1.25:149, 1.5:224, 2:440,  2.5:807,  3:1400 },
  40:  { 0.5:15, 0.75:33, 1:67,  1.25:127, 1.5:192, 2:375,  2.5:690,  3:1200 },
  50:  { 0.5:13, 0.75:29, 1:60,  1.25:114, 1.5:172, 2:337,  2.5:616,  3:1070 },
  75:  { 0.5:11, 0.75:24, 1:49,  1.25:93,  1.5:141, 2:275,  2.5:504,  3:878  },
  100: { 0.5:9,  0.75:21, 1:43,  1.25:81,  1.5:122, 2:239,  2.5:438,  3:761  },
  150: { 0.5:8,  0.75:17, 1:35,  1.25:66,  1.5:99,  2:195,  2.5:357,  3:621  },
  200: { 0.5:7,  0.75:15, 1:30,  1.25:57,  1.5:86,  2:169,  2.5:310,  3:539  },
  300: { 0.5:5,  0.75:12, 1:25,  1.25:47,  1.5:71,  2:138,  2.5:253,  3:440  },
}

export const STEEL_MED: Record<number, Record<number, number>> = {
  20:  { 0.5:65,  0.75:148, 1:302, 1.25:572, 1.5:862, 2:1680 },
  30:  { 0.5:53,  0.75:121, 1:246, 1.25:465, 1.5:702, 2:1370 },
  40:  { 0.5:46,  0.75:104, 1:212, 1.25:401, 1.5:606, 2:1180 },
  50:  { 0.5:41,  0.75:93,  1:190, 1.25:360, 1.5:543, 2:1060 },
  75:  { 0.5:33,  0.75:75,  1:154, 1.25:292, 1.5:440, 2:860  },
  100: { 0.5:29,  0.75:65,  1:133, 1.25:252, 1.5:381, 2:744  },
  150: { 0.5:23,  0.75:53,  1:109, 1.25:206, 1.5:311, 2:607  },
  200: { 0.5:20,  0.75:46,  1:94,  1.25:178, 1.5:269, 2:525  },
}

export const PIPE_SIZES = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3]
export const PIPE_LABELS: Record<number, string> = {
  0.5: '1/2"', 0.75: '3/4"', 1: '1"', 1.25: '1-1/4"',
  1.5: '1-1/2"', 2: '2"', 2.5: '2-1/2"', 3: '3"',
}

export function getTable(pressure: 'low' | 'med') {
  return pressure === 'low' ? STEEL_LOW : STEEL_MED
}

export function getLengthKey(length: number): number {
  const keys = [20, 30, 40, 50, 75, 100, 150, 200, 300]
  for (const k of keys) if (length <= k) return k
  return 300
}

export function findPipeSize(cfh: number, length: number, pressure: 'low' | 'med') {
  const table = getTable(pressure)
  const lk = getLengthKey(length)
  const row = table[lk] || table[300]
  for (const sz of PIPE_SIZES) {
    const cap = row[sz]
    if (cap && cfh <= cap) return { size: sz, capacity: cap, label: PIPE_LABELS[sz] }
  }
  return { size: null, capacity: null, label: '> 3" required' }
}

export function btuToCfh(btu: number, gas: 'ng' | 'lp'): number {
  return gas === 'ng' ? btu / 1000 : btu / 2500
}
