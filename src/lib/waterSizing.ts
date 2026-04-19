// IPC Appendix E Table E103.3(2) — WSFU load values
export interface Fixture {
  name: string
  wsfu: number   // total WSFU
  cold: number   // cold water WSFU
  hot: number    // hot water WSFU
}

export const FIXTURES: Fixture[] = [
  { name: 'Bathroom group (pvt, flush tank)',     wsfu: 3.6,  cold: 2.7,  hot: 1.5 },
  { name: 'WC (pvt, flush tank)',                  wsfu: 2.2,  cold: 2.2,  hot: 0   },
  { name: 'WC (public, flush tank)',               wsfu: 5.0,  cold: 5.0,  hot: 0   },
  { name: 'WC (flushometer valve)',                wsfu: 10.0, cold: 10.0, hot: 0   },
  { name: 'Urinal (3/4" flushometer valve)',       wsfu: 5.0,  cold: 5.0,  hot: 0   },
  { name: 'Urinal (flush tank)',                   wsfu: 3.0,  cold: 3.0,  hot: 0   },
  { name: 'Bathtub (private)',                     wsfu: 1.4,  cold: 1.0,  hot: 1.0 },
  { name: 'Bathtub (public)',                      wsfu: 4.0,  cold: 3.0,  hot: 3.0 },
  { name: 'Lavatory (private)',                    wsfu: 0.7,  cold: 0.5,  hot: 0.5 },
  { name: 'Lavatory (public)',                     wsfu: 2.0,  cold: 1.5,  hot: 1.5 },
  { name: 'Kitchen sink (residential)',            wsfu: 1.4,  cold: 1.0,  hot: 1.0 },
  { name: 'Kitchen sink (hotel/restaurant)',       wsfu: 4.0,  cold: 3.0,  hot: 3.0 },
  { name: 'Shower head (private)',                 wsfu: 1.4,  cold: 1.0,  hot: 1.0 },
  { name: 'Shower head (public)',                  wsfu: 4.0,  cold: 3.0,  hot: 3.0 },
  { name: 'Clothes washer (private)',              wsfu: 1.4,  cold: 1.0,  hot: 1.0 },
  { name: 'Clothes washer (public)',               wsfu: 4.0,  cold: 3.0,  hot: 3.0 },
  { name: 'Dishwasher (residential)',              wsfu: 1.4,  cold: 0,    hot: 1.4 },
  { name: 'Laundry tray (1–3)',                    wsfu: 1.4,  cold: 1.0,  hot: 1.0 },
  { name: 'Service sink',                          wsfu: 3.0,  cold: 2.25, hot: 2.25},
  { name: 'Hose bibb / sillcock',                 wsfu: 2.5,  cold: 2.5,  hot: 0   },
  { name: 'Drinking fountain',                     wsfu: 0.25, cold: 0.25, hot: 0   },
]

const WSFU_GPM_TANK: [number, number][] = [
  [1,3],[2,5],[3,6.5],[4,8],[5,9.4],[6,10.7],[7,11.8],[8,12.8],[9,13.7],[10,14.6],
  [12,16],[15,17.5],[20,19.6],[25,21.5],[30,23.3],[40,26.3],[50,29.1],[60,31.6],
  [80,35.6],[100,38.8],[125,42],[150,45.4],[200,51.7],[250,61.2],[300,66],[400,74],
  [500,87.1],[750,105.2],[1000,127],
]

const WSFU_GPM_VALVE: [number, number][] = [
  [5,15],[6,17.4],[7,19.8],[8,22.2],[10,27],[15,31],[20,35],[25,38],[30,42],
  [40,46.6],[50,50],[60,53],[80,57.5],[100,61.2],[150,70],[200,77],[300,90],
]

export const PIPE_CAPACITY: Record<number, number> = {
  0.75: 17, 1: 30, 1.25: 48, 1.5: 70, 2: 125, 2.5: 195, 3: 280,
}

export const PIPE_LABELS: Record<number, string> = {
  0.75: '3/4"', 1: '1"', 1.25: '1-1/4"', 1.5: '1-1/2"',
  2: '2"', 2.5: '2-1/2"', 3: '3"',
}

