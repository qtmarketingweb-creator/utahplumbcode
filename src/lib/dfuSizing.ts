// IPC Table 709.1 — Drainage Fixture Unit (DFU) values
export interface DrainFixture {
  name: string
  dfu: number
  type: 'trap' | 'no-trap'
  trapSize?: number  // inches
}

export const DRAIN_FIXTURES: DrainFixture[] = [
  { name: 'Bathroom group (pvt, flush tank)',      dfu: 5,    type: 'trap', trapSize: 2 },
  { name: 'Bathroom group (pvt, flushometer value)', dfu: 6,  type: 'trap', trapSize: 2 },
  { name: 'Bathtub (with or w/o shower)',          dfu: 2,    type: 'trap', trapSize: 1.5 },
  { name: 'Bidet',                                 dfu: 1,    type: 'trap', trapSize: 1.25 },
  { name: 'Clothes washer (standpipe)',             dfu: 2,    type: 'trap', trapSize: 2 },
  { name: 'Dishwasher (domestic)',                 dfu: 2,    type: 'no-trap' },
  { name: 'Floor drain',                           dfu: 2,    type: 'trap', trapSize: 2 },
  { name: 'Kitchen sink (domestic)',               dfu: 2,    type: 'trap', trapSize: 1.5 },
  { name: 'Kitchen sink (commercial)',             dfu: 4,    type: 'trap', trapSize: 2 },
  { name: 'Laundry tray (1–3 compartments)',       dfu: 2,    type: 'trap', trapSize: 1.5 },
  { name: 'Lavatory (private)',                    dfu: 1,    type: 'trap', trapSize: 1.25 },
  { name: 'Lavatory (public)',                     dfu: 2,    type: 'trap', trapSize: 1.25 },
  { name: 'Service sink',                          dfu: 3,    type: 'trap', trapSize: 2 },
  { name: 'Shower (single stall, private)',        dfu: 2,    type: 'trap', trapSize: 2 },
  { name: 'Shower (single stall, public)',         dfu: 3,    type: 'trap', trapSize: 2 },
  { name: 'Urinal (≤1 gpf)',                       dfu: 2,    type: 'trap', trapSize: 1.5 },
  { name: 'Urinal (>1 gpf)',                       dfu: 4,    type: 'trap', trapSize: 2 },
  { name: 'WC (pvt, flush tank ≤1.6 gpf)',        dfu: 3,    type: 'trap', trapSize: 3 },
  { name: 'WC (public/flushometer, ≤1.6 gpf)',    dfu: 4,    type: 'trap', trapSize: 3 },
  { name: 'WC (flush tank, >1.6 gpf)',             dfu: 4,    type: 'trap', trapSize: 3 },
  { name: 'WC (flushometer valve, >1.6 gpf)',      dfu: 6,    type: 'trap', trapSize: 3 },
]

export const BUILDING_DRAIN: Record<number, [number, number]> = {
  2:    [21,   26],
  2.5:  [24,   31],
  3:    [42,   50],
  4:    [180,  216],
  5:    [390,  480],
  6:    [700,  840],
  8:    [1400, 1600],
  10:   [2500, 2900],
  12:   [3900, 4600],
  15:   [7000, 8300],
}

export const HORIZ_BRANCH: Record<number, { branch: number; stack3: number; stackOver3: number; stackTotal: number }> = {
  1.25: { branch: 1,   stack3: 2,    stackOver3: 2,    stackTotal: 8   },
  1.5:  { branch: 3,   stack3: 4,    stackOver3: 8,    stackTotal: 24  },
  2:    { branch: 6,   stack3: 10,   stackOver3: 24,   stackTotal: 42  },
  2.5:  { branch: 12,  stack3: 20,   stackOver3: 42,   stackTotal: 72  },
  3:    { branch: 20,  stack3: 30,   stackOver3: 60,   stackTotal: 500 },
  4:    { branch: 160, stack3: 240,  stackOver3: 500,  stackTotal: 1100},
  5:    { branch: 360, stack3: 540,  stackOver3: 1100, stackTotal: 2400},
  6:    { branch: 620, stack3: 960,  stackOver3: 1900, stackTotal: 3600},
  8:    { branch: 1400,stack3: 2200, stackOver3: 3600, stackTotal: 7200},
}

export const DRAIN_PIPE_SIZES = [1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15]
export const DRAIN_PIPE_LABELS: Record<number, string> = {
  1.25: '1-1/4"', 1.5: '1-1/2"', 2: '2"', 2.5: '2-1/2"',
  3: '3"', 4: '4"', 5: '5"', 6: '6"', 8: '8"', 10: '10"', 12: '12"', 15: '15"',
}

export function findBuildingDrainSize(dfu: number, slope: '1/8' | '1/4'): number {
  const slopeIdx = slope === '1/8' ? 0 : 1
  for (const sz of [2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15]) {
    const row = BUILDING_DRAIN[sz]
    if (row && dfu <= row[slopeIdx]) return sz
  }
  return 15
}

export function findHorizBranchSize(dfu: number): number {
  for (const sz of [1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8]) {
    const row = HORIZ_BRANCH[sz]
    if (row && dfu <= row.branch) return sz
  }
  return 8
}

export function findStackSize(dfu: number, stories: 'three_or_less' | 'over_three'): number {
  for (const sz of [1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8]) {
    const row = HORIZ_BRANCH[sz]
    if (!row) continue
    const cap = stories === 'three_or_less' ? row.stack3 : row.stackOver3
    if (dfu <= cap) return sz
  }
  return 8
}

export const STORM_DRAIN: Record<number, [number, number, number]> = {
  2:  [34,   31,   34],
  3:  [87,   79,   87],
  4:  [180,  163,  180],
  5:  [311,  282,  311],
  6:  [538,  487,  538],
  8:  [1117, 1012, 1117],
  10: [2050, 1858, 2050],
  12: [3272, 2965, 3272],
  15: [5543, 5024, 5543],
}

export function findStormDrainSize(gpm: number, type: 'vertical' | '1/8' | '1/4'): number {
  const idx = type === 'vertical' ? 0 : type === '1/8' ? 1 : 2
  for (const sz of [2, 3, 4, 5, 6, 8, 10, 12, 15]) {
    const row = STORM_DRAIN[sz]
    if (row && gpm <= row[idx]) return sz
  }
  return 15
}

export function roofAreaToGpm(sqft: number, rainfallInHr: number): number {
  return (sqft * rainfallInHr) / 96.23
}
