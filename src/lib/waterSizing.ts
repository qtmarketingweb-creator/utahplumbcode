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

export const PIPE_CAPAACITY: Record<number, number> = {
  0.75: 17, 1: 30, 1.25: 48, 1.5: 70, 2: 125, 2.5: 195, 3: 280,
}