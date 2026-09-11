(function(){
  if (window.__schengenDeskLoaded) { return; }
  window.__schengenDeskLoaded = true;

  function initSchengenDesk(){
/* Each country: base info + array of intakes.
   Each intake has its own deadline (MM-DD, recurring annually) so status/day-count is always live. */
const DATA = [
{c:"Austria",flag:"🇦🇹",central:"Mostly Direct",portal:"Apply directly to university (some via oead.at for scholarships)",fee:30,pubLo:1500,pubHi:3000,privLo:null,privHi:null,
 notes:"Public tuition ~€726/sem for non-EU (2 sem/yr) + ~€20 student union fee. Almost no private Master's market.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Austria, Islamabad (House 7A, Street 21, F-8/2).",
 financeEUR:12000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter + his last 6 months' bank statements and income proof (salary slips/tax returns) are generally accepted, notarised and translated if needed.",
 rejGeneral:"N/A", rejYear:"2024", rejPakistan:"83.5%", hurdleNote:"Austria had the HIGHEST rejection rate of any Schengen state for Pakistani applicants in 2024 (3,011 of 3,606 applications refused). Treat Austria as high-risk unless your file is very strong.",
 intakes:[
   {name:"Winter Intake", season:"Starts Oct", deadline:"09-05", window:"~1 Jun – 5 Sep"},
   {name:"Summer Intake", season:"Starts Mar", deadline:"02-05", window:"~15 Nov – 5 Feb"}
 ]},
{c:"Belgium",flag:"🇧🇪",central:"Direct",portal:"Apply directly to university (Flemish & French community portals differ)",fee:75,pubLo:2200,pubHi:6500,privLo:8000,privHi:18000,
 notes:"Private/business schools (e.g. Vlerick, Solvay) cost far more than public tuition.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Belgium, Islamabad (House 24, Street 4, F-6/3). Belgium's embassy also represents Luxembourg.",
 financeEUR:10000, blockedAccount:false, sponsorNote:"Yes — a notarised affidavit of support from the father plus his bank statements/income proof is generally accepted.",
 rejGeneral:"24.6%", rejYear:"2024", rejPakistan:null, hurdleNote:"One of the stricter Schengen states generally (~1 in 4 applications refused across all nationalities); expect close scrutiny of financial and study-purpose documents.",
 intakes:[
   {name:"Sept Intake", season:"Starts Sept (main)", deadline:"05-31", window:"~Mar – May"},
   {name:"Feb Intake", season:"Starts Feb (Flanders, limited)", deadline:"11-15", window:"~Sept – mid-Nov"}
 ]},
{c:"Bulgaria",flag:"🇧🇬",central:"Direct",portal:"Apply directly to university",fee:60,pubLo:3000,pubHi:8000,privLo:5000,privHi:12000,
 notes:"American University in Bulgaria and other private institutions sit at the high end.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Bulgaria, Islamabad.",
 financeEUR:6000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Newer Schengen member (joined 2024) — consular capacity in Pakistan is still limited; book appointments well ahead.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"07-31", window:"By ~31 Jul"}]},
{c:"Croatia",flag:"🇭🇷",central:"Direct",portal:"Apply directly to university",fee:40,pubLo:3000,pubHi:8000,privLo:null,privHi:null,
 notes:"Very limited English-taught Master's options; almost all higher ed is public.",
 embassyYes:false, embassyInfo:"No resident embassy (non-resident, ambassador accredited from Tehran, Iran). Apply via VFS Global Pakistan — check the VFS Croatia portal for the current representing Schengen embassy.",
 financeEUR:7000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"No resident embassy in Pakistan adds an extra logistical hurdle — factor in longer document-courier and processing time.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"07-31", window:"By ~31 Jul"}]},
{c:"Czechia",flag:"🇨🇿",central:"Direct",portal:"Apply directly to university",fee:25,pubLo:4000,pubHi:10000,privLo:2000,privHi:15000,
 notes:"Czech-taught public programmes are FREE for all nationalities — fee only applies to English-taught programmes. Separate ~€130 degree-recognition (nostrification) fee applies.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Czechia, Islamabad.",
 financeEUR:8000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted; some universities also ask for a joint bank letter.",
 rejGeneral:"~15.8%", rejYear:"2024", rejPakistan:null, hurdleNote:"High application volume relative to embassy capacity (Czechia processed 150,000+ applications in 2024) — apply early, appointment slots fill fast.",
 intakes:[{name:"Sept/Oct Intake", season:"Starts Sept/Oct", deadline:"04-30", window:"~Feb – Apr"}]},
{c:"Denmark",flag:"🇩🇰",central:"Mostly Direct",portal:"Apply via each university's own online portal",fee:110,pubLo:8000,pubHi:16000,privLo:null,privHi:null,
 notes:"Among the highest non-EU fees in the Nordics; negligible private-university sector.",
 embassyYes:true, embassyInfo:"Yes — Royal Danish Embassy, Islamabad.",
 financeEUR:13000, blockedAccount:false, sponsorNote:"Yes, but Denmark's non-EU student rules favour funds in the student's own name — a father's sponsorship letter with his bank statements is accepted as supporting evidence.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Strict, well-documented scrutiny of student finances; incomplete fund documentation is a common refusal reason.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"01-15", window:"~15 Jan (non-EU deadline)"}]},
{c:"Estonia",flag:"🇪🇪",central:"Central (DreamApply)",portal:"DreamApply.com — common portal used by most Estonian universities",fee:40,pubLo:2500,pubHi:7500,privLo:4000,privHi:9000,
 notes:"Estonian Business School (EBS) is the main private option.",
 embassyYes:false, embassyInfo:"No resident embassy — only an Honorary Consulate in Islamabad (citizen services only, no visas). Schengen visa applications are processed via the Embassy of Hungary, Islamabad, through VFS Global.",
 financeEUR:4800, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"27.2%", rejYear:"2024", rejPakistan:null, hurdleNote:"One of the higher-refusal Schengen states overall; no resident embassy in Pakistan means applications route through Hungary's embassy, adding a step.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"06-15", window:"~31 Mar – 15 Jun"}]},
{c:"Finland",flag:"🇫🇮",central:"Central (Studyinfo.fi)",portal:"Studyinfo.fi — national joint application system",fee:108,pubLo:8000,pubHi:18000,privLo:null,privHi:null,
 notes:"€100 application fee is fixed nationwide (mandatory since Jan 2025) for all non-EU/EEA applicants; virtually no private universities.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Finland, Islamabad.",
 financeEUR:6720, blockedAccount:false, sponsorNote:"Yes — Finnish Immigration Service (Migri) accepts a sponsor's bank statement and a signed support declaration from the father.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Studyinfo.fi's national joint-application deadlines are strict — missing the December/January window pushes your whole intake back a year.",
 intakes:[{name:"Autumn Intake", season:"Starts Sept", deadline:"01-15", window:"~Dec – mid-Jan (joint application period)"}]},
{c:"France",flag:"🇫🇷",central:"Central (Campus France)",portal:"Études en France / Campus France Pakistan (mandatory for most Pakistani applicants)",fee:60,pubLo:3900,pubHi:4500,privLo:12000,privHi:30000,
 notes:"Official public Master's fee is a flat ~€3,879/yr (2026-27); private Grandes Écoles/business schools (HEC, ESSEC, ESCP) cost much more.",
 embassyYes:true, embassyInfo:"Yes — Embassy of France, Islamabad.",
 financeEUR:7380, blockedAccount:false, sponsorNote:"Yes — a signed 'attestation de prise en charge' (sponsorship letter) from the father plus his tax returns/bank statements is explicitly accepted by Campus France.",
 rejGeneral:"15.8%", rejYear:"2024", rejPakistan:null, hurdleNote:"Popular destination — VFS/consulate appointment slots in Islamabad/Karachi/Lahore fill weeks to months ahead, especially Apr–Aug; book as early as your Études en France validation allows.",
 intakes:[
   {name:"Sept Intake", season:"Starts Sept (main)", deadline:"04-30", window:"~Nov – Apr on Études en France"},
   {name:"Jan Intake", season:"Starts Jan (limited programmes)", deadline:"10-31", window:"~Jul – Oct"}
 ]},
{c:"Germany",flag:"🇩🇪",central:"Mixed (Uni-Assist + Direct)",portal:"uni-assist.de for many universities; others apply direct via campus portal",fee:81,pubLo:0,pubHi:3200,privLo:8000,privHi:25000,
 notes:"uni-assist fee: €75 for 1st university + €30 each additional. Most public Länder charge NO tuition; Baden-Württemberg charges non-EU students; private unis (WHU, EBS, Jacobs) charge full fees.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Germany, Islamabad (plus a Consulate General in Karachi).",
 financeEUR:11904, blockedAccount:true, sponsorNote:"Only partially — Germany requires a dedicated Blocked Account (Sperrkonto, €11,904/yr via Fintiba/Expatrio) regardless of sponsor. A father's formal 'Verpflichtungserklärung' (obligation letter) can sometimes replace it, but approval is at the embassy's discretion.",
 rejGeneral:"13.7%", rejYear:"2024", rejPakistan:null, hurdleNote:"The German Embassy Islamabad runs a formal WAITING LIST for visa appointments due to very high demand — register early and expect a wait even before you get an appointment date.",
 intakes:[
   {name:"Winter Intake", season:"Starts Oct (main)", deadline:"07-15", window:"By ~15 Jul"},
   {name:"Summer Intake", season:"Starts Apr", deadline:"01-15", window:"By ~15 Jan"}
 ]},
{c:"Greece",flag:"🇬🇷",central:"Direct",portal:"Apply directly to university",fee:20,pubLo:1500,pubHi:5000,privLo:null,privHi:null,
 notes:"Master's (unlike Bachelor's) usually has fees for all students. Foreign private 'colleges' operate under franchise, not standalone private unis.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Greece, Islamabad.",
 financeEUR:8000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~6.3%", rejYear:"2024 (Pakistan-specific)", rejPakistan:"6.3%", hurdleNote:"One of the more approachable Schengen states for Pakistani applicants — comparatively low refusal rate, but still verify your document checklist carefully.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"08-31", window:"~Jun – Aug"}]},
{c:"Hungary",flag:"🇭🇺",central:"Mixed (Stipendium Hungaricum + Direct)",portal:"Stipendium Hungaricum portal for scholarships; else apply direct via Felvi/university site",fee:35,pubLo:4000,pubHi:9000,privLo:6000,privHi:15000,
 notes:"Stipendium Hungaricum scholarship route has NO application fee and is very popular with Pakistani students.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Hungary, Islamabad.",
 financeEUR:6000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements is accepted; not required at all if you win a Stipendium Hungaricum scholarship.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Stipendium Hungaricum applicants face a separate, competitive scholarship review in addition to the standard visa process — plan for both timelines.",
 intakes:[
   {name:"Stipendium Hungaricum", season:"Starts Sept (scholarship route)", deadline:"01-15", window:"~15 Jan"},
   {name:"Direct Application", season:"Starts Sept (self-funded)", deadline:"06-30", window:"~Apr – Jun"}
 ]},
{c:"Iceland",flag:"🇮🇸",central:"Direct",portal:"Apply directly to university (mainly University of Iceland)",fee:95,pubLo:300,pubHi:1200,privLo:null,privHi:null,
 notes:"Registration fee (~ISK75,000/yr) only for most public programmes, not full tuition. No notable private-university sector.",
 embassyYes:false, embassyInfo:"No resident embassy (non-resident, ambassador accredited from Oslo, Norway). Apply via VFS Global Pakistan — check the current representing Schengen embassy on the VFS Iceland portal.",
 financeEUR:14000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"13.8%", rejYear:"2025", rejPakistan:null, hurdleNote:"Refusal rate roughly doubled between 2024 and 2025 — don't assume Iceland is still an 'easy' option; prepare as thoroughly as for any other Schengen state.",
 intakes:[{name:"Sept Intake", season:"Starts Sept (Aug for some)", deadline:"04-15", window:"~15 Apr (non-EU deadline)"}]},
{c:"Italy",flag:"🇮🇹",central:"Mixed (Universitaly + Direct)",portal:"Universitaly.it (pre-enrolment, mandatory for visa) + direct university application",fee:45,pubLo:1000,pubHi:4000,privLo:10000,privHi:25000,
 notes:"Public fees are income-based (ISEE) and can be very affordable; private (Bocconi, LUISS, Politecnico private tracks) cost far more.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Italy, Islamabad.",
 financeEUR:6500, blockedAccount:false, sponsorNote:"Yes — a notarised 'dichiarazione di ospitalità/sostegno' (support declaration) from the father with his bank statements is accepted.",
 rejGeneral:"10.9%", rejYear:"2024", rejPakistan:null, hurdleNote:"Among the lower-refusal major Schengen states; Universitaly pre-enrolment portal can be slow to process during peak months (Jun–Jul), so start early.",
 intakes:[{name:"Sept/Oct Intake", season:"Starts Sept/Oct", deadline:"07-31", window:"Pre-enrolment on Universitaly: ~Jun – Jul"}]},
{c:"Latvia",flag:"🇱🇻",central:"Direct",portal:"Apply directly to university",fee:40,pubLo:3000,pubHi:7000,privLo:4000,privHi:8000,
 notes:"RISEBA and Turiba are the main private options; Riga has most English-taught programmes.",
 embassyYes:false, embassyInfo:"No resident embassy — only an Honorary Consulate in Karachi. Per Latvia's MFA, Schengen visa applications are represented by the Embassy of Germany, Islamabad (Punjab/KP) or the German Consulate General, Karachi (Sindh/Balochistan).",
 financeEUR:5200, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"No resident embassy — applications typically route via VFS Global with representation arrangements that can change; confirm the current process before booking.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"07-31", window:"~Jun – Jul"}]},
{c:"Liechtenstein",flag:"🇱🇮",central:"Direct",portal:"Apply directly to University of Liechtenstein",fee:110,pubLo:4500,pubHi:9000,privLo:null,privHi:null,
 notes:"Very small higher-education sector — effectively one public university.",
 embassyYes:false, embassyInfo:"No embassy anywhere near Pakistan — Liechtenstein is represented worldwide by Switzerland under their diplomatic union. Apply at the Embassy of Switzerland, Islamabad.",
 financeEUR:16000, blockedAccount:false, sponsorNote:"Yes, in principle — father's sponsorship letter with bank statements is accepted, though very few Pakistani applicants apply here directly.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Essentially no direct Pakistani applicant pipeline — you'll likely need to apply via Switzerland's diplomatic network, adding time to the process.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"04-30", window:"~30 Apr"}]},
{c:"Lithuania",flag:"🇱🇹",central:"Central (LAMA BPO) + Direct",portal:"LAMA BPO common admissions portal (lamabpo.lt) plus some direct applications",fee:55,pubLo:3000,pubHi:6500,privLo:4000,privHi:9000,
 notes:"ISM University of Management and Economics is the main private option.",
 embassyYes:false, embassyInfo:"No resident embassy — only an Honorary Consulate in Islamabad (non-visa). Non-resident, ambassador accredited from New Delhi, India. Apply via VFS Global Pakistan — confirm the current representing Schengen embassy on the VFS Lithuania portal.",
 financeEUR:5500, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"No resident embassy — LAMA BPO handles university admission, but the visa itself is processed through a representing Schengen mission; confirm current arrangements.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"07-31", window:"~Jun – Jul"}]},
{c:"Luxembourg",flag:"🇱🇺",central:"Direct",portal:"Apply directly to University of Luxembourg",fee:50,pubLo:250,pubHi:700,privLo:null,privHi:null,
 notes:"Single, low-cost public university; no private higher-ed sector.",
 embassyYes:false, embassyInfo:"No embassy in Pakistan. Formally represented by the Embassy of Belgium, Islamabad, under a bilateral representation agreement.",
 financeEUR:18000, blockedAccount:false, sponsorNote:"Yes — a legalised 'attestation de prise en charge' from the father with bank statements is accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Applications are handled via the Belgian Embassy Islamabad — build in extra time since Luxembourg cases aren't the embassy's primary caseload.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"04-30", window:"~Mar – Apr"}]},
{c:"Malta",flag:"🇲🇹",central:"Direct",portal:"Apply directly to university",fee:60,pubLo:8000,pubHi:13500,privLo:6000,privHi:12000,
 notes:"English-medium instruction throughout; a few smaller private colleges also operate.",
 embassyYes:false, embassyInfo:"No resident embassy — only Honorary Consulates in Lahore and Karachi (non-visa). Apply via VFS Global Pakistan — confirm the current representing Schengen embassy on the VFS Malta portal.",
 financeEUR:10000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"38.5%", rejYear:"2024", rejPakistan:null, hurdleNote:"Malta had the HIGHEST refusal rate of any Schengen state overall in 2024 (nearly 4 in 10 applications refused) — a genuinely high-risk option with limited consular capacity.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"08-31", window:"~Jun – Aug"}]},
{c:"Netherlands",flag:"🇳🇱",central:"Central (Studielink)",portal:"Studielink.nl — mandatory national application/registration portal",fee:110,pubLo:8500,pubHi:20000,privLo:null,privHi:null,
 notes:"Studielink itself is free; the ~€100 fee is charged separately by most universities as an admission/processing fee. Numerus fixus programmes close as early as ~Jan.",
 embassyYes:true, embassyInfo:"Yes — Embassy of the Kingdom of the Netherlands, Islamabad.",
 financeEUR:13569, blockedAccount:false, sponsorNote:"Yes — the IND accepts a 'private sponsor abroad' statement from the father plus his bank statement (not older than 3 months), though many universities prefer funds deposited directly to the institution.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Studielink deadlines are strict and numerus fixus (capped) programmes close as early as January — late applicants lose a full year, not just a place in the queue.",
 intakes:[
   {name:"Sept Intake", season:"Starts Sept (main)", deadline:"05-01", window:"By ~1 May"},
   {name:"Feb Intake", season:"Starts Feb (limited)", deadline:"11-01", window:"By ~1 Nov"}
 ]},
{c:"Norway",flag:"🇳🇴",central:"Mostly Direct",portal:"Apply directly to university (Søknadsweb); Samordna opptak mainly for local students",fee:0,pubLo:0,pubHi:15000,privLo:null,privHi:null,
 notes:"No application fee at public universities. Public unis were tuition-free; since 2023 several charge non-EU/EEA students full fees. No meaningful private sector.",
 embassyYes:true, embassyInfo:"Yes — Royal Norwegian Embassy, Islamabad.",
 financeEUR:12500, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted by the UDI.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Non-EU tuition fees introduced since 2023 have added extra financial-documentation requirements on top of the standard visa file.",
 intakes:[{name:"Aug Intake", season:"Starts Aug", deadline:"12-01", window:"~1 Dec (non-EU deadline)"}]},
{c:"Poland",flag:"🇵🇱",central:"Direct (some via NAWA 'Ready, Study, Go!')",portal:"Apply directly to university; NAWA portal aggregates programmes",fee:85,pubLo:2000,pubHi:6000,privLo:3000,privHi:8000,
 notes:"Growing number of private universities (Kozminski, Lazarski) alongside public ones.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Poland, Islamabad.",
 financeEUR:7500, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~5.6%", rejYear:"2024 (Pakistan-specific)", rejPakistan:"5.6%", hurdleNote:"One of the most approachable Schengen states for Pakistani applicants — consistently low refusal rate and growing university capacity for international students.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"07-31", window:"~Jun – Jul"}]},
{c:"Portugal",flag:"🇵🇹",central:"Direct",portal:"Apply via each university's own online application portal",fee:65,pubLo:3000,pubHi:7000,privLo:5000,privHi:10000,
 notes:"Católica and other private universities sit above public tuition.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Portugal, Islamabad.",
 financeEUR:9800, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Processing times vary noticeably between universities — some public universities are notably slower to issue the acceptance letter needed before you can apply for the visa.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"07-31", window:"~Apr – Jul"}]},
{c:"Romania",flag:"🇷🇴",central:"Direct",portal:"Apply directly to university",fee:60,pubLo:2000,pubHi:5000,privLo:3000,privHi:7000,
 notes:"Affordable overall; private universities (e.g. UMF private tracks) charge somewhat more.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Romania, Islamabad.",
 financeEUR:6000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Fewer Pakistani applicants historically means less local precedent/agent experience — double-check requirements directly with the university and embassy.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"09-30", window:"~Jul – Sept"}]},
{c:"Slovakia",flag:"🇸🇰",central:"Direct",portal:"Apply directly to university",fee:40,pubLo:3000,pubHi:8000,privLo:null,privHi:null,
 notes:"English-taught programmes cost more than Slovak-taught; negligible private-university sector.",
 embassyYes:false, embassyInfo:"No resident embassy (non-resident, ambassador accredited from Tehran, Iran). Apply via VFS Global Pakistan — check the current representing Schengen embassy on the VFS Slovakia portal.",
 financeEUR:6000, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"~2.7%", rejYear:"2024 (Pakistan-specific)", rejPakistan:"2.7%", hurdleNote:"The LOWEST rejection rate for Pakistani applicants among all Schengen states — a genuinely strong option if your programme fits your goals.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"06-30", window:"~Apr – Jun"}]},
{c:"Slovenia",flag:"🇸🇮",central:"Direct",portal:"Apply directly to university",fee:45,pubLo:3000,pubHi:7000,privLo:null,privHi:null,
 notes:"Limited English-taught Master's options; higher education is overwhelmingly public.",
 embassyYes:false, embassyInfo:"No resident embassy (non-resident, ambassador accredited from Tehran, Iran). Apply via VFS Global Pakistan — check the current representing Schengen embassy on the VFS Slovenia portal.",
 financeEUR:7200, blockedAccount:false, sponsorNote:"Yes — father's sponsorship letter with bank statements/income proof is generally accepted.",
 rejGeneral:"24.5%", rejYear:"2024", rejPakistan:null, hurdleNote:"Refusal rate is notably above the Schengen average; no resident embassy in Pakistan adds a logistical layer on top.",
 intakes:[{name:"Oct Intake", season:"Starts Oct", deadline:"06-30", window:"~Feb – Jun"}]},
{c:"Spain",flag:"🇪🇸",central:"Direct",portal:"Apply via each university's own admissions portal",fee:35,pubLo:1500,pubHi:4500,privLo:8000,privHi:18000,
 notes:"Public tuition regulated per region (comunidad autónoma); private unis (IE, ESADE, Comillas) cost significantly more.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Spain, Islamabad (Street 6, Diplomatic Enclave I).",
 financeEUR:9600, blockedAccount:false, sponsorNote:"Yes — a notarised sponsorship letter from the father with his bank statements/income proof is accepted.",
 rejGeneral:"15.7%", rejYear:"2024", rejPakistan:null, hurdleNote:"Spain rejects more Pakistani applications in absolute numbers than any other Schengen state (6,686 in 2024) simply due to high application volume — a strong, complete file matters even more here.",
 intakes:[{name:"Sept Intake", season:"Starts Sept", deadline:"07-31", window:"~Apr – Jul"}]},
{c:"Sweden",flag:"🇸🇪",central:"Central (Universityadmissions.se)",portal:"Universityadmissions.se — national joint application system",fee:85,pubLo:10000,pubHi:20000,privLo:null,privHi:null,
 notes:"Application fee is a fixed SEK900 (~$85), paid once regardless of how many programmes you apply to. No meaningful private-university sector.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Sweden, Islamabad.",
 financeEUR:11160, blockedAccount:false, sponsorNote:"Yes — Migrationsverket accepts a sponsor's bank statement together with a signed support letter from the father.",
 rejGeneral:"24.0%", rejYear:"2024", rejPakistan:null, hurdleNote:"One of the stricter Schengen states overall; Universityadmissions.se's own deadlines (mid-Jan) are unmovable, so plan the visa process well before then.",
 intakes:[{name:"Autumn Intake", season:"Starts Aug/Sept", deadline:"01-15", window:"Round 1: mid-Oct – mid-Jan"}]},
{c:"Switzerland",flag:"🇨🇭",central:"Direct",portal:"Apply directly to university",fee:120,pubLo:1200,pubHi:4000,privLo:15000,privHi:40000,
 notes:"Public tuition is very affordable even for internationals; private business schools (IMD, Geneva Business School) cost far more. Living costs are high.",
 embassyYes:true, embassyInfo:"Yes — Embassy of Switzerland, Islamabad.",
 financeEUR:24000, blockedAccount:false, sponsorNote:"Yes, but the bar is high given Switzerland's cost of living — a strong sponsorship letter from the father with substantial bank statements and income proof is needed.",
 rejGeneral:"~15% (Schengen avg. used)", rejYear:"2024", rejPakistan:null, hurdleNote:"Extremely high proof-of-funds bar given the cost of living — this is usually the bigger hurdle here, not the visa refusal rate itself.",
 intakes:[
   {name:"Sept Intake", season:"Starts Sept (main)", deadline:"04-30", window:"~Nov – Apr"},
   {name:"Feb Intake", season:"Starts Feb (limited)", deadline:"11-30", window:"~Aug – Nov"}
 ]},
];

let RATE = 278;
const EUR_USD = 1.08; // approx EUR to USD, mid-2026
const fmtUSD = n => n===0 ? "Free" : "$" + n.toLocaleString();
const fmtPKR = n => n===0 ? "—" : Math.round(n*RATE).toLocaleString() + " PKR";
const fmtEURasUSD = eur => Math.round(eur*EUR_USD);
const fmtEURasPKR = eur => Math.round(eur*EUR_USD*RATE);
const fmtUSDplain = n => "$" + n.toLocaleString();
function statusColorForRate(rateStr){
  const n = parseFloat(String(rateStr).replace(/[^0-9.]/g,''));
  if(isNaN(n)) return "#5B5F6B";
  if(n >= 30) return "#B03A2E";
  if(n >= 15) return "#C98A2E";
  return "#3E6E62";
}

/* ---- live deadline math: given "MM-DD", find next occurrence and status ---- */
function nextOccurrence(mmdd){
  const [mm, dd] = mmdd.split('-').map(Number);
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, mm-1, dd, 23,59,59);
  if(target < now){
    target = new Date(year+1, mm-1, dd, 23,59,59);
  }
  const diffDays = Math.ceil((target - now) / (1000*60*60*24));
  return {target, diffDays};
}
function statusForDeadline(mmdd){
  const {diffDays} = nextOccurrence(mmdd);
  if(diffDays <= 30) return "red";
  if(diffDays <= 90) return "orange";
  return "green";
}
const STATUS_META = {
  red:    {label:"Closing soon",  color:"#B03A2E"},
  orange: {label:"Open now",      color:"#C98A2E"},
  green:  {label:"Next window",   color:"#3E6E62"},
};

function countryMinStatus(d){
  // returns the most urgent status among its intakes, for the grid badge
  const order = {red:0, orange:1, green:2};
  let best = "green";
  d.intakes.forEach(ik=>{
    const s = statusForDeadline(ik.deadline);
    if(order[s] < order[best]) best = s;
  });
  return best;
}

function barcode(seed){
  let bars = "";
  let s = seed.split("").reduce((a,c)=>a+c.charCodeAt(0),0);
  for(let i=0;i<36;i++){
    s = (s * 9301 + 49297) % 233280;
    const h = 8 + (s % 22);
    bars += `<span style="height:${h}px"></span>`;
  }
  return bars;
}

function hasIntakeSeason(d, key){
  // key: 'sept' or 'feb'
  const needle = key === 'sept' ? 'sept' : 'feb';
  return d.intakes.some(ik => (ik.season + ' ' + ik.name + ' ' + ik.window).toLowerCase().includes(needle))
      || (key === 'sept' && d.intakes.some(ik => (ik.season+ik.name).toLowerCase().includes('oct')||(ik.season+ik.name).toLowerCase().includes('aug')));
}

function renderGrid(){
  const grid = document.getElementById('stampGrid');
  grid.innerHTML = DATA.map((d,i)=>{
    const status = countryMinStatus(d);
    const meta = STATUS_META[status];
    const n = d.intakes.length;
    const sept = hasIntakeSeason(d,'sept');
    const feb = hasIntakeSeason(d,'feb');
    return `
    <button class="stamp" data-i="${i}" data-sept="${sept}" data-feb="${feb}">
      <div class="stamp-top">
        <span class="stamp-flag">${d.flag}</span>
        <span class="stamp-badge">${n} intake${n>1?'s':''}/yr</span>
      </div>
      <div class="stamp-country">${d.c}</div>
      <div class="stamp-portal">${d.central}</div>
      <div style="display:flex; gap:6px; align-items:center; margin-top:2px;">
        <span class="stamp-dl" style="background:${meta.color}">${meta.label}</span>
        <span class="stamp-embassy" title="${d.embassyYes ? 'Embassy in Pakistan' : 'No embassy in Pakistan'}">${d.embassyYes ? '🏛️' : '✈️'}</span>
      </div>
    </button>`;
  }).join('');

  grid.querySelectorAll('.stamp').forEach(btn=>{
    btn.addEventListener('click', ()=>openModal(parseInt(btn.dataset.i)));
  });
  applyIntakeFilter(currentIntakeFilter);
}

let currentIntakeFilter = 'all';
function applyIntakeFilter(filter){
  currentIntakeFilter = filter;
  const stamps = document.querySelectorAll('#stampGrid .stamp');
  let visible = 0;
  stamps.forEach(s=>{
    let show = true;
    if(filter === 'sept') show = s.dataset.sept === 'true';
    if(filter === 'feb') show = s.dataset.feb === 'true';
    s.classList.toggle('filtered-out', !show);
    if(show) visible++;
  });
  const hint = document.getElementById('gridHint');
  if(hint){
    hint.textContent = filter === 'all'
      ? `${DATA.length} stamps · click any one`
      : `${visible} of ${DATA.length} countries offer a ${filter === 'sept' ? 'September' : 'February'} intake`;
  }
}
document.querySelectorAll('.if-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.if-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    applyIntakeFilter(chip.dataset.filter);
  });
});

