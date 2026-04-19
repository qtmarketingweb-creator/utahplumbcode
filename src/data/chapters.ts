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
    n: 1, t: 'Scope & Administration', u: false, m: 'Sections 101–115',
    ss: [
      { id: '101.1', h: 'Title', b: 'These regulations shall be known as the Plumbing Code of the jurisdiction, hereinafter referred to as "this code."' },
      { id: '101.2', h: 'Scope', b: 'The provisions of this code shall apply to the erection, installation, alteration, repairs, relocation, replacement, addition to, use or maintenance of plumbing systems within this jurisdiction. This code also regulates nonpotable rainwater collection, distribution systems, and reclaimed water systems.' },
      { id: '101.3', h: 'Intent', b: 'The purpose of this code is to establish minimum standards to safeguard life, limb, health, property and public welfare by regulating the design, construction, installation, quality of materials, location, operation and maintenance of plumbing equipment and systems.' },
      { id: '102.2', h: 'Existing installations', b: 'Plumbing systems lawfully in existence at the time of adoption of this code shall be permitted to have their use and maintenance continued if the use, maintenance or repair is in accordance with the original design and no hazard to life, health or property is created.' },
      { id: '102.3', h: 'Maintenance', b: 'Plumbing systems, both existing and new, shall be maintained in a safe and sanitary condition. All devices or safeguards required by this code shall be maintained in conformance with the code edition under which installed.' },
      { id: '102.4', h: 'Additions, alterations or repairs', b: 'Additions, alterations, renovations or repairs to any plumbing system shall conform to requirements for a new system without requiring the existing system to comply with all requirements of this code, unless the existing system is determined to be hazardous.' },
      { id: '102.7', h: 'Moved structures', b: 'Plumbing systems that are part of structures moved into or within the jurisdiction shall comply with the provisions of this code for new installations.' },
      { id: '103.1', h: 'Enforcing agency', b: 'The department of the jurisdiction is hereby created and the official in charge shall be known as the code official.' },
      { id: '104.1', h: 'General authority', b: 'The code official shall have the authority to render interpretations of this code and to adopt policies and procedures in order to clarify the application of its provisions.' },
      { id: '106.1', h: 'Permit required', b: 'It shall be unlawful to construct, enlarge, alter, repair, move, demolish, or change the occupancy of any plumbing system regulated by this code without first obtaining a permit from the code official.' },
      { id: '106.2', h: 'Exempt work', b: 'Permit not required for:\n1. Stopping leaks in drains, water, soil, waste or vent pipe — unless a concealed pipe must be removed and replaced.\n2. Clearing stoppages or ing leaks in pipes, valves or fixtures, and removal and reinstallation of water closets — provided no rearrangement of valves, pipes or fixtures is involved.' },
      { id: '106.3.1', h: 'Construction documents', b: 'Construction documents, engineering calculations, diagrams and other data shall be submitted in two or more sets with each application for a permit.' },
      { id: '106.5', h: 'Permit fees', b: 'A permit shall not be valid until the fees prescribed by law have been paid. Fees shall be assessed as set forth in the fee schedule of the jurisdiction.' },
      { id: '107.1', h: 'Required inspections', b: '1. Underground — after underground piping installed, before backfill.\n2. Rough-in — after plumbing is roughed in, before concealment.\n3. Final — after building complete, all fixtures in place and connected, structure ready for occupancy.' },
      { id: '107.2', h: 'Other inspections', b: 'In addition to the required inspections, the code official is authorized to make or require other inspections of any construction work to ascertain compliance with this code.' },
      { id: '107.3', h: 'Testing', b: 'Plumbing systems shall be tested as specified in Section 312 and as directed by the code official. No plumbing system or part thereof shall be covered until tested and approved.' },
      { id: '108.4', h: 'Violation penalties', b: 'Persons who violate a provision of this code shall be subject to prosecution and fines as set by the authority having jurisdiction.' },
      { id: '109.1', h: 'Application for appeal', b: 'Any person shall have the right to appeal a decision of the code official to the board of appeals. An application for appeal shall be based on a claim that the true intent of this code has been incorrectly interpreted.' },
      { id: '111.1', h: 'Temporary equipment and systems', b: 'The code official is authorized to give permission to temporarily supply and use water or other utilities before final completion of the installation in accordance with this code.' },
    ]
  },
