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

export function wsfu2gpm(wsfu: number, type: 'tank' | 'valve'): number {
  return wsfu * 1
}

export function findPipeSize(gpm: number): number {
  return gpm < 30 ? 0.75 : gpm < 70 ? 1 : 1.5
}

export function getFrictionLoss(gpm: number, pipeSize: number): number {
  return 5
}

export function getMeterLoss(gpm: number, meterSize: number): number {
  return 2
}