let activeIndex = null;
let activeIntake = 0;

function openModal(i){
  activeIndex = i;
  activeIntake = 0;
  document.getElementById('modalBackdrop').classList.add('show');
  document.body.style.overflow = 'hidden';
  renderBoardingPass();
}
function closeModal(){
  document.getElementById('modalBackdrop').classList.remove('show');
  document.body.style.overflow = '';
  activeIndex = null;
}

function renderBoardingPass(){
  const d = DATA[activeIndex];
  const ik = d.intakes[activeIntake];
  const status = statusForDeadline(ik.deadline);
  const meta = STATUS_META[status];
  const {diffDays} = nextOccurrence(ik.deadline);

  const tabs = d.intakes.length > 1 ? `
    <div class="intake-tabs">
      ${d.intakes.map((x,idx)=>`
        <button class="intake-tab ${idx===activeIntake?'active':''}" data-idx="${idx}">
          ${x.name}
        </button>`).join('')}
    </div>` : '';

  const privBlock = (d.privLo===null) ?
    `<div class="fee-card na">N/A — no significant private-university<br>Master's market</div>` :
    `<div class="fee-card">
       <div class="field-label">Private university tuition / yr</div>
       <div class="field-value big">${fmtUSD(d.privLo)}–${fmtUSD(d.privHi)}
         <span class="pkr">${fmtPKR(d.privLo)} – ${fmtPKR(d.privHi)}</span>
       </div>
     </div>`;

  const pass = document.getElementById('boardingPass');
  pass.innerHTML = `
    <div class="bp-scroll">
      <div class="bp-head">
        <div class="bp-head-left">
          <span class="bp-flag">${d.flag}</span>
          <div>
            <h3>${d.c}</h3>
            <div class="route">MASTER'S · SCHENGEN AREA · BOARDING PASS</div>
          </div>
        </div>
        <button class="bp-close" id="bpClose" aria-label="Close">✕</button>
      </div>

      <div class="bp-body">
        ${tabs}

        <div class="deadline-panel" style="background:${meta.color}">
          <div class="dl-left">
            <div class="field-label">${ik.name} — Deadline</div>
            <div class="field-value">${ik.window} &nbsp;·&nbsp; ${ik.season}</div>
          </div>
          <div class="dl-days">${diffDays}
            <span>days left · ${meta.label}</span>
          </div>
        </div>

        <div class="bp-row">
          <div>
            <div class="field-label">Application route</div>
            <div class="field-value">${d.central}</div>
          </div>
          <div>
            <div class="field-label">How to apply</div>
            <div class="field-value">${d.portal}</div>
          </div>
        </div>

        <div class="embassy-box ${d.embassyYes ? 'yes' : 'no'}">
          <div class="embassy-icon">${d.embassyYes ? '🏛️' : '✈️'}</div>
          <div>
            <div class="field-label" style="color:inherit; opacity:.8;">Embassy in Pakistan?</div>
            <div class="field-value" style="color:inherit; font-weight:600;">${d.embassyYes ? 'Yes' : 'No'}</div>
            <div class="embassy-detail">${d.embassyInfo}</div>
          </div>
        </div>

        <div class="fee-cards">
          <div class="fee-card">
            <div class="field-label">Application fee</div>
            <div class="field-value big">${fmtUSD(d.fee)}
              <span class="pkr">${fmtPKR(d.fee)}</span>
            </div>
          </div>
          <div class="fee-card">
            <div class="field-label">Public university tuition / yr</div>
            <div class="field-value big">${fmtUSD(d.pubLo)}–${fmtUSD(d.pubHi)}
              <span class="pkr">${fmtPKR(d.pubLo)} – ${fmtPKR(d.pubHi)}</span>
            </div>
          </div>
          ${privBlock}
        </div>

        <div class="finance-box">
          <div class="finance-head">
            <div class="finance-icon">${d.blockedAccount ? '🔒' : '🏦'}</div>
            <div>
              <div class="field-label" style="color:inherit; opacity:.75;">Bank Statement / Financial Proof Needed</div>
              <div class="field-value" style="color:inherit; font-weight:700; font-family:'IBM Plex Mono',monospace;">
                €${d.financeEUR.toLocaleString()} / yr
                <span style="font-weight:500; font-size:12.5px; opacity:.85;"> ≈ ${fmtUSDplain(fmtEURasUSD(d.financeEUR))} ≈ ${fmtEURasPKR(d.financeEUR).toLocaleString()} PKR</span>
              </div>
            </div>
          </div>
          <div class="finance-row">
            <div class="finance-tag ${d.blockedAccount ? 'on' : 'off'}">${d.blockedAccount ? 'Blocked account REQUIRED' : 'No blocked account required'}</div>
          </div>
          <div class="finance-detail"><b>Can the father sponsor?</b> ${d.sponsorNote}</div>
        </div>

        <button class="hurdle-toggle" id="hurdleToggle">
          <span>⚠️ Visa Hurdles &amp; Approval Odds from Pakistan</span>
          <span class="hurdle-arrow" id="hurdleArrow">▾</span>
        </button>
        <div class="hurdle-panel" id="hurdlePanel">
          <div class="hurdle-stats">
            <div class="hurdle-stat">
              <div class="field-label">Refusal rate (${d.rejYear})</div>
              <div class="field-value big" style="color:${statusColorForRate(d.rejPakistan || d.rejGeneral)};">${d.rejGeneral}</div>
              <div class="hurdle-small">${d.rejPakistan ? 'Pakistan-specific figure' : 'All-nationality Schengen figure (country-specific Pakistan data not published)'}</div>
            </div>
            <div class="hurdle-stat">
              <div class="field-label">Pakistan overall Schengen average</div>
              <div class="field-value big" style="color:#B03A2E;">47.5%</div>
              <div class="hurdle-small">All Schengen states combined, 2024 (DG HOME)</div>
            </div>
          </div>
          <div class="notes-box" style="margin-bottom:0;">${d.hurdleNote}</div>
          <div class="hurdle-small" style="margin-top:10px;">Note: these figures are for short-stay (Type C) Schengen visas — the main public dataset available. Student/National-D visa approval odds are usually more favourable than tourist visas (you have an acceptance letter and earmarked funds), but the same embassy-level scrutiny patterns generally apply. Always prepare a complete, well-documented file regardless of the country's headline rate.</div>
        </div>

        <div class="notes-box">${d.notes}</div>
      </div>

      <div class="perf"></div>
      <div class="bp-stub">
        <div class="barcode">${barcode(d.c + ik.name)}</div>
        <div class="stub-note">RATE USD→PKR ${RATE} · SOURCE: OFFICIAL PORTALS, JUL 2026</div>
      </div>
    </div>
  `;

  document.getElementById('bpClose').addEventListener('click', closeModal);
  pass.querySelectorAll('.intake-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeIntake = parseInt(tab.dataset.idx);
      renderBoardingPass();
    });
  });
  document.getElementById('hurdleToggle').addEventListener('click', ()=>{
    const panel = document.getElementById('hurdlePanel');
    const arrow = document.getElementById('hurdleArrow');
    const open = panel.classList.toggle('open');
    arrow.textContent = open ? '▴' : '▾';
  });
}

