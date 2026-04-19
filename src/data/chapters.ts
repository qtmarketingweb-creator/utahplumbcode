export interface Section {
  id: string
  h: string
  b?: string
  utah?: boolean
  uc?: string
  ut?: string
}

export interface Chapter {
  n: number
  t: string
  u: boolean
  m: string
  un?: string
  ss: Section[]
}

export const CHAPTERS: Chapter[] = [
  {
    n: 1, t: 'Scope & Administration', u: false, m: 'Sections 101â115',
    ss: [
      { id: '101.2', h: 'Scope', b: 'The provisions of this code shall apply to the erection, installation, alteration, repairs, relocation, replacement, addition to, use or maintenance of plumbing systems within this jurisdiction.' },
      { id: '106.2', h: 'Exempt work [A]', b: 'Permit-exempt:\n1. Stopping leaks in drains, water, soil, waste or vent pipe â unless a concealed pipe must be removed and replaced.\n2. Clearing stoppages or sepairing leaks in pipes, valves or fixtures, and removal and reinstallation of water closets â provided no rearrangement of valves, pipes or fixtures is involved.' },
      { id: '107.1', h: 'Required inspections [A]', b: '1. Underground â after underground piping installed, before backfill.\n2. Rough-in â after plumbing is roughed in, before framing inspection.\n3. Final â after building complete, all plumbing fixtures in place and properly connected, and structure ready for occupancy.' },
    ]
  }]

export const SEARCH_INDEX = CHAPTERS ? [] : []
export function buildSearchIndex() { return SEARCH_INDEX }