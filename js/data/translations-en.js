/* ============================================================
   ENGLISH TRANSLATIONS — v2
   Mirrors translations-de.js
   ============================================================ */
window.T = window.T || {};
window.T.en = {
  /* Nav */
  n0:'Home', n1:'Services', n2:'Case Studies', n3:'Contact', n4:'Get in touch',

  /* Hero */
  avail:'Available · Germany &amp; Remote',
  h1:'Simulate.<br>Optimise.<br><span class="accent">Deliver.</span>',
  hdesc:'Freelance Digitalisation Engineer — <strong>Discrete Event Simulation</strong>, process optimisation and Python automation for manufacturers who need numbers, not narratives.',
  hb1:'Start a project', hb2:'View case studies',

  /* Credential strip (replaces stat bar) */
  cred1:'5+ years inside global manufacturers',
  cred2:'M.Eng Simulation &amp; System Design',
  cred3:'HS Stralsund',
  cred4:'DSGVO-compliant',
  bgd:'Professional background',

  /* About */
  albl:'About',
  ash:'Engineering precision for industrial growth.',
  biop1:'Over five years inside leading global manufacturers — power electronics, automotive, infrastructure. I translate complex production challenges into validated simulation models and Python automation that produces measurable returns.',
  biop2:'Operating under strict German DSGVO standards. Your IP stays yours. Every engagement ends with a documented model, a trained team, and a clear return on investment.',
  bion:'Affan Khan',
  biot:'M.Eng · Freelance Digitalisation Engineer · Flensburg, DE',

  /* CTA */
  ctah:'Free 30-minute discovery call.',
  ctasub:'Fixed scope. Fixed price. No surprises.',
  ctabtn:'Book a call',

  /* Services */
  slbl:'Services', sh1:'Six services. One engineer.',
  ssub:'Results-driven, data-protected, and fully transparent — from first call to final delivery.',
  s1h:'Discrete Event Simulation',         s1p:'Model production, logistics, and material flow. Find bottlenecks and prove ROI before you invest.',
  s2h:'Process &amp; Layout Optimisation', s2p:'Lean analysis, VSM, and warehouse redesign — backed by simulation data, not intuition.',
  s3h:'Python Automation',                 s3p:'Scripts, reporting pipelines, workflow automation. Manual tasks become reliable, repeatable systems.',
  s4h:'Data Analysis &amp; Reporting',     s4p:'Statistical studies, KPI dashboards, and quantitative analysis. Data that drives decisions.',
  s5h:'IBM Maximo Implementation',         s5p:'EAM rollout and optimisation. Consolidate legacy systems, reduce downtime, standardise maintenance.',
  s6h:'Algorithm &amp; Web App Development', s6p:'Custom algorithms, live data integrations, and web applications — from bin-packing to market scanners.',

  /* Process */
  plbl:'How it works', psh:'Simple. Fast. Transparent.',
  p1h:'Discovery call',  p1p:'30 minutes. Understand the challenge and define the goal together.',
  p2h:'Clear proposal',  p2p:'Fixed scope, timeline, and price. No surprises, no hidden costs.',
  p3h:'Build &amp; update', p3p:'Weekly progress updates. You see everything as it is built.',
  p4h:'Deliver &amp; support', p4p:'Full handover with documentation. Post-delivery support included.',
  p1ps:'30 minutes. Understand the challenge.', p2ps:'Fixed scope, timeline, price.',
  p3ps:'Weekly updates. Full transparency.',     p4ps:'Handover with docs. Support included.',

  /* Case studies */
  cslbl:'Case studies', csh1:'Real projects. Real results.',
  cssub:'Selected work spanning production simulation, optimisation algorithms, and live data systems.',
  ndah:'NDA &amp; DSGVO',
  ndap:'Visuals anonymised to protect client IP under mutual NDA and DSGVO Art. 6 Abs. 1 lit. b.',
  tp:'Problem', ts:'Approach', tr:'Results',

  /* CS1 */
  c1m:'Heavy Infrastructure · Germany · Discrete Event Simulation',
  c1t:'Wind Turbine Production Simulation',
  c1p:'A leading industrial client needed to justify a major crane investment for their wind turbine assembly line. Conventional capacity planning could not capture stochastic variability, equipment breakdowns, and shift interdependencies — management required evidence, not assumptions.',
  c1si:'A discrete-event simulation model was developed in AnyLogic to represent the relevant production segment and material handling processes. Empirical production data was used for parameterisation and validation, with structured verification throughout the model lifecycle.',
  c1s1:'Data-driven calibration from historical production datasets',
  c1s2:'Stepwise verification of process logic and system interactions',
  c1s3:'Scenario design with stochastic demand inputs from upstream processes',
  c1s4:'Throughput analysis and bottleneck detection across crane configurations',
  c1r:'Quantitative evaluation of crane scenarios based on utilisation, throughput, and queue dynamics. Task allocation was structured to balance system load and minimise bottlenecks. An interactive dashboard visualises KPI behaviour across scenarios.',
  c1k1:'Throughput improvement', c1k2:'Utilisation stability', c1k3:'Material handling delays',

  /* CS2 */
  c2m:'Wind Industry · Germany · Heuristic Algorithm',
  c2t:'Wind Turbine Installation Optimisation',
  c2p:'Wind turbine installation operations are highly sensitive to wind-speed constraints, which significantly impact installation duration and project execution. Planning methods often lack the ability to quantify how component-level wind tolerance affects overall system performance under uncertain environmental conditions.',
  c2si:'A discrete-event simulation of the full logistics chain in AnyLogic was paired with a custom greedy heuristic in Java. Tasks were iteratively rescheduled around weather forecasts to minimise constraint violations.',
  c2s1:'Stochastic weather modelling from historical European wind data',
  c2s2:'Java-based heuristic for constrained schedule optimisation',
  c2s3:'Full factorial DoE to identify critical driver variables',
  c2s4:'ANOVA and interaction analysis validated in Minitab',
  c2r:'Component-level wind tolerance consistently reduces installation time across all evaluated scenarios. Sensitivity analysis identified the nacelle as the most critical component influencing overall installation performance.',
  c2k1:'Full factorial design', c2k2:'Statistical validation', c2k3:'Custom greedy heuristic',

  /* CS3 */
  c3m:'Personal Project · Live Web Application',
  c3t:'Multi-Market Algorithmic Trader',
  c3p:'Manual identification of institutional Smart Money patterns across multiple international markets is time-consuming, inconsistent, and prone to missed signals — especially when monitoring different time zones and asset classes simultaneously.',
  c3si:'A full-stack Python application with live API integrations for Crypto, Tadawul (Saudi Arabia), and PSX (Pakistan). Pattern detection algorithms continuously scan price data and surface signals through a real-time dashboard.',
  c3s1:'Live multi-market data ingestion with reconnect logic',
  c3s2:'Algorithmic FVG, Order Block, and liquidity grab detection',
  c3s3:'Signal confidence scoring and risk categorisation',
  c3s4:'Modular — new markets added in under 30 minutes',
  c3r:'A fully operational real-time scanner running across three live markets simultaneously, surfacing pattern-based signals with zero manual effort. Demonstrates applied algorithmic engineering beyond industrial simulation.',
  c3k1:'Live markets', c3k2:'Real-time signals', c3k3:'Python, no third-party logic',

  /* CS4 */
  c4m:'Logistics Research · Combinatorial Optimisation',
  c4t:'3D Bin Packing Optimisation System',
  c4p:'The 3D bin packing problem — common in manufacturing, logistics, and automated packaging. Efficiently arrange parts of varying dimensions inside available containers while maximising space utilisation and ensuring no overlaps or boundary violations.',
  c4si:'Hybrid optimisation combining a greedy constructive heuristic with simulated annealing. The greedy phase builds an initial feasible solution using layered skyline-based placement; simulated annealing iteratively improves it through random swaps, rotations, and repositioning.',
  c4s1:'Greedy skyline-based initial placement',
  c4s2:'3D collision and boundary checks',
  c4s3:'Simulated annealing for optimisation (swap, rotate, move)',
  c4r:'Valid packing configurations across multiple box sizes with no collisions. Improved space utilisation by reducing unused volume through optimisation, adapting effectively to different container dimensions.',
  c4k1:'Combinatorial optimisation', c4k2:'Volumetric state space', c4k3:'Space utilisation vs baseline',

  /* Contact */
  cnlbl:'Contact', cnh1:"Let's discuss your project.",
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
  fok:"✓ Message sent. I'll be in touch within one business day.",

  /* Footer */
  fim:'Legal Notice', fprv:'Privacy Policy'
};
