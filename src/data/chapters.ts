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
      { id: '101.2', h: 'Scope', b: 'The provisions of this code shall apply to the erection, installation, alteration, repairs, relocation, replacement, addition to, use or maintenance of plumbing systems within this jurisdiction.' },
      { id: '106.2', h: 'Exempt work [A]', b: 'Permit-exempt:\n1. Stopping leaks in drains, water, soil, waste or vent pipe — unless a concealed pipe must be removed and replaced.\n2. Clearing stoppages or ing leaks in pipes, valves or fixtures, and removal and reinstallation of water closets — provided no rearrangement of valves, pipes or fixtures is involved.' },
      { id: '107.1', h: 'Required inspections [A]', b: '1. Underground — after underground piping installed, before backfill.\n2. Rough-in — after plumbing is roughed in, before framing inspection.\n3. Final — after building complete, all plumbing fixtures in place and properly connected, and structure ready for occupancy.' },
    ]
  },
  {
    n: 2, t: 'Definitions', u: true, m: 'Section 202',
    un: 'Utah Code § 15A-3-302: Adds Utah Certified Backflow Tester, Deep Seal Trap, Dual Source Connection. Replaces Cross Connection and Potable Water definitions.',
    ss: [
      { id: '202-Cross Connection', h: 'Cross connection', b: '[IPC] Any physical connection between two otherwise separate piping systems, one containing potable water.', utah: true, uc: 'Utah Code § 15A-3-302', ut: 'REPLACED: Any physical connection or POTENTIAL CONNECTION between the two systems whereby there exists the possibility for flow from one to the other.' },
      { id: '202-Deep Seal Trap', h: 'Deep seal trap [Utah added]', utah: true, uc: 'Utah Code § 15A-3-302', ut: 'ADDED BY UTAH: A manufactured or field fabricated trap with a liquid seal of 4 inches or larger.' },
      { id: '202-Dual Source Connection', h: 'Dual source connection [Utah added]', utah: true, uc: 'Utah Code § 15A-3-302', ut: 'ADDED BY UTAH: A pipe installed so that either nonpotable or potable water is connected to a pressurized irrigation system at one time, but NOT BOTH simultaneously. The potable line shall be protected by a reduced pressure backflow preventer.' },
      { id: '202-Potable Water', h: 'Potable water', b: '[IPC] Water free from impurities causing disease or harmful physiological effects.', utah: true, uc: 'Utah Code § 15A-3-302', ut: 'REPLACED: Water conforming to Utah Code Title 19, Chapter 4 (Safe Drinking Water Act) and Title 19, Chapter 5 (Water Quality Act).' },
      { id: '202-Slope', h: 'Slope', b: 'The fall (pitch) of a line of pipe in reference to a horizontal plane. In drainage, expressed as fall in units vertical per units horizontal (percent) for a length of pipe.' },
      { id: '202-Trap Seal', h: 'Trap seal', b: 'The vertical distance between the weir and the top of the dip of the trap.' },
    ]
  },
  {
    n: 3, t: 'General Regulations', u: true, m: 'Sections 301–316',
    un: 'Utah Code § 15A-3-303: Air testing plastic pipe in cold conditions; backflow testing within 10 days of installation; tester qualification requirement.',
    ss: [
      { id: '305.4', h: 'Freezing protection', b: 'Water, soil and waste pipes shall not be installed outside of a building, in attics or crawl spaces, concealed in outside walls, or in any place subjected to freezing temperatures unless adequate provision is made to protect such pipes from freezing. Exterior water supply system piping shall be installed not less than 6 inches (152 mm) below the frost line and not less than 12 inches (305 mm) below grade.' },
      { id: '308.5', h: 'Interval of support', b: 'Hanger spacing (horiz/vert): ABS 4ft/10ft | Cast iron 5ft/15ft | CPVC ≤1" 3ft/10ft | CPVC ≥1-1/4" 4ft/10ft | Copper pipe 12ft/10ft | Copper tubing ≤1-1/4" 6ft/10ft | PEX ≤1" 32in/10ft | PVC 4ft/10ft | Steel pipe 12ft/15ft.' },
      { id: '312.3', h: 'Drainage and vent air test', b: 'Plastic piping shall not be tested using air. An air test shall be made by forcing air to 5 psi. Held for not less than 15 minutes.', utah: true, uc: 'Utah Code § 15A-3-303', ut: 'EXTENDED: Where water unavailable or freezing, plastic drainage/vent pipe may be air-tested. Max 6 psi, gauges graduated to no more than 3× test pressure, max 15 minutes. Contractor assumes all liability. PPE required.' },
      { id: '312.10.2', h: 'Backflow assembly testing', b: '[IPC] Backflow preventer assemblies shall be tested at time of installation, after repairs, and at least annually.', utah: true, uc: 'Utah Code § 15A-3-303', ut: 'REPLACED: Assemblies tested at installation or WITHIN 10 DAYS of being placed into service, after repairs, and at least annually. Test per USC Foundation Manual of Cross-Connection Control, 10th Edition.' },
      { id: '312.10.3', h: 'Tester qualifications [Utah added]', utah: true, uc: 'Utah Code § 15A-3-303', ut: 'ADDED BY UTAH: Testing shall be performed by a Utah Certified Backflow Assembly Tester per Utah Admin Code R309-305.' },
    ]
  },
  {
    n: 4, t: 'Fixtures, Faucets & Fittings', u: true, m: 'Sections 401–426',
    un: 'Utah Code § 15A-3-304: Pool counts → R392-302; all-gender stalls floor-to-ceiling; public restrooms require floor drain; motor vehicle waste disposal wells prohibited.',
    ss: [
      { id: '403.1', h: 'Minimum number of fixtures', b: 'Plumbing fixtures shall be provided for the type of occupancy and in the minimum number shown in Table 403.1.', utah: true, uc: 'Utah Code § 15A-3-304', ut: 'Table 403.1 modified: Footnote f → pool fixture counts per Utah Admin Code R392-302. Footnote g → equal diaper changing facilities in male/female rooms. Footnote h → child care facilities per R381-60-9, R381-70-9, R381-100-9.' },
      { id: '405.3', h: 'Setting and spacing of fixtures', b: 'No water closet shall be set closer than 15 inches (381 mm) from its center to any side wall, partition or obstruction or closer than 30 inches (762 mm) center to center between adjacent fixtures.' },
      { id: '405.3.4', h: 'All-gender facilities — partitions', b: '[IPC] Multi-user toilet facilities requirements.', utah: true, uc: 'Utah Code § 15A-3-304', ut: 'ADDED: For facilities designed for use by all genders in the same room, the partitions of the stalls shall extend from the floor to the ceiling.' },
      { id: '412.3', h: 'Individual shower and tub-shower valves', b: 'Individual shower and tub-shower combination valves shall be balanced-pressure, thermostatic or combination valves per ASSE 1016. Shall limit the maximum setting to 120°F (49°C).' },
      { id: '413.5', h: 'Public toilet rooms — floor drain [Utah added]', utah: true, uc: 'Utah Code § 15A-3-304', ut: 'ADDED BY UTAH: All public toilet rooms shall be equipped with at least one floor drain.' },
      { id: '413.6', h: 'Motor vehicle waste disposal wells [Utah added]', utah: true, uc: 'Utah Code § 15A-3-304', ut: 'ADDED BY UTAH: New and existing motor vehicle waste disposal wells are prohibited. Exception: Single family residences.' },
      { id: '421.4', h: 'Shower enclosures', b: 'Each shower compartment shall have a minimum finished interior of 1,024 square inches (0.66 m²) of floor area, capable of encompassing a 30-inch (762 mm) circle. Doors shall swing away from the shower compartment.' },
      { id: '421.5', h: 'Shower floors and liners', b: 'A shower receptor shall have a finished curb threshold not less than 1 inch (25.4 mm) below the sides of the receptor, and not less than 2 inches (51 mm) below the top of the dam or threshold. Wall area shall be waterproof to a height not less than 72 inches (1829 mm) above the bathroom floor level.' },
      { id: '424.1', h: 'Urinals', b: 'Urinals shall conform to ASME A112.19.2/CSA B45.1 and water consumption requirements of Section 604.4.', utah: true, uc: 'Utah Code § 15A-3-306', ut: 'Table 604.4 MODIFIED: Urinal maximum water consumption → 0.5 gallon per flushing cycle.' },
      { id: '425.1', h: 'Water closets', b: 'Water closets shall conform to ASME A112.19.2/CSA B45.1 and be vitreous china or other approved smooth, impervious materials.' },
    ]
  },
  {
    n: 5, t: 'Water Heaters', u: true, m: 'Sections 501–505',
    un: 'Utah Code § 15A-3-305: Seismic strapping at upper AND lower thirds; T&P discharge max 180°; pan is emergency receptor only.',
    ss: [
      { id: '502.3', h: 'Water heaters in attics', b: 'Attics containing a water heater shall be provided with an opening and passageway not less than 30 inches (762 mm) high and 22 inches (559 mm) wide, not more than 20 feet in length. A level service space not less than 30 × 30 inches shall be present at the front or service side.' },
      { id: '502.4', h: 'Seismic supports', b: '[IPC] Where earthquake loads are applicable per the IBC, water heater supports shall be designed and installed for seismic forces.', utah: true, uc: 'Utah Code § 15A-3-305', ut: "REPLACED: Water heaters shall be anchored or strapped to resist horizontal displacement caused by earthquake motion. Strapping shall be at points within the upper one-third AND lower one-third of the appliance's vertical dimensions." },
      { id: '504.6', h: 'T&P discharge piping', b: 'Discharge piping shall: not connect directly to drainage; discharge through air gap in same room; not be smaller than valve outlet; serve single relief device only; not be trapped; flow by gravity; terminate 2× pipe diameter to 6 inches above floor or flood level rim; have no threaded end or valves.', utah: true, uc: 'Utah Code § 15A-3-305', ut: "Item 15 added: Discharge piping shall be installed per manufacturer's instructions, not to exceed 180 degrees in total directional change." },
      { id: '504.7.2', h: 'Pan drain termination', b: 'Pan drain shall extend full size and terminate over an indirect waste receptor or floor drain, or extend to the exterior and terminate 6–24 inches above the adjacent ground surface.', utah: true, uc: 'Utah Code § 15A-3-305', ut: 'Extended: Pan drain may connect directly to soil stack, waste stack, or branch drain when permitted by code official. Pan drain shall be individually trapped and vented per § 907.1. Trap requires ASSE 1018/1044 primer, ASSE 1072 device, or deep seal p-trap.' },
      { id: '504.7.3', h: 'Pan designation [Utah added]', utah: true, uc: 'Utah Code § 15A-3-305', ut: 'ADDED BY UTAH: A water heater pan shall be considered an emergency receptor designated to receive the discharge of water from the water heater ONLY and shall not receive the discharge from any other fixtures, devices, or equipment.' },
    ]
  },
  {
    n: 6, t: 'Water Supply & Distribution', u: true, m: 'Sections 601–613',
    un: 'Utah Code § 15A-3-306: Individual supply → Utah DNR. Reduced flow rates. Detailed backflow installation criteria. Booster pump restrictions.',
    ss: [
      { id: '603.1', h: 'Size of water service pipe', b: 'The water service pipe shall be sized to supply water to the structure in the quantities and at the pressures required in this code. The water service pipe shall be not less than 3/4 inch (19.1 mm) in diameter.' },
      { id: '602.3', h: 'Individual water supply', b: '[IPC] Where a potable public water supply is not available, individual sources shall be utilized provided approved.', utah: true, uc: 'Utah Code § 15A-3-306', ut: 'REPLACED: Individual sources shall be developed per Utah Code §§ 73-3-1, 73-3-3, and 73-3-25 (DNR Division of Water Rights). Quality approved by local health department.' },
      { id: '604.4', h: 'Maximum flow rates', b: 'Plumbing fixtures and fittings shall comply with Table 604.4 maximum flow rates.', utah: true, uc: 'Utah Code § 15A-3-306', ut: 'Table 604.4 MODIFIED: Lavatory private → 1.5 gpm at 60 psi. Shower head → 2 gpm at 80 psi. Urinal → 0.5 gallon per flushing cycle.' },
      { id: '604.8', h: 'Pressure-reducing valves', b: 'Where water pressure in the supply piping exceeds 80 psi (552 kPa) static, an approved pressure-reducing valve with a strainer shall be installed to reduce the pressure to 80 psi (552 kPa) or less.' },
      { id: '606.5.11', h: 'Booster pumps on public main [Utah added]', utah: true, uc: 'Utah Code § 15A-3-306', ut: 'ADDED BY UTAH: A water pressure booster pump shall not be connected to a public water main unless allowed by Utah Administrative Code Rule R309-540.' },
      { id: '608.1', h: 'Protection of potable water supply', b: 'The potable water supply shall be protected from contamination caused by backflow and backsiphonage.', utah: true, uc: 'Utah Code § 15A-3-306', ut: 'Added §§ 608.1.1-608.1.2.3: Assembly max 5 ft above floor without platform. RP assemblies: not in pit, not connected to waste line, horizontal, min 12" above floor, min 12" from walls. Double check: horizontal, min 12" above floor/walls. PVB: no backpressure areas, min 12" above downstream piping, vertical, not below ground.' },
    ]
  },
  {
    n: 7, t: 'Sanitary Drainage', u: true, m: 'Sections 701–718',
    un: 'Utah Code § 15A-3-307: Must connect to sewer if within 300 feet. No exposed drain pipe above food prep surfaces.',
    ss: [
      { id: '701.2', h: 'Sewer required', b: '[IPC] Every building with plumbing fixtures shall connect to a public sewer, where available, or an approved private sewage disposal system.', utah: true, uc: 'Utah Code § 15A-3-307', ut: 'REPLACED: Every building shall connect to a public sewer where the sewer is accessible and within 300 feet of the property line per Utah Code § 10-8-38; or to an approved private sewage disposal system per Utah Admin Code R317-4.' },
      { id: '701.8', h: 'Drainage in food service [Utah added]', utah: true, uc: 'Utah Code § 15A-3-307', ut: 'ADDED BY UTAH: Exposed soil or waste piping shall not be installed above any working, storage, or eating surfaces in food service establishments.' },
      { id: '704.1', h: 'Slope of horizontal drainage pipe', b: 'Not less than 1/4 unit vertical in 12 units horizontal (2% slope) for 2-1/2 inch and smaller pipe. For 3 inch pipe and larger, not less than 1/8 unit vertical in 12 units horizontal (1% slope).' },
      { id: '708.3.1', h: 'Horizontal drainage pipe cleanouts', b: 'Cleanouts shall be installed at each change in direction greater than 45 degrees of horizontal drainage pipe. Cleanouts shall be placed not more than 100 feet (30,480 mm) apart in horizontal drainage pipe.' },
      { id: '710.1', h: 'Drainage system sizing', b: 'The sizing of the drainage system shall be based on the total number of drainage fixture units (dfu) connected thereto. Building drains and sewers per Table 710.1(1). Horizontal branches and stacks per Table 710.1(2).' },
      { id: '714.1', h: 'Backwater valves', b: 'Drainage piping serving fixtures located below the elevation of the next upstream manhole cover shall be protected from backflow of sewage by installing an approved backwater valve.' },
    ]
  },
  {
    n: 8, t: 'Indirect/Special Waste', u: true, m: 'Sections 801–803',
    un: 'Utah Code § 15A-3-308: Last sentence of § 802.1.1 deleted.',
    ss: [
      { id: '802.1.1', h: 'Food handling', b: 'Equipment and fixtures utilized for the storage, preparation and handling of food shall discharge through an indirect waste pipe by means of an air gap.', utah: true, uc: 'Utah Code § 15A-3-308', ut: 'The last sentence of § 802.1.1 is DELETED in Utah.' },
      { id: '802.3.1', h: 'Air gap', b: 'The air gap between the indirect waste pipe and the flood level rim of the waste receptor shall be not less than twice the effective opening of the indirect waste pipe.' },
      { id: '802.4.3', h: 'Standpipes', b: 'Standpipes shall be individually trapped. Standpipes shall extend not less than 18 inches (457 mm) but not greater than 42 inches (1067 mm) above the trap weir.' },
    ]
  },
  {
    n: 9, t: 'Vents', u: true, m: 'Sections 901–920',
    un: 'Utah Code § 15A-3-309: Vent through roof min 12"; wall vents with downward elbow 12" from wall; horizontal dry vents below flood level permitted.',
    ss: [
      { id: '901.2', h: 'Trap seal protection', b: 'The plumbing system shall be provided with a system of vent piping that will permit the admission or emission of air so that the seal of any fixture trap shall not be subjected to a pressure differential of more than 1 inch of water column (249 Pa).' },
      { id: '903.1.1', h: 'Roof extension', b: '[IPC] Open vent pipes extending through a roof shall be terminated not less than [NUMBER] inches above the roof.', utah: true, uc: 'Utah Code § 15A-3-309', ut: 'SPECIFIED: Open vent pipes extending through a roof shall terminate not less than 12 inches (304.8mm) above the roof.' },
      { id: '903.7', h: 'Wall extension [Utah added]', utah: true, uc: 'Utah Code § 15A-3-309', ut: 'ADDED BY UTAH: Vents extending through the wall shall terminate not less than 12 inches from the wall with an elbow pointing downward.' },
      { id: '905.4', h: 'Vertical rise of vent', b: 'Every dry vent shall rise vertically to a point not less than 6 inches (152 mm) above the flood level rim of the highest trap or trapped fixture being vented.', utah: true, uc: 'Utah Code § 15A-3-309', ut: 'EXTENDED: Horizontal dry vents below the flood level rim shall be permitted for floor drain, floor sink, and bathtub installations when installed per Sections 702.2, 905.2, and 905.3 and provided with a wall cleanout.' },
      { id: '909.1', h: 'Distance of trap from vent', b: 'Table 909.1: 1-1/4" trap: 1/4"/ft slope, 5 ft max | 1-1/2": 6 ft | 2": 8 ft | 3": 1/8"/ft, 12 ft | 4": 16 ft' },
      { id: '918.1', h: 'Air admittance valves', b: 'Stack-type per ASSE 1050. Individual/branch-type per ASSE 1051. Within each plumbing system, not less than one stack vent or vent stack shall extend outdoors to the open air.' },
    ]
  },
  {
    n: 10, t: 'Traps, Interceptors & Separators', u: true, m: 'Sections 1001–1004',
    un: 'Utah Code § 15A-3-310: Deep Seal Trap added as approved method; gravity grease interceptor discharge clarified.',
    ss: [
      { id: '1002.1', h: 'Fixture traps', b: 'Each plumbing fixture shall be separately trapped by a liquid-seal trap. The vertical distance from the fixture outlet to the trap weir shall not exceed 24 inches (610 mm), and the horizontal distance shall not exceed 30 inches (762 mm). A fixture shall not be double trapped.' },
      { id: '1002.3', h: 'Prohibited traps', b: 'Prohibited: (1) Traps depending on moving parts. (2) Bell traps. (3) Crown-vented traps. (4) Interior partition traps. (5) "S" traps. (6) Drum traps. Exception: Drum traps used as solids interceptors or for chemical waste systems.' },
      { id: '1002.4', h: 'Trap seals', b: 'Each fixture trap shall have a liquid seal of not less than 2 inches (51 mm) and not more than 4 inches (102 mm).', utah: true, uc: 'Utah Code § 15A-3-310', ut: '§ 1002.4.1.6 ADDED: A deep seal trap (liquid seal of 4 inches or larger per § 202) is an approved method for trap seal protection of emergency floor drain traps and traps subject to evaporation.' },
      { id: '1003.3.1', h: 'Grease interceptors required', b: 'A grease interceptor shall be required for fixtures with grease-laden waste in food preparation areas: restaurants, hotel kitchens, hospitals, school kitchens, bars, factory cafeterias, clubs.', utah: true, uc: 'Utah Code § 15A-3-310', ut: '§ 1003.3.8 clarified: The discharge piping from a GRAVITY grease interceptor shall be directly connected to the sanitary drainage system.' },
      { id: '1003.3.4', h: 'Grease interceptors not required', b: 'A grease interceptor shall not be required for individual dwelling units or any private living quarters.' },
    ]
  },
  {
    n: 11, t: 'Storm Drainage', u: true, m: 'Sections 1101–1113',
    un: 'Utah Code § 15A-3-311: Alternate storm drain sizing methods allowed; § 1109 (combined sewer) deleted.',
    ss: [
      { id: '1101.3', h: 'Prohibited drainage', b: 'Storm water shall not be drained into sewers intended for sewage only.', utah: true, uc: 'Utah Code § 15A-3-311', ut: '§ 1109 (Combined Sanitary and Storm Public Sewer) is DELETED in Utah.' },
      { id: '1106.1', h: 'Storm drain sizing', b: 'The size of vertical conductors and leaders, building storm drains, and horizontal branches shall be based on the 100-year hourly rainfall rate per Figures 1106.1(1)-(5) or other rainfall rates from approved local weather data.', utah: true, uc: 'Utah Code § 15A-3-311', ut: '§ 1106.1.1 ADDED: An approved alternate storm drain sizing method may be allowed.' },
      { id: '1106.2', h: 'Storm drain pipe sizing', b: 'Table 1106.2 capacity (gpm): 2" — 34 vertical, 31 at 1/4"/ft slope | 3" — 87/79 | 4" — 180/163 | 6" — 538/487 | 8" — 1,117/1,010 | 10" — 2,050/1,855 | 12" — 3,272/2,960.' },
      { id: '1108.1', h: 'Secondary emergency roof drains', b: 'Where roof drains are required, secondary (emergency overflow) roof drains or scuppers shall be provided where the roof perimeter construction extends above the roof in such a manner that water will be entrapped if the primary drains allow buildup.' },
    ]
  },
  {
    n: 12, t: 'Special Piping & Storage', u: false, m: 'Sections 1201–1203',
    ss: [
      { id: '1201.1', h: 'Scope', b: 'The provisions of this chapter shall govern the design and installation of piping and storage systems for nonflammable medical gas systems and nonmedical oxygen systems. Chapter 12 is not amended by Utah (§ 15A-3-312).' },
      { id: '1202.1', h: 'Nonflammable medical gases [F]', b: 'Nonflammable medical gas systems, inhalation anesthetic systems and vacuum piping systems shall be installed, tested and labeled in accordance with NFPA 99.' },
    ]
  },
  {
    n: 13, t: 'Nonpotable Water Systems', u: true, m: 'Sections 1301–1304',
    un: 'Utah Code § 15A-3-313: Nonpotable system recorded on deed before CO; RP assembly required for potable connections; dual source connection rules.',
    ss: [
      { id: '1301.3', h: 'Signage required', b: 'Nonpotable water outlets shall be identified at the point of use: "CAUTION: NONPOTABLE WATER – DO NOT DRINK." Letters shall be not less than 0.5 inch (12.7 mm) in height.' },
      { id: '1301.4.1', h: 'Recording [Utah added]', utah: true, uc: 'Utah Code § 15A-3-313', ut: 'ADDED BY UTAH: The existence of a nonpotable water system shall be recorded on the deed of ownership for the property. Certificate of occupancy shall not be issued until the documentation for the deed recording is completed by the property owner.' },
      { id: '1301.5', h: 'Potable water connections', b: '[IPC] Where a potable system is connected to a nonpotable water system, the potable water supply shall be protected against backflow in accordance with Section 608.', utah: true, uc: 'Utah Code § 15A-3-313', ut: 'REPLACED: The potable water supply shall be protected by a REDUCED PRESSURE BACKFLOW PREVENTION ASSEMBLY or an air gap installed in accordance with Section 608.' },
      { id: '1301.5.1', h: 'Dual source connection [Utah added]', utah: true, uc: 'Utah Code § 15A-3-313', ut: 'ADDED BY UTAH: System utilizing nonpotable water (pressurized irrigation) with a potable water backup must install an RP assembly directly downstream of the potable water connection, then a dual source connection downstream from the RP — so only ONE source is connected at any time, never both. RP must be tested within 10 days of installation and annually.' },
    ]
  },
]

export const SEARCH_INDEX = CHAPTERS.flatMap(ch =>
  ch.ss.map(s => ({
    ch: ch.n,
    ct: ch.t,
    id: s.id,
    h: s.h,
    b: s.b || '',
    ut: s.ut || '',
    u: !!s.utah,
    uc: s.uc || '',
  }))
)

export function buildSearchIndex() {
  return SEARCH_INDEX
}
