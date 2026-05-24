/* ============================================================
   ENGLISH TRANSLATIONS
   Each key here maps to a `data-key="..."` attribute in the HTML.
   To change wording: edit the value here. To add a new string:
     1. add `data-key="myKey"` to the HTML element
     2. add `myKey: '...'` here AND to translations-de.js
   ============================================================ */
window.T = window.T || {};
window.T.en = {
  /* Nav */
  n0:'Home', n1:'Services', n2:'Case Studies', n3:'Contact', n4:'Get in touch',

  /* Hero */
  avail:'Available · Germany &amp; Remote',
  h1:'Simulate.<br>Optimise.<br><span class="acc">Deliver.</span>',
  hdesc:'Freelance Digitalisation Engineer — <strong>Discrete Event Simulation</strong>, process optimisation &amp; Python automation for manufacturers who need numbers, not narratives.',
  hb1:'Start a project →', hb2:'View case studies', gbadge:'Selected Work',

  /* Stats */
  s1:'Years experience', s2:'Avg. throughput gain', s3:'Capacity optimised', s4:'Simulation &amp; System Design',

  /* About */
  bgd:'Professional background',
  albl:'About me',
  ash:'Engineering precision<br>for industrial growth.',
  v1h:'Industrial pedigree', v1p:'Built within the internal teams of global industry leaders — from power electronics to automotive — I translate complex production challenges into validated simulation models.',
  v2h:'Data protection first', v2p:'Operating under strict German DSGVO standards. Your IP is yours. All case study visuals are anonymised to protect proprietary client data.',
  v3h:'Numbers, not narratives', v3p:'Actionable insights through Discrete Event Simulation and Python automation. No guesswork — just validated engineering results with clear ROI.',
  bion:'Affan Khan', biot:'M.Eng · Freelance Digitalisation Engineer · Flensburg, DE',
  biop1:'Over five years of hands-on experience inside leading global manufacturers. My work spans discrete event simulation, lean process optimisation, and custom Python tooling — all delivering measurable results.',
  biop2:'Based in Flensburg, working across Germany and remotely. Every engagement ends with a documented model, a trained team, and a clear return on investment.',

  /* CTA band */
  ctah:'Free 30-minute discovery call.', ctasub:'Fixed scope. Fixed price. No surprises.', ctabtn:'Book a call →',

  /* Services page */
  slbl:'Services', sh1:'Six services.<br>One engineer.', ssub:'Results-driven, data-protected, and fully transparent — from first call to final delivery.',
  s1h:'Discrete Event Simulation',         s1p:'Model production, logistics, and material flow. Find bottlenecks and prove ROI before you invest.',
  s2h:'Process &amp; Layout Optimisation', s2p:'Lean analysis, VSM, and warehouse redesign — backed by simulation data, not intuition.',
  s3h:'Python Automation',                 s3p:'Scripts, reporting pipelines, workflow automation. Manual tasks become reliable, repeatable systems.',
  s4h:'Data Analysis &amp; Reporting',     s4p:'Statistical studies, KPI dashboards, and quantitative analysis. Data that drives decisions.',
  s5h:'IBM Maximo Implementation',         s5p:'EAM rollout and optimisation. Consolidate legacy systems, reduce downtime, standardise maintenance.',
  s6h:'Algorithm &amp; Web App Development', s6p:'Custom algorithms, live data integrations, and web applications — from bin-packing to market scanners.',

  /* Process */
  plbl:'How it works', psh:'Simple. Fast. Transparent.',
  p1h:'Free discovery call', p1p:'30 minutes. Understand your challenge and define the goal together.',
  p2h:'Clear proposal',      p2p:'Fixed scope, timeline, and price. No surprises, no hidden costs.',
  p3h:'Build &amp; update',  p3p:'Weekly progress updates. You see everything as it is built.',
  p4h:'Deliver &amp; support', p4p:'Full handover with documentation. Post-delivery support included.',
  p1ps:'30 min. Understand your challenge.', p2ps:'Fixed scope, timeline &amp; price.',
  p3ps:'Weekly updates. Full transparency.', p4ps:'Handover with docs. Support included.',

  /* Case studies */
  cslbl:'Case studies', csh1:'Real projects.<br>Real results.', cssub:'Click any project to read the full problem, approach, and results.',
  ndah:'NDA &amp; DSGVO', ndap:'Visuals are intentionally anonymised to protect client IP under mutual NDA and DSGVO Art. 6 Abs. 1 lit. b.',
  tp:'Problem', ts:'Approach', tr:'Results',

  /* CS1 — Wind Turbine Production */
  c1m:'Heavy Infrastructure · Germany · Discrete Event Simulation', c1t:'Wind Turbine Production Simulation',
  c1p:'A leading industrial client needed to justify a major crane investment for their wind turbine assembly line. Conventional capacity planning could not capture stochastic variability, equipment breakdowns, and shift interdependencies — the management required evidence, not assumptions.',
  c1si:'A discrete-event simulation (DES) model was developed in AnyLogic to represent the relevant production area and material handling processes.',
  c1s1:'Data-driven model calibration using historical production datasets', c1s2:'Stepwise verification of process logic and system interactions',
  c1s3:'Scenario design incorporating stochastic demand inputs from upstream processes', c1s4:'Throughput analysis and bottleneck detection under multiple crane configurations',
  c1r:'The model supported quantitative evaluation of crane scenarios based on utilization, throughput, and queue dynamics. An interactive dashboard was developed to visualize KPI behaviour across scenarios.',
  c1k1:'Throughput increase', c1k2:'Machine utilization stability', c1k3:'Material handling delays',

  /* CS2 — Installation Optimisation */
  c2m:'Wind Industry · Germany · Heuristic Algorithm', c2t:'Wind Turbine Installation Optimisation',
  c2p:'Wind turbine installation operations are highly sensitive to wind-speed-related constraints, which significantly impact installation duration and project execution efficiency.',
  c2si:'A DES model of the wind turbine installation process was developed in AnyLogic and integrated with a custom greedy heuristic algorithm implemented in Java.',
  c2s1:'Stochastic weather modelling from historical European wind data', c2s2:'Greedy heuristic-based scheduling in Java for constrained optimisation',
  c2s3:'Full factorial DoE to identify critical driver variables', c2s4:'ANOVA and interaction analysis validated in Minitab',
  c2r:'The analysis showed that increasing component-level wind tolerance consistently reduces installation time. The nacelle was identified as the most critical component influencing overall installation performance.',
  c2k1:'Full factorial design', c2k2:'Statistical validation', c2k3:'Custom Greedy Search',

  /* CS3 — Algorithmic Trader */
  c3m:'Personal Project · Live Web Application', c3t:'Multi-Market Algorithmic Trader',
  c3p:'Manual identification of institutional Smart Money patterns across multiple international markets is time-consuming, inconsistent, and prone to missed signals.',
  c3si:'A full-stack Python application was built with live API integrations for Crypto, Tadawul (Saudi Arabia), and PSX (Pakistan).',
  c3s1:'Live multi-market data ingestion with reconnect logic', c3s2:'Algorithmic FVG, Order Block, and liquidity grab detection',
  c3s3:'Signal confidence scoring and risk categorisation', c3s4:'Modular — new markets added in under 30 minutes',
  c3r:'A fully operational real-time scanner running across three live markets simultaneously, surfacing pattern-based signals with zero manual effort.',
  c3k1:'Live markets', c3k2:'Real-time signals', c3k3:'Python, no third-party logic',

  /* CS4 — 3D Bin Packing */
  c4m:'Logistics Research · Smart search algorithm', c4t:'3D Bin Packing Optimization System',
  c4p:'This project addresses the 3D bin packing problem commonly found in manufacturing, logistics, and automated packaging systems.',
  c4si:'Hybrid method combining greedy layering + simulated annealing.',
  c4s1:'Greedy skyline-based initial placement', c4s2:'3D collision + boundary checks', c4s3:'Simulated annealing for optimization (swap, rotate, move)',
  c4r:'The system successfully generates valid packing configurations across multiple box sizes, achieving improved space utilization and adapting effectively to different container dimensions.',
  c4k1:'Combinatorial Optimization', c4k2:'Volumetric state space', c4k3:'Space utilisation vs baseline',

  /* CS5 — RL Benchmarking */
  c5m:'Academic Research · Netherlands · Reinforcement Learning', c5t:'RL Benchmarking for Academic Supply Chain Research',
  c5p:'The client was a doctoral-level academic researcher comparing a custom AnyLogic supply chain simulation against a peer-reviewed RL model. The open-source RL codebase required significant adaptation to match the client\'s experimental setup, cost structure, and parameters — requiring a dedicated Python specialist to make it research-ready.',
  c5si:'Conducted a gap analysis between both models, then iteratively adapted the RL codebase to align with the client\'s research setup.',
  c5s1:'Gap analysis — identified mismatches in parameters, cost definitions and training conditions',
  c5s2:'Environment setup — configured Python environment and resolved a critical performance bottleneck',
  c5s3:'Tooling — built demand generation, experiment control and automated graph output scripts',
  c5s4:'Verification and handover — validated results and documented all changes for reproducibility',
  c5r:'Delivered a fully experiment-ready RL pipeline — the client could independently run, verify and replicate all results, enabling a successful thesis comparison between both models.',

  /* Contact */
  cnlbl:'Contact', cnh1:'Ready to optimise?', cnsub:'Response within 24 hours — in English or German.',
  cnh2:'Get in touch directly.',
  cnp:'Available for project-based engagements in Germany and remotely. Typical response within one business day.',
  dlbl:'DSGVO compliance',
  dp:'Form data processed solely to respond to your enquiry (Art. 6 Abs. 1 lit. b DSGVO). Not shared with third parties. <a href="#" onclick="showPage(\'datenschutz\');return false;">Privacy Policy</a>.',
  plnk:'Privacy Policy',
  fn:'Name', fe:'Email', fc:'Company (optional)', fs:'Service of interest',
  fs0:'Select a service…', fs1:'Discrete Event Simulation', fs2:'Process &amp; Layout Optimisation',
  fs3:'Python Automation', fs4:'Data Analysis &amp; Reporting', fs5:'IBM Maximo Implementation',
  fs6:'Algorithm &amp; Web App Development', fs7:'Other / Not sure yet',
  fm:'Project details',
  fpriv:'By submitting you agree to processing your data to handle your enquiry (Art. 6 Abs. 1 lit. b DSGVO). <a href="#" onclick="showPage(\'datenschutz\');return false;">Privacy Policy</a>.',
  fsub:'Send message →',
  fok:"✓ Message sent. I'll be in touch within 24 hours.",

  /* Footer */
  fim:'Legal Notice', fprv:'Privacy Policy'
};