document.getElementById('modalBackdrop').addEventListener('click', (e)=>{
  if(e.target.id === 'modalBackdrop') closeModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeModal();
});

function updateStats(){
  let urgent=0, open=0;
  DATA.forEach(d=>{
    d.intakes.forEach(ik=>{
      const s = statusForDeadline(ik.deadline);
      if(s==='red') urgent++;
      if(s==='orange') open++;
    });
  });
  const elUrgent = document.getElementById('statUrgent');
  const elOpen = document.getElementById('statOpen');
  const elToday = document.getElementById('statToday');
  if(elUrgent) elUrgent.textContent = urgent;
  if(elOpen) elOpen.textContent = open;
  if(elToday) elToday.textContent = new Date().toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'});
}

document.getElementById('rateInput').addEventListener('input', (e)=>{
  const v = parseFloat(e.target.value);
  if(!isNaN(v) && v>0){
    RATE = v;
    if(activeIndex!==null) renderBoardingPass();
  }
});

renderGrid();
updateStats();

/* ---------------- Contact form (declared early so matcher can reuse its endpoint) ---------------- */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn = document.getElementById('cfSubmit');
    const status = document.getElementById('cfStatus');
    const endpoint = contactForm.getAttribute('action');

    if(endpoint.includes('YOUR_FORM_ID')){
      status.className = 'cf-status err';
      status.textContent = 'Form not connected yet — replace YOUR_FORM_ID in the code with your real Formspree endpoint.';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';

    try{
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      });
      if(res.ok){
        status.className = 'cf-status ok';
        status.textContent = '✓ Message sent — thank you! I will get back to you soon.';
        contactForm.reset();
      } else {
        status.className = 'cf-status err';
        status.textContent = 'Something went wrong — please try again or email directly.';
      }
    } catch(err){
      status.className = 'cf-status err';
      status.textContent = 'Network error — please check your connection and try again.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}

/* ---------------- Student Profile Matcher (client-side recommendation engine) ---------------- */
function computeRecommendations(profile){
  const results = DATA.map((d,i)=>{
    // --- Tuition affordability ---
    const totalUSD = d.fee + d.pubLo;
    const totalPKR = Math.round(totalUSD * RATE);
    const tuitionFits = profile.budgetPKR >= totalPKR;
    const tuitionTight = !tuitionFits && profile.budgetPKR >= totalPKR * 0.75;

    // --- Financial proof (bank statement / blocked account) affordability ---
    const financeReqPKR = fmtEURasPKR(d.financeEUR);
    const financeFits = profile.financePKR >= financeReqPKR;
    const financeTight = !financeFits && profile.financePKR >= financeReqPKR * 0.75;

    // --- Blocked-account capability hard-check ---
    // Only relevant for countries that actually require one (currently: Germany)
    let blockedIssue = false;
    if(d.blockedAccount && profile.blockedCapable === 'no'){
      blockedIssue = true;
    }

    const fits = tuitionFits && financeFits && !blockedIssue;
    const tight = !fits && (tuitionTight || financeTight) && !blockedIssue;

    const septOk = hasIntakeSeason(d,'sept');
    const febOk = hasIntakeSeason(d,'feb');
    let intakeMatch = true;
    if(profile.intake === 'sept') intakeMatch = septOk;
    if(profile.intake === 'feb') intakeMatch = febOk;

    const rejRate = parseFloat(String(d.rejPakistan || d.rejGeneral).replace(/[^0-9.]/g,'')) || 20;

    // scholarship-friendly flag for strong-grade students
    const scholarshipFriendly = ['Hungary','France','Germany'].includes(d.c);

    let score = 0;
    if(fits) score += 100;
    else if(tight) score += 40;
    if(intakeMatch) score += 50;
    if(blockedIssue) score -= 70;            // heavy penalty — likely a real blocker
    score -= rejRate * 0.5;                  // lower rejection = better
    score -= totalUSD / 1000;                // cheaper = better (tiebreak)
    if(profile.strongGrades && scholarshipFriendly) score += 15;

    const why = [];

    // Tuition line
    if(!profile.budgetEntered){
      why.push(`No tuition budget entered — showing cheapest options first: est. ${fmtUSDplain(totalUSD)} (${totalPKR.toLocaleString()} PKR/yr) for fee + tuition.`);
    } else {
      why.push(tuitionFits ? `Tuition fits — est. ${fmtUSDplain(totalUSD)} (${totalPKR.toLocaleString()} PKR) needed vs your ${profile.budgetPKR.toLocaleString()} PKR budget.`
                    : tuitionTight ? `Tuition is slightly above budget — est. ${totalPKR.toLocaleString()} PKR needed; may be feasible with a scholarship.`
                    : `Tuition is above your stated budget (needs ~${totalPKR.toLocaleString()} PKR).`);
    }

    // Financial proof line
    if(!profile.financeEntered){
      why.push(`Bank-statement amount not entered — this country typically requires ~${financeReqPKR.toLocaleString()} PKR/yr in proof of funds.`);
    } else {
      why.push(financeFits ? `Your bank-statement amount covers the ~${financeReqPKR.toLocaleString()} PKR/yr required here.`
                    : financeTight ? `Your bank-statement amount is close but slightly under the ~${financeReqPKR.toLocaleString()} PKR/yr typically required.`
                    : `Your bank-statement amount is well under the ~${financeReqPKR.toLocaleString()} PKR/yr typically required.`);
    }

    // Blocked account line
    if(d.blockedAccount){
      if(profile.blockedCapable === 'no'){
        why.push(`⚠️ This country requires a mandatory blocked account — you indicated you can't arrange one, so this is a real hurdle unless a formal sponsor declaration is accepted by the embassy.`);
      } else if(profile.blockedCapable === 'yes'){
        why.push(`Requires a blocked account, which you said you can arrange — good fit on that front.`);
      } else {
        why.push(`Requires a mandatory blocked account (not just a bank statement) — worth confirming you can set this up before applying.`);
      }
    }

    if(profile.intake !== 'any') why.push(intakeMatch ? `Offers the ${profile.intake==='sept'?'September':'February'} intake you want.` : `Does not clearly offer a ${profile.intake==='sept'?'September':'February'} intake.`);
    why.push(`Visa refusal reference: ${d.rejGeneral}${d.rejPakistan ? ' (Pakistan-specific)' : ' (general Schengen figure)'}.`);
    if(profile.strongGrades && scholarshipFriendly) why.push(`Your grades make you competitive for scholarship routes here (e.g. Stipendium Hungaricum, DAAD, Eiffel).`);
    if(profile.englishLevel === 'none') why.push(`You haven't taken IELTS/TOEFL yet — budget 6–8 weeks to prepare before applying here.`);

    return {i, d, fits, tight, blockedIssue, intakeMatch, totalUSD, totalPKR, financeReqPKR, financeFits, score, why: why.join(' ')};
  });

  return results
    .filter(r => profile.intake === 'any' || r.intakeMatch)
    .sort((a,b)=> b.score - a.score)
    .slice(0, 8);
}

function renderMatchResults(profile, results){
  const box = document.getElementById('matcherResults');
  if(results.length === 0){
    box.innerHTML = `<div class="mr-empty">No countries match that exact combination — try widening your budget/bank-statement amount or setting intake to "Either".</div>`;
    return;
  }
  const fitCount = results.filter(r=>r.fits).length;
  const anyFinanceEntered = profile.budgetEntered || profile.financeEntered;
  const summaryText = !anyFinanceEntered
    ? `${profile.name ? profile.name + ', h' : 'H'}ere are your top ${results.length} matches, cheapest first — add your tuition budget and bank-statement amount above to see which truly fit.`
    : `${profile.name ? profile.name + ', h' : 'H'}ere are your top ${results.length} matches — ${fitCount} fit both your tuition budget and your bank-statement/blocked-account capacity, ranked by fit, intake match, and visa ease.`;
  box.innerHTML = `
    <div class="mr-summary">${summaryText}</div>
    <div class="mr-grid">
      ${results.map((r,rank)=>`
        <div class="mr-card ${r.fits ? 'fit' : r.tight ? 'tight' : ''} ${r.blockedIssue ? 'blocked-issue' : ''}" data-open="${r.i}">
          <div class="mr-top">
            <span class="mr-name">${r.d.flag} ${r.d.c}</span>
            <span class="mr-rank">#${rank+1}</span>
          </div>
          <div class="mr-cost">Tuition ${fmtUSDplain(r.totalUSD)} · ${r.totalPKR.toLocaleString()} PKR/yr &nbsp;|&nbsp; Proof needed ${r.financeReqPKR.toLocaleString()} PKR/yr</div>
          <div class="mr-tags">
            ${profile.budgetEntered ? `<span class="mr-tag ${(r.totalPKR<=profile.budgetPKR)?'budget-ok':'budget-tight'}">${(r.totalPKR<=profile.budgetPKR) ? 'Tuition OK' : 'Tuition tight'}</span>` : ''}
            ${profile.financeEntered ? `<span class="mr-tag ${r.financeFits?'budget-ok':'budget-tight'}">${r.financeFits ? 'Bank statement OK' : 'Bank statement short'}</span>` : ''}
            ${r.d.blockedAccount ? `<span class="mr-tag ${r.blockedIssue?'budget-tight':'intake-ok'}">${r.blockedIssue ? 'Blocked account issue' : 'Blocked account req.'}</span>` : ''}
            ${profile.intake!=='any' ? `<span class="mr-tag intake-ok">${profile.intake==='sept'?'Sept':'Feb'} intake ✓</span>` : ''}
          </div>
          <div class="mr-why">${r.why}</div>
        </div>
      `).join('')}
    </div>
  `;
  box.querySelectorAll('.mr-card').forEach(card=>{
    card.addEventListener('click', ()=> openModal(parseInt(card.dataset.open)));
  });
}

const mfSubmitBtn = document.getElementById('mfSubmit');
if(mfSubmitBtn){
  document.querySelectorAll('#matchForm input, #matchForm select').forEach(el=>{
    el.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){ e.preventDefault(); mfSubmitBtn.click(); }
    });
  });
  mfSubmitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    try{
      const gradeRaw = document.getElementById('mfGrade').value.replace(/[^0-9.]/g,'');
      const budgetRaw = document.getElementById('mfBudget').value.replace(/[^0-9.]/g,'');
      const budgetEntered = budgetRaw.trim() !== '';
      const financeRaw = document.getElementById('mfFinanceAmount').value.replace(/[^0-9.]/g,'');
      const financeEntered = financeRaw.trim() !== '';

      const profile = {
        name: document.getElementById('mfName').value.trim(),
        degree: document.getElementById('mfDegree').value,
        field: document.getElementById('mfField').value.trim(),
        grade: gradeRaw ? parseFloat(gradeRaw) : null,
        englishLevel: document.getElementById('mfEnglish').value,
        intake: document.getElementById('mfIntake').value,
        budgetPKR: budgetEntered ? parseFloat(budgetRaw) : Infinity,
        budgetEntered,
        financePKR: financeEntered ? parseFloat(financeRaw) : Infinity,
        financeEntered,
        blockedCapable: document.getElementById('mfBlockedCapable').value,
      };
      profile.strongGrades = profile.grade !== null && profile.grade >= 70;

      const results = computeRecommendations(profile);
      renderMatchResults(profile, results);
      const resultsBox = document.getElementById('matcherResults');
      if(resultsBox && resultsBox.scrollIntoView) resultsBox.scrollIntoView({behavior:'smooth', block:'start'});

      // Optional: send full profile as a lead via our own API, only if user opted in
      const consent = document.getElementById('mfConsent').checked;
      const consentStatus = document.getElementById('mfConsentStatus');
      if(consent){
        const profileName = profile.name || '(not given)';
        const profileMsg  = [
          `Degree: ${profile.degree}`,
          `Field: ${profile.field || '(not given)'}`,
          `Grade: ${profile.grade ?? '(not given)'}`,
          `English: ${profile.englishLevel}`,
          `Intake: ${profile.intake}`,
          `Budget PKR: ${profile.budgetEntered ? profile.budgetPKR.toLocaleString() : '(not given)'}`,
          `Bank statement PKR: ${profile.financeEntered ? profile.financePKR.toLocaleString() : '(not given)'}`,
          `Blocked account: ${profile.blockedCapable}`,
          `Top matches: ${results.slice(0,5).map(r=>r.d.c).join(', ')}`,
        ].join('\n');
        // We need an email — use a placeholder if not provided
        const profileEmail = document.getElementById('cfEmail') && document.getElementById('cfEmail').value.trim()
          ? document.getElementById('cfEmail').value.trim()
          : 'no-email-provided@matcher.schengendesk';
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: profileName, email: profileEmail, message: `[Matcher Profile]\n${profileMsg}` }),
        })
          .then(()=>{ consentStatus.textContent = '✓ Your profile was sent to the site owner.'; consentStatus.style.color = '#8FD9B6'; })
          .catch(()=>{ consentStatus.textContent = 'Could not send profile (network issue) — your recommendations above are still valid.'; consentStatus.style.color = '#F0A19A'; });
      }
    } catch(err){
      const box = document.getElementById('matcherResults');
      if(box){
        box.innerHTML = `<div class="mr-empty">Something went wrong computing recommendations: ${err.message}. Please check your inputs and try again.</div>`;
      }
      console.error('Matcher error:', err);
    }
  });
}

