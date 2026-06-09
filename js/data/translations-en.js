/* ============================================================
   ENGLISH TRANSLATIONS — capability-led, all projects
   ============================================================ */
window.T = window.T || {};
window.T.en = {
  /* Nav */
  n0:'Home', n1:'Services', n2:'Case Studies', n3:'Contact', n4:'Get in touch',

  /* ────────── HOMEPAGE ────────── */
  /* Hero */
  eyebrow:'Freelance Digitalisation Engineer · Germany',
  h1:'Engineering decisions, <span class="accent">validated before you invest.</span>',
  hsub:'Simulation, optimisation and digitalisation for European manufacturers.',
  hb1:'Book a discovery call',
  havail:'Available · Germany &amp; Remote',

  /* Trust strip */
  trust1:'<strong>M.Eng</strong> Hochschule Stralsund',
  trust2:'German Engineering Practice',
  trust3:'<strong>DSGVO</strong>-compliant',
  trust4:'5+ Years Industrial Experience',

  /* Capabilities (replaces industries on home) */
  caplbl:'What I do',
  caph:'Three capabilities,<br>one engineering practice.',
  cap1h:'Simulation',
  cap1p:'Discrete Event Simulation, real-time digital twins, and scenario analysis. Build a working model of your operation, run experiments at virtual speed, decide with evidence.',
  cap2h:'Optimisation',
  cap2p:'Process flows, factory layouts, supply chains, combinatorial algorithms. Lean, statistical, and heuristic methods — applied where the gain is measurable.',
  cap3h:'Digitalisation',
  cap3p:'Edge-to-cloud platforms, automation pipelines, system architecture. ISA-95 thinking applied from factory floor to enterprise — from one machine to a thousand.',
  caplink1:'Learn more →', caplink2:'Learn more →', caplink3:'Learn more →',
  capind:'Applied across manufacturing, wind energy, logistics, and maritime operations.',

  /* Featured (Cognitive Twin) */
  featlbl:'Featured project',
  featyear:'2025',
  featind:'Digital Twin',
  feath:'Cognitive Twin — Autonomous Experiment Director',
  featp:'A four-layer cognitive digital twin combining live hardware telemetry, multi-paradigm AnyLogic simulation, and an LLM acting as autonomous experiment director. The system identifies bottlenecks, runs scenario tests, and applies commands back to physical hardware — closed-loop, unattended, on commodity infrastructure.',
  featk1:'Hardware → Sim → LLM → Hardware',
  featk2:'Decision-to-result cycle',
  featk3:'Autonomous closed-loop operation',
  featbtn:'Read full case study',

  /* Methodology */
  methlbl:'How I work',
  methh:'Engineer-to-engineer process.<br>No black boxes.',
  methp:'Every engagement follows the same disciplined sequence — calibrated against real production data, statistically validated, and handed over with full documentation.',
  m1h:'Discover', m1p:'30-minute call to map the decision space, constraints, and data available.',
  m2h:'Model',    m2p:'Build the simulation or algorithm. Calibrate against your historical operational data.',
  m3h:'Validate', m3p:'Statistical verification, replication runs, sensitivity analysis. Numbers you can defend.',
  m4h:'Hand over',m4p:'Documented model, trained team, ongoing support. You own the result.',

  /* Background */
  bgd:'Practice built inside leading global manufacturers',

  /* About */
  albl:'About',
  ash:'Five years of decisions —<br>now available freelance.',
  biop1:'Trained inside leading European manufacturers — power electronics, automotive, infrastructure — I now operate independently, translating complex production challenges into validated simulation models and Python automation.',
  biop2:'Based in Flensburg. Operating under strict German DSGVO standards. Every engagement ends with a documented model, a trained team, and a clear return on investment.',
  bion:'Affan Khan',
  biot:'M.Eng · Freelance Digitalisation Engineer',

  /* CTA */
  ctah:'Free 30-minute discovery call.',
  ctasub:'Fixed scope. Fixed price. No surprises.',
  ctabtn:'Book a call',

  /* ────────── SERVICES PAGE (existing keys preserved) ────────── */
  slbl:'What I do',
  sh1:'A focused practice<br>for industrial decisions.',
  ssub:'Industries served and methods I bring to each engagement — from first call to final delivery.',
  /* Industries — kept for services page detail */
  indlbl:'Industries served',
  indh:'Three sectors I know from the inside.',
  ind1h:'Manufacturing',
  ind1p:'Production lines, factory layouts, capacity planning and lean transformation for power electronics, automotive and heavy industry.',
  ind2h:'Wind &amp; Infrastructure',
  ind2p:'Installation logistics, scheduling under weather uncertainty, large-scale assembly modelling for onshore and offshore wind operations.',
  ind3h:'Logistics',
  ind3p:'Warehouse optimisation, 3D bin packing, supply chain simulation and routing algorithms for operational efficiency.',
  indlink:'View work →', indlink2:'View work →', indlink3:'View work →',
  toolslbl:'Tools &amp; methods',
  toolsh:'What I bring to each engagement.',
  toolssub:'Six capability areas — combined as the project requires.',
  s1h:'Discrete Event Simulation', s1p:'Model production, logistics, and material flow. Find bottlenecks and prove ROI before you invest.',
  s2h:'Process &amp; Layout Optimisation', s2p:'Lean analysis, VSM, and warehouse redesign — backed by simulation data, not intuition.',
  s3h:'Python Automation', s3p:'Scripts, reporting pipelines, workflow automation. Manual tasks become reliable, repeatable systems.',
  s4h:'Data Analysis &amp; Reporting', s4p:'Statistical studies, KPI dashboards, and quantitative analysis. Data that drives decisions.',
  s5h:'IBM Maximo Implementation', s5p:'EAM rollout and optimisation. Consolidate legacy systems, reduce downtime, standardise maintenance.',
  s6h:'Algorithm &amp; Web App Development', s6p:'Custom algorithms, live data integrations, and web applications — from bin-packing to market scanners.',

  /* ────────── CASE STUDIES PAGE ────────── */
  cslbl:'Case studies',
  csh1:'Selected work — simulation, optimisation, digitalisation.',
  cssub:'Click any project to read the full problem, approach, and results.',
  ndah:'NDA &amp; DSGVO',
  ndap:'Visuals anonymised under mutual NDA and DSGVO Art. 6 Abs. 1 lit. b.',
  tp:'Problem', ts:'Approach', tr:'Results',

  /* Cognitive Twin ribbon */
  cdtm:'Cognitive Digital Twin · Real-time Simulation · LLM Orchestration',
  cdtt:'Cognitive Twin — Autonomous Experiment Director',
  cdtp:"Traditional digital twins mirror state but don't reason about it. An operator still has to decide what to simulate, when to run a scenario, and what to do with the result. For autonomous fleets — AMRs in warehouses, vessels at sea, vehicles on a route — this manual loop is the bottleneck. The question: can a digital twin run experiments on itself, autonomously, while still being controllable and explainable to a human engineer?",
  cdtsi:'A four-component cognitive digital twin built on commodity hardware — a Raspberry Pi 5 as live data source feeding a multi-paradigm simulation that an LLM directs in real time.',
  cdts1:'Hardware layer (Pi5) — IMU, encoder, battery telemetry over MQTT at 2-second cadence with reconnect resilience',
  cdts2:'Simulation layer (AnyLogic) — one real agent driven by Pi5 data alongside 19 synthetic clones, 200 customer agents with social-influence demand, System Dynamics for fleet health',
  cdts3:'Intelligence layer (Ollama + Mistral 7B) — structured JSON scenario requests with reasoning and urgency scoring every 60 seconds',
  cdts4:'Orchestrator (Python + FastAPI) — dispatches scenarios, parses results, sends physical commands back to Pi5 hardware',
  cdtr:'A fully operational closed-loop system running unattended for 30+ minute sessions. The LLM autonomously identifies bottlenecks in the simulated fleet, dispatches scenario tests (robot failure, demand spike, accelerated battery drain), reads back KPI deltas, and adjusts physical hardware behaviour — all under 15 seconds per scenario cycle. Demonstrates that production-grade cognitive digital twins are achievable on commodity hardware, without specialist cloud infrastructure.',
  cdtk1:'Layers — HW → Sim → LLM → HW',
  cdtk2:'LLM-to-result cycle time',
  cdtk3:'Unattended autonomous operation',

  /* NAVOS ribbon */
  navm:'Industrial IoT · AWS Architecture · Proof-of-Concept',
  navt:'NAVOS — Autonomous Vessel Command Platform',
  navp:"Maritime fleet operators face three critical gaps: no real-time visibility into vessel systems at sea, no secure remote command without exposing hardware to the public internet, and complete operational failure when satellite connectivity drops. Existing approaches don't scale beyond a handful of vessels. The requirement: an architecture that works for one vessel today and a thousand tomorrow — without compromising security or offline resilience.",
  navsi:'A self-initiated proof-of-concept built on a physical vessel proxy running the full production AWS stack — validating the architecture end-to-end before any maritime hardware commitment. Three-tier Industrial IoT design following the ISA-95 reference model.',
  navs1:'Edge layer — AWS Greengrass v2 as vessel operating system with local MQTT broker for offline crew operation',
  navs2:'Cloud layer — AWS IoT Core with certificate-based mTLS, Device Shadow digital twin, DynamoDB voyage history',
  navs3:'Application layer — AWS Amplify + Cognito with three role-based dashboards: Captain, Guest, Engineer',
  navs4:'Fleet scale by design — IoT Fleet Provisioning, OTA via Thing Groups, multi-region by parameter',
  navr:'Fully operational end-to-end platform. Captain commands from any browser worldwide reach the vessel in under 500ms via API Gateway → Lambda → IoT Core → Greengrass → hardware. Offline mode is identical: when satellite drops, local MQTT continues serving crew with zero latency, telemetry spools and syncs on reconnect. Same architecture scales linearly to 1,000+ vessels at approximately €20/month total messaging cost — orders of magnitude below traditional SCADA pricing.',
  navk1:'Command latency online',
  navk2:'Internet required for crew operation',
  navk3:'Vessels on same architecture',

  /* CS1 — Wind Production */
  c1m:'Heavy Infrastructure · Germany · Discrete Event Simulation',
  c1t:'Wind Turbine Production Simulation',
  c1p:'A leading industrial client needed to justify a major crane investment for their wind turbine assembly line. Conventional capacity planning could not capture stochastic variability, equipment breakdowns, or shift interdependencies — management required evidence, not assumptions.',
  c1si:'A discrete-event simulation model was developed in AnyLogic to represent the relevant production segment and material handling processes. Empirical production data was used for parameterisation and validation.',
  c1s1:'Data-driven calibration from historical production datasets',
  c1s2:'Stepwise verification of process logic and system interactions',
  c1s3:'Scenario design with stochastic upstream demand inputs',
  c1s4:'Throughput analysis across multiple crane configurations',
  c1r:'Quantitative evaluation of crane scenarios based on utilisation, throughput, and queue dynamics. Task allocation was structured to balance system load and minimise bottlenecks. An interactive dashboard visualises KPI behaviour across scenarios.',
  c1k1:'Throughput improvement', c1k2:'Utilisation stability', c1k3:'Material handling delays',

  /* CS2 — Wind Installation */
  c2m:'Wind Industry · Germany · Heuristic Algorithm',
  c2t:'Wind Turbine Installation Optimisation',
  c2p:'Wind turbine installation operations are highly sensitive to wind-speed constraints, which significantly impact installation duration and project execution efficiency.',
  c2si:'A discrete-event simulation of the full logistics chain in AnyLogic was paired with a custom greedy heuristic in Java. Tasks were iteratively rescheduled around weather forecasts to minimise constraint violations.',
  c2s1:'Stochastic weather modelling from historical European wind data',
  c2s2:'Java-based heuristic for constrained schedule optimisation',
  c2s3:'Full factorial DoE to identify critical driver variables',
  c2s4:'ANOVA and interaction analysis validated in Minitab',
  c2r:'Component-level wind tolerance consistently reduces installation time across all evaluated scenarios. Sensitivity analysis identified the nacelle as the most critical component influencing overall installation performance.',
  c2k1:'Full factorial design', c2k2:'Statistical validation', c2k3:'Custom heuristic',

  /* CS3 — Algo Trader */
  c3m:'Personal Project · Live Web Application',
  c3t:'Multi-Market Algorithmic Trader',
  c3p:'Manual identification of institutional Smart Money patterns across multiple international markets is time-consuming, inconsistent, and prone to missed signals.',
  c3si:'A full-stack Python application with live API integrations for Crypto, Tadawul (Saudi Arabia), and PSX (Pakistan). Pattern detection algorithms scan price data and surface signals via real-time dashboard.',
  c3s1:'Live multi-market data ingestion with reconnect logic',
  c3s2:'Algorithmic FVG, Order Block, and liquidity grab detection',
  c3s3:'Signal confidence scoring and risk categorisation',
  c3s4:'Modular — new markets added in under 30 minutes',
  c3r:'Fully operational real-time scanner running across three live markets simultaneously, surfacing pattern-based signals with zero manual effort.',
  c3k1:'Live markets', c3k2:'Real-time signals', c3k3:'Python, no third-party logic',

  /* CS4 — 3D Bin Packing */
  c4m:'Logistics Research · Combinatorial Optimisation',
  c4t:'3D Bin Packing Optimisation System',
  c4p:'The 3D bin packing problem — common in manufacturing, logistics, and automated packaging. Efficiently arrange parts of varying dimensions inside available containers while maximising space utilisation.',
  c4si:'Hybrid optimisation combining a greedy constructive heuristic with simulated annealing. The greedy phase builds an initial feasible solution; simulated annealing iteratively improves it.',
  c4s1:'Greedy skyline-based initial placement',
  c4s2:'3D collision and boundary checks',
  c4s3:'Simulated annealing for optimisation (swap, rotate, move)',
  c4r:'Valid packing configurations across multiple box sizes with no collisions. Improved space utilisation by reducing unused volume through optimisation.',
  c4k1:'Combinatorial optimisation', c4k2:'Volumetric state space', c4k3:'Space utilisation gain',

  /* ────────── CONTACT PAGE ────────── */
  cnlbl:'Contact', cnh1:'Let\'s discuss your project.',
  cnsub:'Response within one business day — in English or German.',
  cnh2:'Get in touch directly.',
  cnp:'Available for project-based engagements across Germany and remotely.',
  dlbl:'DSGVO compliance',
  dp:'Form data processed solely to respond to your enquiry (Art. 6 Abs. 1 lit. b DSGVO). Not shared with third parties. <a href="#" onclick="showPage(\'datenschutz\');return false;">Privacy Policy</a>.',
  plnk:'Privacy Policy',
  fn:'Name', fe:'Email', fc:'Company (optional)', fs:'Service of interest',
  fs0:'Select a service…',
  fs1:'Discrete Event Simulation', fs2:'Process &amp; Layout Optimisation',
  fs3:'Python Automation', fs4:'Data Analysis &amp; Reporting',
  fs5:'IBM Maximo Implementation', fs6:'Algorithm &amp; Web App Development',
  fs7:'Other / Not sure yet',
  fm:'Project details',
  fpriv:'By submitting you agree to processing your data to handle your enquiry (Art. 6 Abs. 1 lit. b DSGVO). <a href="#" onclick="showPage(\'datenschutz\');return false;">Privacy Policy</a>.',
  fsub:'Send message',
  fok:'✓ Message sent. I\'ll be in touch within one business day.',
  plbl:'How it works',
  p1ps:'30 minutes. Understand the challenge.',
  p2ps:'Build the simulation against your data.',
  p3ps:'Statistical verification. Numbers you can defend.',
  p4ps:'Documented model. Support included.',

  /* Footer */
  fim:'Legal Notice', fprv:'Privacy Policy'
};