export function wsfu2gpm(wsfu: number, type: 'tank' | 'valve'): number {
  const tbl = type === 'valve' ? WSFU_GPM_VALVE : WSFU_GPM_TANK
  if (wsfu <= 0) return 0
  for (let i = 0; i < tbl.length - 1; i++) {
    if (wsfu >= tbl[i][0] && wsfu <= tbl[i + 1][0]) {
      const t = (wsfu - tbl[i][0]) / (tbl[i + 1][0] - tbl[i][0])
      return tbl[i][1] + (tbl[i + 1][1] - tbl[i][1]) * t
    }
  }
  return wsfu < tbl[0][0] ? tbl[0][1] : tbl[tbl.length - 1][1]
}

export function findPipeSize(gpm: number): number {
  const sizes = [0.75, 1, 1.25, 1.5, 2, 2.5, 3]
  for (const sz of sizes) if (gpm <= PIPE_CAPACITY[sz]) return sz
  return 3
}

const FRICTION: Record<number, [number, number][]> = {
  0.75: [[5,0.5],[10,1.8],[15,3.7],[20,6.3],[25,9.5],[30,13.5]],
  1:    [[5,0.15],[10,0.55],[15,1.1],[20,1.9],[25,2.9],[30,4.1],[40,7.0],[50,10.5]],
  1.25: [[10,0.2],[15,0.4],[20,0.7],[25,1.0],[30,1.5],[40,2.5],[50,3.7],[60,5.2]],
  1.5:  [[10,0.1],[15,0.2],[20,0.35],[25,0.5],[30,0.7],[40,1.2],[50,1.8],[60,2.5],[70,3.4]],
  2:    [[20,0.1],[30,0.22],[40,0.37],[50,0.55],[60,0.77],[70,1.0],[80,1.3],[100,2.0]],
  2.5:  [[30,0.07],[40,0.12],[50,0.18],[60,0.25],[70,0.33],[80,0.42],[100,0.63]],
  3:    [[40,0.05],[50,0.07],[60,0.1],[70,0.13],[80,0.17],[100,0.25],[120,0.35]],
}

const METER_LOSS: Record<number, Record<number, number>> = {
  0.5:  { 10:1.35, 20:5.38, 30:12.1 },
  0.75: { 10:0.64, 20:2.54, 30:5.72, 40:10.2, 50:15.9 },
  1:    { 10:0.18, 20:0.77, 30:1.62, 40:3.07, 50:4.49, 60:6.46, 70:8.79, 80:11.5, 90:14.5, 100:17.94 },
  1.5:  { 20:0.14, 30:0.33, 40:0.58, 50:0.91, 60:1.31, 70:1.78, 80:2.32, 90:2.94, 100:3.63, 120:5.23 },
  2:    { 30:0.1, 40:0.18, 50:0.28, 60:0.4, 70:0.55, 80:0.72, 90:0.91, 100:1.12, 120:1.61 },
}

export function getFrictionLoss(gpm: number, pipeSize: number): number {
  const rows = FRICTION[pipeSize]
  if (!rows) return 5
  for (let i = 0; i < rows.length - 1; i++) {
    if (gpm >= rows[i][0] && gpm <= rows[i + 1][0]) {
      const t = (gpm - rows[i][0]) / (rows[i + 1][0] - rows[i][0])
      return rows[i][1] + (rows[i + 1][1] - rows[i][1]) * t
    }
  }
  return gpm < rows[0][0] ? rows[0][1] : rows[rows.length - 1][1] * 1.2
}

export function getMeterLoss(gpm: number, meterSize: number): number {
  const tbl = METER_LOSS[meterSize]
  if (!tbl) return 0
  const keys = Object.keys(tbl).map(Number).sort((a, b) => a - b)
  for (let i = 0; i < keys.length - 1; i++) {
    if (gpm >= keys[i] && gpm <= keys[i + 1]) {
      const t = (gpm - keys[i]) / (keys[i + 1] - keys[i])
      return tbl[keys[i]] + (tbl[keys[i + 1]] - tbl[keys[i]]) * t
    }
  }
  return gpm < keys[0] ? tbl[keys[0]] : tbl[keys[keys.length - 1]] * 1.1
}