// ── Contact Form Handler ────────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameVal    = document.getElementById('cfName').value.trim();
    const emailVal   = document.getElementById('cfEmail').value.trim();
    const messageVal = document.getElementById('cfMessage').value.trim();
    const submitBtn  = document.getElementById('cfSubmit');
    const statusEl   = document.getElementById('cfStatus');

    // Basic client-side validation
    if (!nameVal || !emailVal || !messageVal) {
      statusEl.textContent = '⚠️ Please fill in all fields.';
      statusEl.style.color = '#F0A19A';
      return;
    }

    // Loading state
    submitBtn.disabled   = true;
    submitBtn.textContent = 'Sending…';
    statusEl.textContent  = '';
    statusEl.style.color  = '#9BA3B8';

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name: nameVal, email: emailVal, message: messageVal }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        statusEl.textContent = '✅ Message sent! Check your inbox — we\'ll get back to you within 24–48 hours.';
        statusEl.style.color = '#8FD9B6';
        contactForm.reset();
      } else {
        statusEl.textContent = '❌ ' + (data.error || 'Something went wrong. Please try again.');
        statusEl.style.color = '#F0A19A';
      }
    } catch (err) {
      statusEl.textContent = '❌ Network error — please check your connection and try again.';
      statusEl.style.color = '#F0A19A';
      console.error('[Contact form] Error:', err);
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSchengenDesk);
  } else {
    initSchengenDesk();
  }
})();