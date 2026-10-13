(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  /* ───────── translations (Turkish lives in the HTML and is collected on load) ───────── */
  const dict = {
    tr: { title: document.title },
    en: {
      title: 'Atlas Oral & Dental Health Clinic — Zirconia, Implants, Veneers | Kahramanmaraş',
      'brand.sub': 'Oral & Dental Health',
      'nav.zir': 'Zirconia', 'nav.treat': 'Treatments', 'nav.rev': 'Reviews', 'nav.contact': 'Contact',
      'cta.book': 'Book a visit',
      'hero.kicker': 'Kahramanmaraş · Türkiye',
      'hero.title': 'Zirconia that looks <em>natural,</em> crafted in every detail.',
      'hero.lede': 'From zirconia, laminate and E-max restorations to implants: we rebuild your smile with metal-free ceramics that let light through the way a natural tooth does.',
      'hero.cta1': 'Book via WhatsApp', 'hero.cta2': 'Watch the treatments',
      'hero.tag1': 'Metal-free', 'hero.tag2': 'Lets light through', 'hero.tag3': 'Tissue-friendly',
      'fact.google': 'Google rating', 'fact.count': '· 17 reviews', 'fact.where': 'Address',
      'fact.addr': 'Bahçeci Hoca Blvd, Onikişubat', 'fact.phone': 'Phone',
      'm.zir': 'Zirconia', 'm.lam': 'Laminate Veneers', 'm.imp': 'Implants', 'm.surg': 'Oral Surgery',
      'm.endo': 'Root Canal', 'm.orto': 'Orthodontics', 'm.pedo': 'Children’s Dentistry',
      'm.perio': 'Gum Treatment', 'm.botox': 'Botox', 'm.smile': 'Smile Design',
      'story.kicker': 'The process',
      'story.title': 'How a zirconia crown <em>comes together.</em>',
      's1.t': 'Examination and impression',
      's1.p': 'Your teeth and bite are assessed, the shade is chosen and an impression is taken.',
      's2.t': 'Preparing the tooth',
      's2.p': 'Under local anaesthesia the tooth is gently reduced to make room for the crown. A temporary crown protects it meanwhile.',
      's3.t': 'Zirconia framework',
      's3.p': 'The metal-free zirconia framework made from your impression is tried in on the tooth.',
      's4.t': 'Porcelain and fitting',
      's4.p': 'Once you approve the shade and shape, the crown is permanently bonded.',
      'why.kicker': 'The material',
      'why.title': 'Why <em>zirconia?</em>',
      'why.lede': 'The difference is in how it handles light. The same light, two different frameworks:',
      'cmp.a.label': 'Porcelain fused to metal', 'cmp.a.tag': 'Light stops',
      'cmp.a.h': 'A metal core blocks light',
      'cmp.a.p': 'The crown can look flat and opaque, and a grey shadow may show at the gum line.',
      'cmp.b.label': 'Zirconia', 'cmp.b.tag': 'Light passes',
      'cmp.b.h': 'Zirconia lets light through',
      'cmp.b.p': 'The crown has the depth of natural enamel and the gum line keeps its healthy colour.',
      'f1.t': 'Metal-free', 'f1.p': 'No metal core, so no grey line at the gum and no metal sensitivity concerns.',
      'f2.t': 'Translucent', 'f2.p': 'A translucency close to natural enamel, most noticeable on front teeth.',
      'f3.t': 'Strong', 'f3.p': 'A high-strength ceramic that also stands up to chewing forces on back teeth.',
      'f4.t': 'Tissue-friendly', 'f4.p': 'Its smooth surface sits well with the gums and holds less plaque.',
      'treat.kicker': 'Treatments',
      'treat.title': 'Every treatment, <em>step by step.</em>',
      'treat.lede': 'Pick a treatment and watch how it is carried out.',
      'also.label': 'Also', 'also.1': 'Oral & Jaw Surgery', 'also.2': 'Children’s Dentistry', 'also.3': 'Gum Treatment', 'also.4': 'Botox',
      'rev.kicker': 'Patient reviews',
      'rev.sub': 'Average of 17 reviews on Google.',
      'rev.link': 'See all reviews on Google',
      'rev.note': 'Reviews are from Google Maps, translated from Turkish.',
      'q1': 'Courteous staff, accomplished dentists, healthy teeth, beautiful smiles. Thanks to Ms Esra’s skilled hands I can laugh freely and eat whatever I like.',
      'q2': 'I had a full-mouth restoration. Very kind, attentive and professional. The prices are fair too. Thank you to both Mr Saim and Ms Esra.',
      'q3': 'I had a root canal treatment and I am very, very pleased. The care and attention — everything was great.',
      'q4': 'A clinic worth choosing: high quality, clean, with friendly and gentle doctors.',
      'q5': 'The one address for a healthy, bright smile! Thank you for all the care and attention.',
      'q6': 'Experienced hands, a warm welcome, and you leave satisfied. A light touch — we recommend it to friends.',
      'contact.kicker': 'Contact',
      'contact.title': 'Let’s plan your smile <em>together.</em>',
      'c.addr.l': 'Address', 'c.phone.l': 'Phone', 'c.wa.l': 'WhatsApp', 'c.wa.v': 'Send a message', 'c.ig.l': 'Instagram',
      'c.cta1': 'Message on WhatsApp', 'c.cta2': 'Get directions',
      'foot.note': 'The content on this site is for information only; please consult your dentist for diagnosis and treatment.',
      'dock.call': 'Call', 'dock.wa': 'WhatsApp',
    },
    de: {
      title: 'Atlas Poliklinik für Mund- & Zahngesundheit — Zirkon, Implantate, Veneers | Kahramanmaraş',
      'brand.sub': 'Mund- & Zahngesundheit',
      'nav.zir': 'Zirkon', 'nav.treat': 'Behandlungen', 'nav.rev': 'Bewertungen', 'nav.contact': 'Kontakt',
      'cta.book': 'Termin buchen',
      'hero.kicker': 'Kahramanmaraş · Türkei',
      'hero.title': 'Zirkon, das <em>natürlich</em> wirkt. Präzise bis ins Detail.',
      'hero.lede': 'Von Zirkon-, Veneer- und E-max-Versorgungen bis zum Implantat: Wir gestalten Ihr Lächeln mit metallfreier Keramik, die Licht durchlässt wie ein natürlicher Zahn.',
      'hero.cta1': 'Termin per WhatsApp', 'hero.cta2': 'Behandlungen ansehen',
      'hero.tag1': 'Metallfrei', 'hero.tag2': 'Lichtdurchlässig', 'hero.tag3': 'Gewebefreundlich',
      'fact.google': 'Google-Bewertung', 'fact.count': '· 17 Rezensionen', 'fact.where': 'Adresse',
      'fact.addr': 'Bahçeci Hoca Bulvarı, Onikişubat', 'fact.phone': 'Telefon',
      'm.zir': 'Zirkon', 'm.lam': 'Veneers', 'm.imp': 'Implantate', 'm.surg': 'Kieferchirurgie',
      'm.endo': 'Wurzelbehandlung', 'm.orto': 'Kieferorthopädie', 'm.pedo': 'Kinderzahnheilkunde',
      'm.perio': 'Zahnfleischbehandlung', 'm.botox': 'Botox', 'm.smile': 'Smile Design',
      'story.kicker': 'Der Ablauf',
      'story.title': 'So entsteht eine <em>Zirkonkrone.</em>',
      's1.t': 'Untersuchung und Abdruck',
      's1.p': 'Zähne und Biss werden beurteilt, die Zahnfarbe wird bestimmt und ein Abdruck genommen.',
      's2.t': 'Präparation des Zahns',
      's2.p': 'Unter örtlicher Betäubung wird der Zahn schonend beschliffen, um Platz für die Krone zu schaffen. In der Zwischenzeit schützt ihn ein Provisorium.',
      's3.t': 'Zirkongerüst',
      's3.p': 'Das nach Ihrem Abdruck gefertigte, metallfreie Zirkongerüst wird am Zahn anprobiert.',
      's4.t': 'Keramik und Einsetzen',
      's4.p': 'Sobald Sie Farbe und Form freigeben, wird die Krone dauerhaft befestigt.',
      'why.kicker': 'Das Material',
      'why.title': 'Warum <em>Zirkon?</em>',
      'why.lede': 'Der Unterschied liegt im Umgang mit Licht. Dasselbe Licht, zwei verschiedene Gerüste:',
      'cmp.a.label': 'Metallkeramik', 'cmp.a.tag': 'Licht stoppt',
      'cmp.a.h': 'Der Metallkern blockiert das Licht',
      'cmp.a.p': 'Die Krone kann flach und opak wirken; am Zahnfleischrand kann ein grauer Schatten sichtbar werden.',
      'cmp.b.label': 'Zirkon', 'cmp.b.tag': 'Licht dringt durch',
      'cmp.b.h': 'Zirkon lässt Licht durch',
      'cmp.b.p': 'Die Krone hat die Tiefe von natürlichem Zahnschmelz, der Zahnfleischrand behält seine gesunde Farbe.',
      'f1.t': 'Metallfrei', 'f1.p': 'Kein Metallkern, also kein grauer Rand am Zahnfleisch und keine Sorge wegen Metallunverträglichkeit.',
      'f2.t': 'Transluzent', 'f2.p': 'Eine Lichtdurchlässigkeit nahe am natürlichen Schmelz, besonders sichtbar im Frontzahnbereich.',
      'f3.t': 'Belastbar', 'f3.p': 'Eine hochfeste Keramik, die auch den Kaukräften im Seitenzahnbereich standhält.',
      'f4.t': 'Gewebefreundlich', 'f4.p': 'Die glatte Oberfläche verträgt sich gut mit dem Zahnfleisch und bindet weniger Plaque.',
      'treat.kicker': 'Behandlungen',
      'treat.title': 'Jede Behandlung, <em>Schritt für Schritt.</em>',
      'treat.lede': 'Wählen Sie eine Behandlung und sehen Sie, wie sie abläuft.',
      'also.label': 'Außerdem', 'also.1': 'Kieferchirurgie', 'also.2': 'Kinderzahnheilkunde', 'also.3': 'Zahnfleischbehandlung', 'also.4': 'Botox',
      'rev.kicker': 'Patientenstimmen',
      'rev.sub': 'Durchschnitt aus 17 Google-Rezensionen.',
      'rev.link': 'Alle Rezensionen bei Google ansehen',
      'rev.note': 'Rezensionen von Google Maps, aus dem Türkischen übersetzt.',
      'q1': 'Höfliches Team, erfolgreiche Zahnärzte, gesunde Zähne, schönes Lächeln. Dank der geschickten Hände von Frau Esra kann ich unbeschwert lachen und essen, was ich möchte.',
      'q2': 'Ich habe eine Komplettsanierung machen lassen. Sehr freundlich, aufmerksam und professionell. Auch die Preise sind fair. Danke an Herrn Saim und Frau Esra.',
      'q3': 'Ich hatte eine Wurzelbehandlung und bin sehr, sehr zufrieden. Zuwendung, Betreuung — alles war bestens.',
      'q4': 'Eine Poliklinik, die man gern wählt: hochwertig, sauber, mit freundlichen und einfühlsamen Ärzten.',
      'q5': 'Die Adresse für ein gesundes, strahlendes Lächeln! Vielen Dank für die Aufmerksamkeit und Betreuung.',
      'q6': 'Erfahrene Hände, ein herzlicher Empfang, und man geht zufrieden. Eine leichte Hand — wir empfehlen sie Freunden.',
      'contact.kicker': 'Kontakt',
      'contact.title': 'Planen wir Ihr Lächeln <em>gemeinsam.</em>',
      'c.addr.l': 'Adresse', 'c.phone.l': 'Telefon', 'c.wa.l': 'WhatsApp', 'c.wa.v': 'Nachricht senden', 'c.ig.l': 'Instagram',
      'c.cta1': 'Per WhatsApp schreiben', 'c.cta2': 'Route planen',
      'foot.note': 'Die Inhalte dieser Website dienen nur der Information; für Diagnose und Behandlung wenden Sie sich bitte an Ihre Zahnärztin oder Ihren Zahnarzt.',
      'dock.call': 'Anrufen', 'dock.wa': 'WhatsApp',
    },
  };

  /* ───────── treatment illustrations ───────── */
  const C = 'M140,200 C126,160 120,110 140,76 C154,52 182,50 200,64 C218,50 246,52 260,76 C280,110 274,160 260,200 Z';
  const R = 'M140,200 C146,262 168,338 188,366 C195,376 205,376 212,366 C232,338 254,262 260,200 Z';
  const WHOLE = 'M140,200 C126,160 120,110 140,76 C154,52 182,50 200,64 C218,50 246,52 260,76 C280,110 274,160 260,200 C254,262 232,338 212,366 C205,376 195,376 188,366 C168,338 146,262 140,200 Z';
  const STUMP = 'M158,200 C152,172 154,130 166,112 C176,98 224,98 234,112 C246,130 248,172 242,200 Z';
  const INC = 'M146,200 C138,150 136,96 150,70 C160,54 240,54 250,70 C264,96 262,150 254,200 Z';
  const SCREW = 'M176,206 L224,206 L218,330 C216,350 184,350 182,330 Z';
  const PULP = 'M186,122 C180,104 220,104 214,122 C212,160 208,260 203,340 C202,350 198,350 197,340 C192,260 188,160 186,122 Z';
  const SMALL = 'M-24,74 C-30,20 -30,-28 -20,-44 C-12,-54 12,-54 20,-44 C30,-28 30,20 24,74 Z';
  const STAR = 'M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z';

  const bed = '<path class="gum" d="M0,216 C70,208 112,188 140,200 L260,200 C288,188 330,208 400,216 L400,400 L0,400 Z"/><path class="bone" d="M0,258 C90,250 120,242 146,252 L254,252 C280,242 310,250 400,258 L400,400 L0,400 Z"/>';
  const shine = (clip) => `<g clip-path="url(#${clip})"><rect class="shine" x="90" y="30" width="46" height="190"/></g>`;
  const spark = (x, y, s = 1, delay = 0) => `<g transform="translate(${x},${y}) scale(${s})"><path class="spark" style="animation-delay:${delay}s" d="${STAR}"/></g>`;
  const svg = (inner) => `<svg class="scene sc" viewBox="0 -110 400 510" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${inner}</svg>`;

  const threads = Array.from({ length: 17 }, (_, i) => { const y = 140 + i * 14; return `<line x1="170" y1="${y}" x2="230" y2="${y - 9}"/>`; }).join('');
  const orthoTeeth = [
    [88, -9, 8, -6], [144, 8, -12, 0], [200, -6, 14, 2], [256, 10, -8, 0], [312, -8, 7, 6],
  ];
  const orthoVars = ([, r, y, x]) => `--r:${r}deg;--y:${y}px;--x:${x}px`;
  const box = '<rect x="-30" y="-54" width="60" height="128" fill="none"/>';

  const scenes = {
    zir: svg(`${bed}<path class="root" d="${R}"/><path class="natural zir-stump" d="${STUMP}"/><path class="natural zir-nat" d="${C}"/>
      <g class="zir-crown"><path class="ceramic" d="${C}"/><path class="zir-mill" d="${C}"/>${shine('clipCrown')}</g>
      ${spark(286, 70, 0.9, 0.2)}${spark(118, 120, 0.6, 0.35)}`),
    lam: svg(`${bed}<path class="root" d="${R}"/><path class="lam-tooth" d="${INC}"/><path class="lam-etch" d="${INC}"/>
      <g class="lam-shell"><path class="ceramic" d="${INC}"/>${shine('clipInc')}</g>
      ${spark(282, 76, 0.9, 0.2)}${spark(122, 150, 0.6, 0.35)}`),
    imp: svg(`${bed}<g class="imp-screw"><path class="titan" d="${SCREW}"/><g clip-path="url(#clipScrew)"><g class="imp-thread">${threads}</g></g></g>
      <path class="imp-heal" d="${SCREW}"/>
      <path class="titan imp-abut" d="M184,206 L216,206 L211,158 C210,151 190,151 189,158 Z"/>
      <g class="imp-crown"><path class="ceramic" d="${C}"/>${shine('clipCrown')}</g>`),
    kan: svg(`${bed}<path class="root" d="${WHOLE}"/><path class="kan-pulp" d="${PULP}"/>
      <g clip-path="url(#clipPulp)"><rect class="kan-fill" x="180" y="104" width="40" height="250"/></g>
      <circle class="kan-bub" cx="199" cy="322" r="2.6"/><circle class="kan-bub" cx="202" cy="300" r="2" style="animation-delay:.3s"/><circle class="kan-bub" cx="198" cy="280" r="3" style="animation-delay:.55s"/>
      <path class="kan-access" d="M192,60 L208,60 L212,116 L188,116 Z"/><path class="kan-cap" d="M191,61 C196,56 204,56 209,61 L212,114 L188,114 Z"/>
      <g class="kan-file"><line x1="200" y1="-60" x2="200" y2="334"/><rect x="191" y="-94" width="18" height="36" rx="5"/></g>`),
    ble: svg(`${bed}<path class="root" d="${R}"/><path class="ble-tooth" d="${C}"/><path class="edge" d="${C}"/><path class="ble-gel" d="${C}"/>
      <path class="ble-guard" d="M134,205 C160,195 240,195 266,205"/>
      <rect class="ble-lamp" x="148" y="-92" width="104" height="24" rx="12"/>
      ${[-2, -1, 0, 1, 2].map((i) => `<line class="ble-ray" x1="${200 + i * 16}" y1="-62" x2="${200 + i * 26}" y2="${44 + Math.abs(i) * 8}"/>`).join('')}
      <g transform="translate(334,40)">${['#fffefa', '#f6eccd', '#eedfb0', '#e6d39a', '#dfc686'].map((c, i) => `<rect x="0" y="${i * 28}" width="20" height="24" rx="5" fill="${c}"/>`).join('')}<path class="ble-mark" d="M-18,118 L-6,124 L-18,130 Z"/></g>
      ${spark(124, 84, 0.9, 0.1)}${spark(280, 126, 0.7, 0.3)}${spark(214, 22, 0.6, 0.45)}`),
    ort: svg(`<line class="ort-guide" x1="56" y1="96" x2="344" y2="96"/>
      ${orthoTeeth.map((t) => `<g transform="translate(${t[0]},150)"><g class="ort-t" style="${orthoVars(t)}">${box}<path class="ceramic" d="${SMALL}"/><path class="edge" d="${SMALL}"/></g></g>`).join('')}
      ${bed}<path class="ort-wire" d="M60,146 L340,146"/>
      ${orthoTeeth.map((t) => `<g transform="translate(${t[0]},150)"><g class="ort-t ort-b" style="${orthoVars(t)}">${box}<g class="ort-fade"><rect class="br" x="-8" y="-12" width="16" height="15" rx="2.5"/></g></g></g>`).join('')}
      ${spark(60, 70, 0.8, 0.45)}${spark(336, 60, 0.7, 0.6)}`),
  };

  const treatments = [
    { id: 'zir',
      tr: { name: 'Zirkonyum Kaplama', tag: 'Metal içermeyen tam seramik', desc: 'Renk değişimi, kırık veya büyük dolgulu dişler; ışığı doğal diş gibi geçiren zirkonyum kaplamayla yeniden biçimlendirilir.', steps: ['Diş kaplamaya hazırlanır', 'Zirkonyum kaplama üretilir', 'Prova edilir, yapıştırılır'] },
      en: { name: 'Zirconia Crowns', tag: 'Metal-free all-ceramic', desc: 'Discoloured, broken or heavily filled teeth are reshaped with a zirconia crown that lets light through the way a natural tooth does.', steps: ['The tooth is prepared', 'The zirconia crown is made', 'It is tried in and bonded'] },
      de: { name: 'Zirkonkronen', tag: 'Metallfreie Vollkeramik', desc: 'Verfärbte, gebrochene oder stark gefüllte Zähne erhalten mit einer Zirkonkrone ihre Form zurück – lichtdurchlässig wie ein natürlicher Zahn.', steps: ['Der Zahn wird präpariert', 'Die Zirkonkrone wird gefertigt', 'Anprobe und Befestigung'] } },
    { id: 'lam',
      tr: { name: 'Lamine & E-max', tag: 'Yaprak porselen', desc: 'Dişin ön yüzeyine yapıştırılan ince porselen yapraklar; renk, biçim ve aralık düzeltmelerinde dişten çok az madde kaldırılarak uygulanır.', steps: ['Ön yüzey hafifçe hazırlanır', 'İnce porselen yaprak üretilir', 'Dişe kalıcı olarak yapıştırılır'] },
      en: { name: 'Laminate & E-max', tag: 'Porcelain veneers', desc: 'Thin porcelain shells bonded to the front of the tooth. They correct colour, shape and gaps while removing very little tooth structure.', steps: ['The front surface is lightly prepared', 'A thin porcelain shell is made', 'It is permanently bonded'] },
      de: { name: 'Veneers & E-max', tag: 'Keramikschalen', desc: 'Hauchdünne Keramikschalen, die auf die Zahnvorderseite geklebt werden. Sie korrigieren Farbe, Form und Lücken bei minimalem Substanzabtrag.', steps: ['Die Vorderfläche wird leicht präpariert', 'Die dünne Keramikschale wird gefertigt', 'Sie wird dauerhaft verklebt'] } },
    { id: 'imp',
      tr: { name: 'İmplant', tag: 'Eksik dişe titanyum kök', desc: 'Çene kemiğine yerleştirilen titanyum implant kemikle kaynaşır; üzerine dayanak ve kaplama yapılarak eksik diş, komşu dişlere dokunmadan tamamlanır.', steps: ['İmplant kemiğe yerleştirilir', 'Kemikle kaynaşması beklenir', 'Dayanak ve kaplama takılır'] },
      en: { name: 'Dental Implants', tag: 'A titanium root for a missing tooth', desc: 'A titanium implant placed in the jawbone fuses with the bone. An abutment and crown complete the tooth without touching its neighbours.', steps: ['The implant is placed in the bone', 'It is left to fuse with the bone', 'Abutment and crown are fitted'] },
      de: { name: 'Implantate', tag: 'Titanwurzel für den fehlenden Zahn', desc: 'Ein Titanimplantat wird in den Kieferknochen gesetzt und verwächst mit ihm. Aufbau und Krone ersetzen den Zahn, ohne die Nachbarzähne zu berühren.', steps: ['Das Implantat wird in den Knochen gesetzt', 'Es verwächst mit dem Knochen', 'Aufbau und Krone werden eingesetzt'] } },
    { id: 'kan',
      tr: { name: 'Kanal Tedavisi', tag: 'Dişi çekmeden korumak', desc: 'İltihaplanmış sinir dokusu temizlenir, kanallar biçimlendirilip doldurulur; diş çekilmeden ağızda kalır.', steps: ['Kanal açılır ve temizlenir', 'Yıkanır, dezenfekte edilir', 'Doldurulur ve diş kapatılır'] },
      en: { name: 'Root Canal Treatment', tag: 'Saving the tooth instead of extracting it', desc: 'The inflamed nerve tissue is removed, the canals are shaped and filled, and the tooth stays in your mouth.', steps: ['The canal is opened and cleaned', 'It is rinsed and disinfected', 'It is filled and the tooth sealed'] },
      de: { name: 'Wurzelbehandlung', tag: 'Den Zahn erhalten statt ziehen', desc: 'Das entzündete Nervengewebe wird entfernt, die Kanäle werden aufbereitet und gefüllt – der Zahn bleibt erhalten.', steps: ['Der Kanal wird eröffnet und gereinigt', 'Er wird gespült und desinfiziert', 'Er wird gefüllt, der Zahn verschlossen'] } },
    { id: 'ble',
      tr: { name: 'Bleaching', tag: 'Diş beyazlatma', desc: 'Hekim kontrolünde uygulanan beyazlatma jeli, zamanla oluşan renklenmeleri açarak dişlerin tonunu aydınlatır.', steps: ['Diş etleri korumaya alınır', 'Jel uygulanır ve aktive edilir', 'Yeni diş tonu kontrol edilir'] },
      en: { name: 'Bleaching', tag: 'Teeth whitening', desc: 'A whitening gel applied under your dentist’s supervision lifts the staining that builds up over time and brightens the shade of your teeth.', steps: ['The gums are protected', 'The gel is applied and activated', 'The new shade is checked'] },
      de: { name: 'Bleaching', tag: 'Zahnaufhellung', desc: 'Ein unter zahnärztlicher Kontrolle aufgetragenes Aufhellungsgel löst Verfärbungen, die sich mit der Zeit bilden, und hellt den Zahnton auf.', steps: ['Das Zahnfleisch wird geschützt', 'Das Gel wird aufgetragen und aktiviert', 'Der neue Zahnton wird geprüft'] } },
    { id: 'ort',
      tr: { name: 'Ortodonti', tag: 'Dişleri ve kapanışı hizalamak', desc: 'Braketler ve teller dişlere hafif ve sürekli bir kuvvet uygular; çapraşık dişler planlanan konuma adım adım taşınır.', steps: ['Hedef diş dizilimi planlanır', 'Braket ve tel dişleri taşır', 'Sonuç pekiştirme ile korunur'] },
      en: { name: 'Orthodontics', tag: 'Aligning teeth and bite', desc: 'Brackets and wires apply a light, continuous force that moves crowded teeth into their planned position, step by step.', steps: ['The target alignment is planned', 'Brackets and wire move the teeth', 'A retainer holds the result'] },
      de: { name: 'Kieferorthopädie', tag: 'Zähne und Biss ausrichten', desc: 'Brackets und Drähte üben eine leichte, stetige Kraft aus und bewegen schief stehende Zähne Schritt für Schritt in die geplante Position.', steps: ['Die Zielstellung wird geplant', 'Brackets und Draht bewegen die Zähne', 'Ein Retainer sichert das Ergebnis'] } },
  ];

  /* ───────── language ───────── */
  let lang = 'tr';
  let current = 0;
  $$('[data-i18n]').forEach((el) => { dict.tr[el.dataset.i18n] = el.innerHTML; });

  function setLang(next) {
    lang = dict[next] ? next : 'tr';
    document.documentElement.lang = lang;
    document.title = dict[lang].title;
    $$('[data-i18n]').forEach((el) => {
      const v = dict[lang][el.dataset.i18n] ?? dict.tr[el.dataset.i18n];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderTabs();
    renderTreatment(false);
    try { localStorage.setItem('atlas-lang', lang); } catch (e) {}
  }
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ───────── treatments ───────── */
  const tabs = $('#tabs'), stage = $('#stage'), detail = $('#detail');
  const arrow = '<svg class="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function renderTabs() {
    if (!tabs) return;
    tabs.innerHTML = treatments.map((t, i) =>
      `<button class="tab" role="tab" type="button" data-i="${i}" aria-selected="${i === current}"><span class="n">0${i + 1}</span><span class="name">${t[lang].name}</span>${arrow}</button>`).join('');
  }
  function renderTreatment(restartScene = true) {
    if (!stage) return;
    const t = treatments[current], c = t[lang];
    $$('.tab', tabs).forEach((b, i) => b.setAttribute('aria-selected', String(i === current)));
    // scene and step list are replaced together so their 6s loops stay in phase
    stage.innerHTML = scenes[t.id];
    detail.innerHTML = `<div class="detail-inner"${restartScene ? '' : ' style="animation:none"'}><span class="tag">${c.tag}</span><h3>${c.name}</h3><p>${c.desc}</p><ol class="steps">${c.steps.map((s, i) => `<li><b>0${i + 1}</b><span>${s}</span></li>`).join('')}</ol></div>`;
  }
  tabs?.addEventListener('click', (e) => {
    const b = e.target.closest('.tab');
    if (!b) return;
    current = +b.dataset.i;
    renderTreatment();
  });

  /* ───────── header, reveal, marquee ───────── */
  const header = $('#header'), hero = $('#hero');
  const onScrollHeader = () => header.classList.toggle('is-light', window.scrollY > hero.offsetHeight - 80);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal]').forEach((el) => io.observe(el));

  const track = $('#marquee');
  if (track) track.appendChild(track.firstElementChild.cloneNode(true));

  /* ───────── hero light follows the pointer ───────── */
  const visual = $('.hero-visual'), light = $('#hLight');
  if (visual && light && matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('pointermove', (e) => {
      const hr = hero.getBoundingClientRect(), vr = visual.getBoundingClientRect();
      hero.style.setProperty('--mx', `${((e.clientX - hr.left) / hr.width) * 100}%`);
      hero.style.setProperty('--my', `${((e.clientY - hr.top) / hr.height) * 100}%`);
      const x = (e.clientX - vr.left) / vr.width, y = (e.clientY - vr.top) / vr.height;
      light.setAttribute('cx', clamp(x, -0.2, 1.2).toFixed(3));
      light.setAttribute('cy', clamp(y, -0.2, 1.2).toFixed(3));
      visual.style.setProperty('--tx', clamp(x - 0.5, -1, 1).toFixed(3));
      visual.style.setProperty('--ty', clamp(y - 0.5, -1, 1).toFixed(3));
    });
  }

  /* ───────── scroll-driven zirconia story ───────── */
  const story = $('#story'), storySvg = $('.story-svg'), steps = $$('.story-step'), count = $('#storyCount'), bar = $('.story-count .bar');
  function onScrollStory() {
    if (!story) return;
    const r = story.getBoundingClientRect();
    const p = clamp(-r.top / (r.height - window.innerHeight));
    const seg = (a, b) => ease(clamp((p - a) / (b - a)));
    const a = seg(0.02, 0.22), b = seg(0.27, 0.46), c = seg(0.52, 0.7), d = seg(0.77, 0.93);
    const s = storySvg.style;
    s.setProperty('--a', a); s.setProperty('--b', b); s.setProperty('--c', c); s.setProperty('--d', d);
    s.setProperty('--so', p < 0.25 ? Math.sin(Math.PI * clamp((p - 0.02) / 0.2)).toFixed(3) : 0);
    s.setProperty('--co', clamp(c * 5)); s.setProperty('--do', clamp(d * 5));
    storySvg.classList.toggle('done', p > 0.95);
    const i = Math.min(3, Math.floor(p * 4));
    steps.forEach((el, k) => el.classList.toggle('active', k === i));
    count.textContent = `0${i + 1} / 04`;
    bar.style.setProperty('--p', p.toFixed(3));
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScrollHeader(); onScrollStory(); ticking = false; });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  let saved = null;
  try { saved = localStorage.getItem('atlas-lang'); } catch (e) {}
  setLang(saved || 'tr');
  onScrollHeader(); onScrollStory();
})();
