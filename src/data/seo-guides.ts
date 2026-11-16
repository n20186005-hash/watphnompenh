export const guideSlugs = ['history', 'how-to-get-there', 'what-to-see'] as const;
export type GuideSlug = typeof guideSlugs[number];

type Guide = {
  title: string; description: string; eyebrow: string; intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  routeTitle: string; route: string[]; practicalTitle: string; practical: string[];
  questions: { q: string; a: string }[];
};

export const guides: Record<string, Record<GuideSlug, Guide>> = {
  en: {
    'what-to-see': {
      title: 'What to See at Wat Phnom: Sanctuary, Lady Penh Shrine and Stupa',
      description: 'A detailed self-guided checklist of Wat Phnom’s main sanctuary, Lady Penh shrine, royal stupa, carved stairs and hilltop viewpoints.',
      eyebrow: 'Temple highlights',
      intro: 'The important sights at Wat Phnom are concentrated on a small tree-covered hill. Slow down to distinguish religious spaces, memorial architecture and the public landscape instead of treating the temple as a single photo stop.',
      sections: [
        { heading: 'The main sanctuary and roofline', paragraphs: ['The principal vihara is an active Buddhist sanctuary. From outside, study its layered roof, decorative gables and guardian imagery. Inside, follow posted rules and leave clear space for people making offerings.', 'The sanctuary has been restored repeatedly, including a reconstruction commonly dated to 1926. Its present appearance is therefore the result of several periods of care rather than an untouched medieval monument.'] },
        { heading: 'The Lady Penh shrine', paragraphs: ['Look for the smaller devotional space associated with Daun Penh, the woman in the city’s founding legend. In the story, she recovered sacred statues from a tree floating in the river and local residents built a hilltop shrine.', 'The shrine remains a place of personal devotion. Avoid close-up photographs of worshippers or offerings unless permission is given. Read local interpretation before retelling legendary details as historical certainty.'] },
        { heading: 'The royal stupa and stairways', paragraphs: ['A prominent stupa behind the sanctuary is associated with King Ponhea Yat. The setting connects the hill with the royal history of Phnom Penh as well as the Lady Penh legend.', 'At the approaches, look at the balustrades, guardian figures and shade trees. The stairs are part of the experience but can become slippery during rain; choose your pace carefully.'] },
        { heading: 'The hill and surrounding city', paragraphs: ['At roughly 27 metres high, Wat Phnom provides a rare small rise in this otherwise flat urban district. The views are more about tree canopy, temple details and everyday city life than about a panoramic skyline.', 'Near the base, the historic post office quarter and riverfront create a natural extension to the visit. Allow extra time if you want to photograph architectural details in softer morning or late-afternoon light.'] },
      ],
      routeTitle: 'A suggested 45–60 minute circuit', route: ['Begin near the lower steps and observe the guardian sculpture.', 'Ascend slowly to the main sanctuary; remain outside if a ceremony is underway.', 'Visit the Lady Penh-associated shrine without interrupting worship.', 'Walk toward the royal stupa and compare architectural details.', 'Return downhill, then continue toward the old post office quarter if desired.'],
      practicalTitle: 'Photography and visitor care', practical: ['Do not use flash near worshippers or sacred objects without permission.', 'Keep shoulders and knees respectfully covered; follow footwear signs.', 'The hill’s pathways are uneven in places. Assess steps and access on site, especially with strollers or mobility needs.', 'Use the current pocket guide for admission and opening-hour checks.'],
      questions: [{ q: 'What are the most important sights at Wat Phnom?', a: 'The active main sanctuary, Lady Penh-related shrine, royal stupa and carved approaches are the main highlights.' }, { q: 'Can I see everything in one hour?', a: 'Many visitors can explore the compact hill in about 45–60 minutes, but ceremonies, weather and individual pace may require more time.' }],
    },
    history: {
      title: 'Wat Phnom History: Lady Penh, the Hill and the City Name',
      description: 'Discover Wat Phnom’s Lady Penh founding legend, temple architecture and Phnom Penh’s name, with a respectful on-site walking route.',
      eyebrow: 'History and culture',
      intro: 'Wat Phnom is a living Buddhist place of worship as well as a landmark associated with the origin of Phnom Penh’s name. The founding story is a tradition, not a documentary record of every event.',
      sections: [
        { heading: 'Lady Penh and the floating tree', paragraphs: ['According to the widely told legend, a woman named Penh found sacred Buddha images in a tree carried by the river. She and local residents raised a mound and made a shrine to protect them. Phnom means hill; Phnom Penh can therefore be understood as “Penh’s hill”.', 'Accounts differ on whether the original shrine dates to 1372 or 1373. Treat these dates as traditional approximations rather than precise architectural dating.'] },
        { heading: 'What you see today', paragraphs: ['The tree-shaded hill rises about 27 metres above the surrounding city. The principal sanctuary, stairways, guardian figures and stupas reflect successive rebuilding and additions, not a single untouched medieval structure.', 'Look closely at the roof silhouette, carved details and the contrast between active devotional spaces and the civic park below. The sanctuary has been rebuilt more than once; a major twentieth-century reconstruction is commonly dated to 1926.'] },
        { heading: 'Worship and cultural context', paragraphs: ['Visitors may see incense, offerings and people praying. Give worshippers room, keep voices low and check before photographing anyone. Some interior areas or ceremonies may restrict photography.', 'The hill is close to the old riverfront district. Pairing the visit with a walk toward the river helps explain how a small sacred hill became an enduring symbol of the capital.'] },
      ],
      routeTitle: 'A 40–60 minute history walk', route: ['Begin at the base of the hill and look at the stairway and guardian figures.', 'Walk uphill at an unhurried pace, keeping clear of devotional activity.', 'Observe the sanctuary exterior, roofline and stupas before entering permitted areas.', 'Pause near the Lady Penh-related shrine and read local signage for context.', 'Descend and continue to the historic riverside if time permits.'],
      practicalTitle: 'Before visiting', practical: ['There is no need to buy a separate “history tour” ticket for this self-guided walk. Confirm current admission and hours at the entrance.', 'Wear clothing suitable for a temple and remove shoes where requested.', 'For a concise price and opening-time checklist, consult the pocket guide.'],
      questions: [{ q: 'Why is Phnom Penh named after Lady Penh?', a: 'The traditional account links the city name to the hill created for a shrine after Lady Penh discovered sacred images.' }, { q: 'Is the current temple the original 14th-century building?', a: 'No. The sanctuary has undergone several rebuildings and repairs over the centuries.' }],
    },
    'how-to-get-there': {
      title: 'How to Get to Wat Phnom: Riverside, City Centre and KTI Airport',
      description: 'Practical routes to Wat Phnom Daun Penh from Phnom Penh riverfront and Techo International Airport (KTI), plus arrival and access tips.',
      eyebrow: 'Transport and arrival',
      intro: 'Wat Phnom stands at the northern end of central Phnom Penh’s historic district. Choose your route from your actual starting point, and ask your driver to navigate to Wat Phnom Daun Penh rather than a generic city-centre pin.',
      sections: [
        { heading: 'From the riverside and central Phnom Penh', paragraphs: ['From the northern riverfront, walking can be convenient in comfortable weather. Use pedestrian crossings where available and allow time for busy intersections. The hill is a short tuk-tuk or taxi ride from many central hotels.', 'A tuk-tuk or ride-hailing vehicle is often easiest in heat or rain. Check the destination pin, displayed fare and pickup point before setting off. Road traffic and pedestrian conditions vary throughout the day.'] },
        { heading: 'From Techo International Airport (KTI)', paragraphs: ['Techo International Airport (IATA: KTI) began operations in September 2025 and replaced the old Phnom Penh airport for scheduled commercial passenger services. Do not follow older guides that still tell new arrivals to start from PNH.', 'The airport offers an Airport Express Bus connecting with Phnom Penh. Check its current stops and schedule with the airport operator, then arrange a city-centre onward ride or walk if practical. For door-to-door travel, use an official airport taxi or a supported ride service and enter Wat Phnom as the destination.', 'Do not rely on a fixed travel time: airport journeys depend heavily on traffic, stop choice and the location of your accommodation.'] },
        { heading: 'Finding the correct entrance', paragraphs: ['Set the map destination to Wat Phnom Daun Penh, Phnom Penh, Cambodia (Plus Code HWGF+F6). The main hill is surrounded by roads and greenery; the vehicle drop-off may not be identical to the pedestrian stairway.', 'Check the actual entrance and any ticket desk on arrival. Drivers and mapping services sometimes use nearby roadside pins, so verify the temple name before leaving the vehicle.'] },
      ],
      routeTitle: 'Arrival checklist', route: ['Open the Wat Phnom-specific Google Maps listing.', 'Confirm your starting point: hotel, riverfront, bus stop or KTI terminal.', 'Choose a walking route for short central trips or a booked vehicle for longer trips.', 'At the hill, identify the pedestrian stairs and follow displayed visitor guidance.', 'Allow extra time for worship, photographs and onward transport.'],
      practicalTitle: 'Useful travel cautions', practical: ['The airport bus is not necessarily a direct service to the temple. Check the current official route before departure.', 'Do not treat online estimates as guaranteed fares or journey times.', 'Opening hours and entrance charges should be checked at the temple on the day of your visit.'],
      questions: [{ q: 'Which airport serves Phnom Penh now?', a: 'Techo International Airport (KTI) took over scheduled commercial passenger operations in September 2025.' }, { q: 'Can I walk to Wat Phnom from the riverfront?', a: 'Yes, from parts of the northern historic riverfront it can be a practical walk, subject to weather and road conditions.' }],
    },
  },
  zh: {
    'what-to-see': {
      title: '塔山寺必看景点：主殿、奔夫人祠与王室佛塔', description: '塔山寺实地参观重点：佛教主殿、奔夫人祠、王室佛塔、雕刻台阶和山丘景观，附步行路线与拍照建议。', eyebrow: '景点观察指南', intro: '塔山寺的主要看点集中在一座绿树覆盖的小山上。建议区分正在使用的宗教空间、纪念建筑与公共园林，留出时间观察细节。',
      sections: [
        { heading: '主殿与屋顶装饰', paragraphs: ['主殿仍是佛教礼拜场所。从外部可观察层叠屋顶、山墙装饰与守护图像；入内时遵守标示并避开参拜动线。', '主殿曾多次修复，资料通常提到1926年的重要重建，因此今天的外观并非未经改动的中古建筑。'] },
        { heading: '奔夫人相关祠堂', paragraphs: ['寻找与奔夫人（Daun Penh）有关的小型祠堂。传说她从河中漂来的树木里发现圣像，居民随后兴建山丘和供奉处。', '这里仍有日常祈祷活动。未经允许不要近距离拍摄信众及供品；历史传说与有文献可证的事实应区分。'] },
        { heading: '王室佛塔与台阶', paragraphs: ['主殿后方的佛塔与波涅亚·亚特国王（Ponhea Yat）相关，体现山丘和金边王室历史的联系。', '沿途可观察栏杆、守护雕像与大树。雨后台阶可能湿滑，注意放慢脚步。'] },
        { heading: '山丘与周围街区', paragraphs: ['约27米高的山丘提供树林、寺院细节与城市日常生活的视角，并非高处全景观景台。', '山脚附近的旧邮政街区和河岸适合接续参观；清晨或傍晚柔和光线更利于拍摄细节。'] },
      ], routeTitle: '45—60分钟参观顺序', route: ['从山脚台阶观察守护雕像。', '缓步抵达主殿，遇到法会时保持距离。', '参观奔夫人相关祠堂，不干扰祈祷。', '走向王室佛塔，比较建筑细节。', '下山后可前往旧邮政街区。'], practicalTitle: '摄影与参观须知', practical: ['未经许可不要对信众或圣物使用闪光灯。', '穿着尊重宗教场所的服装，并遵守脱鞋指示。', '部分通道不平整，携带婴儿车或行动不便者应现场评估台阶。', '票价及开放时间请查阅现有随身指南。'], questions: [{ q: '塔山寺最值得看的是什么？', a: '主殿、奔夫人祠、王室佛塔与雕刻台阶是主要看点。' }, { q: '一小时能参观完吗？', a: '多数游客可在45—60分钟内走完核心区域，但法会、天气与个人步速可能延长停留。' }],
    },
    history: {
      title: '塔山寺历史：奔夫人传说与金边城市名称的由来', description: '认识金边塔山寺的奔夫人建寺传说、寺庙建筑与宗教文化，并参考现场步行参观路线。', eyebrow: '历史与文化', intro: '塔山寺既是仍在使用的佛教礼拜场所，也是金边城市命名传说的重要地标。建城故事属于地方传统叙事，不宜把每个细节都当作可考证的史实。',
      sections: [
        { heading: '奔夫人与漂流树木的故事', paragraphs: ['相传奔夫人在河中漂来的树木里发现佛像，随后与居民堆起小山，并建造供奉佛像的圣所。“Phnom”在高棉语中意为山，金边（Phnom Penh）因此常被解释为“奔夫人的山”。', '不同资料将最初圣所的年代写作1372年或1373年，宜将其视为传说相关的约略年代。'] },
        { heading: '今天能够观察什么', paragraphs: ['绿树覆盖的小山约高27米。主殿、台阶、守护雕像和佛塔经过多次重建与增修，今天看到的并非完整保存的十四世纪原建筑。', '可观察层叠屋顶、雕刻细节与山下城市公园的对比。资料通常将主殿一次重要重建记为1926年。'] },
        { heading: '宗教礼仪与城市脉络', paragraphs: ['这里可能有香火、供品与正在祈祷的信众。请保持安静，避免挡住礼拜路线，拍摄人物前先征得同意。', '从山丘步行前往旧城区河岸，可以把寺庙放回金边历史城市景观中理解。'] },
      ], routeTitle: '40—60分钟历史观察路线', route: ['从山脚观察台阶和守护雕像。', '沿步道缓步登山，不干扰礼拜。', '欣赏主殿外观、屋顶与佛塔，按现场规定进入开放区域。', '寻找与奔夫人有关的圣所并阅读现场说明。', '下山后可继续走向历史河岸。'], practicalTitle: '出发前提示', practical: ['这条自助路线不需要额外购买历史导览服务；入场政策以现场为准。', '穿着适合寺院的服装，按指示脱鞋。', '开放时间和门票查询可查看随身指南。'], questions: [{ q: '金边为什么以奔夫人命名？', a: '传统故事认为，奔夫人发现圣像后兴建供奉用的山丘，城市因此得名。' }, { q: '现在的主殿是十四世纪原建筑吗？', a: '不是，寺庙在后世经历过多次修建和重建。' }],
    },
    'how-to-get-there': {
      title: '如何前往金边塔山寺：河岸、市中心与KTI机场交通', description: '从金边河岸、市中心及德崇国际机场（KTI）前往塔山寺的交通选择、地图定位和到达提示。', eyebrow: '交通与抵达', intro: '塔山寺位于金边历史城区北端。请根据实际出发地点规划路线，并让司机使用“Wat Phnom Daun Penh”专属地图定位，而非笼统的市中心坐标。',
      sections: [
        { heading: '从河岸和市中心出发', paragraphs: ['从旧城区北部河岸出发，天气适宜时可考虑步行。请留意繁忙路口与行人过街条件。多数市中心住宿可安排嘟嘟车或出租车前往。', '炎热或下雨时，嘟嘟车与网约车通常更方便。出发前核对车辆、目的地和报价，行程时间受路况影响。'] },
        { heading: '从德崇国际机场（KTI）出发', paragraphs: ['德崇国际机场（Techo International Airport，KTI）于2025年9月投入运营，取代旧金边机场承担定期商业客运。请避免沿用将抵达机场写为PNH的旧攻略。', '机场提供连接金边的 Airport Express Bus。先通过机场官方页面核对站点和班次，再安排市内接驳；如需直达，可选择机场出租车或适用的网约车。', '路程耗时会受到交通拥堵、停靠站和住宿位置影响，不宜使用固定时长安排紧迫行程。'] },
        { heading: '识别正确入口', paragraphs: ['地图搜索 Wat Phnom Daun Penh, Phnom Penh, Cambodia；Plus Code 为 HWGF+F6。环山车道与步行阶梯并非总在同一处。', '抵达后辨认开放入口和售票处，司机停车点可能与台阶位置不同。'] },
      ], routeTitle: '抵达前五步', route: ['打开塔山寺专属谷歌地图。', '确认出发点是酒店、河岸、巴士站还是KTI机场。', '短途按天气选择步行，远途可预订车辆。', '到达山脚后按现场指引寻找步行阶梯。', '为参拜、拍照和后续交通预留机动时间。'], practicalTitle: '交通注意事项', practical: ['机场快线不代表直达塔山寺，请核对官方站点。', '线上估价并非保证价格或行车时间。', '开放时间与门票以参观当日现场信息为准。'], questions: [{ q: '现在金边使用哪个机场？', a: '德崇国际机场（KTI）于2025年9月接替旧机场的定期商业客运。' }, { q: '可以从河岸步行到塔山寺吗？', a: '从北部历史河岸的部分位置可以步行，但需结合天气和过街条件判断。' }],
    },
  },
  km: {
    'what-to-see': {
      title: 'អ្វីគួរមើលនៅវត្តភ្នំ៖ ព្រះវិហារ ទីសក្ការៈដូនពេញ និងចេតិយ', description: 'មគ្គុទ្ទេសក៍មើលព្រះវិហារ ទីសក្ការៈដូនពេញ ចេតិយ ជណ្តើរ និងទេសភាពវត្តភ្នំ ជាមួយផ្លូវដើរទស្សនា។', eyebrow: 'ចំណុចគួរទស្សនា', intro: 'ចំណុចសំខាន់ៗនៅវត្តភ្នំស្ថិតនៅលើភ្នំតូចដែលមានដើមឈើច្រើន។ សូមចំណាយពេលសង្កេតទីសក្ការៈ សំណង់រំលឹក និងទេសភាពជុំវិញដោយស្ងប់ស្ងាត់។',
      sections: [
        { heading: 'ព្រះវិហារ និងដំបូល', paragraphs: ['ព្រះវិហារធំជាទីបូជាព្រះពុទ្ធសាសនាដែលនៅមានសកម្មភាព។ ពីខាងក្រៅ អាចមើលដំបូលជាន់ៗ ក្បាច់លម្អ និងរូបចម្លាក់ការពារ។ ពេលចូលខាងក្នុង សូមគោរពស្លាកណែនាំ។', 'ព្រះវិហារត្រូវបានជួសជុលជាបន្តបន្ទាប់ ហើយការសាងសង់ឡើងវិញដ៏សំខាន់មួយត្រូវបានរៀបរាប់នៅឆ្នាំ ១៩២៦។'] },
        { heading: 'ទីសក្ការៈដូនពេញ', paragraphs: ['សូមស្វែងរកទីសក្ការៈតូចដែលពាក់ព័ន្ធនឹងដូនពេញ។ តាមរឿងព្រេង គាត់បានរកឃើញព្រះពុទ្ធរូបក្នុងដើមឈើអណ្តែត ហើយអ្នកស្រុកបានពូនដីជាភ្នំ។', 'ទីនេះនៅតែជាកន្លែងបួងសួង។ សូមកុំថតជិតអ្នកបូជាឬគ្រឿងសក្ការៈដោយគ្មានការអនុញ្ញាត និងបែងចែករឿងព្រេងពីហេតុការណ៍ប្រវត្តិសាស្ត្រដែលមានឯកសារ។'] },
        { heading: 'ចេតិយព្រះមហាក្សត្រ និងជណ្តើរ', paragraphs: ['ចេតិយធំខាងក្រោយព្រះវិហារមានទំនាក់ទំនងនឹងព្រះបាទពញាយ៉ាត ដែលបង្ហាញពីប្រវត្តិរាជធានី។', 'នៅតាមផ្លូវ សូមសង្កេតបង្កាន់ដៃ រូបចម្លាក់ និងដើមឈើធំៗ។ ជណ្តើរអាចរអិលនៅពេលភ្លៀង។'] },
        { heading: 'ទេសភាពភ្នំ និងទីក្រុង', paragraphs: ['ភ្នំមានកម្ពស់ប្រហែល ២៧ ម៉ែត្រ។ ទិដ្ឋភាពសំខាន់គឺដើមឈើ ស្ថាបត្យកម្មវត្ត និងជីវិតប្រចាំថ្ងៃ មិនមែនទេសភាពទីក្រុងពីអគារខ្ពស់ទេ។', 'តំបន់ប្រៃសណីយ៍ចាស់ និងមាត់ទន្លេនៅក្បែរជើងភ្នំ អាចដើរទស្សនាបន្តបាន។ ពន្លឺព្រឹក ឬរសៀលសមស្របសម្រាប់ថតលម្អសំណង់។'] },
      ], routeTitle: 'ផ្លូវទស្សនា ៤៥–៦០ នាទី', route: ['ចាប់ផ្តើមពីជណ្តើរខាងក្រោម និងមើលរូបចម្លាក់។', 'ឡើងទៅព្រះវិហារយឺតៗ និងគោរពពិធីសាសនា។', 'ទស្សនាទីសក្ការៈដូនពេញដោយមិនរំខានអ្នកបួងសួង។', 'ដើរទៅចេតិយ និងសង្កេតក្បាច់ស្ថាបត្យកម្ម។', 'ចុះភ្នំ ហើយអាចបន្តទៅតំបន់ប្រៃសណីយ៍ចាស់។'], practicalTitle: 'ការថតរូប និងការប្រុងប្រយ័ត្ន', practical: ['កុំប្រើភ្លើងហ្វ្លាសថតអ្នកបូជា ឬវត្ថុសក្ការៈដោយគ្មានការអនុញ្ញាត។', 'ស្លៀកពាក់សមរម្យ និងដោះស្បែកជើងតាមស្លាក។', 'ផ្លូវខ្លះមិនស្មើគ្នា។ អ្នកមានរទេះកូន ឬពិបាកដើរគួរពិនិត្យជណ្តើរនៅទីតាំង។', 'ពិនិត្យតម្លៃចូល និងម៉ោងបើកក្នុងមគ្គុទ្ទេសក៍ខ្លី។'], questions: [{ q: 'តើមានអ្វីសំខាន់គួរមើលនៅវត្តភ្នំ?', a: 'ព្រះវិហារ ទីសក្ការៈដូនពេញ ចេតិយ និងជណ្តើរដែលមានរូបចម្លាក់។' }, { q: 'តើមួយម៉ោងគ្រប់គ្រាន់ទេ?', a: 'អ្នកទស្សនាជាច្រើនអាចដើរមើលតំបន់សំខាន់ក្នុង ៤៥–៦០ នាទី ប៉ុន្តែអាកាសធាតុ និងពិធីសាសនាអាចតម្រូវពេលបន្ថែម។' }],
    },
    history: {
      title: 'ប្រវត្តិវត្តភ្នំ៖ រឿងព្រេងដូនពេញ និងឈ្មោះភ្នំពេញ', description: 'ស្វែងយល់ពីរឿងព្រេងដូនពេញ ប្រវត្តិវត្តភ្នំ ស្ថាបត្យកម្ម និងផ្លូវដើរទស្សនាដោយគោរពទីសក្ការៈ។', eyebrow: 'ប្រវត្តិសាស្ត្រ និងវប្បធម៌', intro: 'វត្តភ្នំជាទីសក្ការៈព្រះពុទ្ធសាសនាដែលនៅមានសកម្មភាព និងជានិមិត្តរូបនៃដើមកំណើតឈ្មោះរាជធានីភ្នំពេញ។ រឿងដូនពេញជារឿងព្រេងប្រពៃណី មិនមែនព័ត៌មានប្រវត្តិសាស្ត្រដែលអាចបញ្ជាក់គ្រប់ចំណុចបានទេ។',
      sections: [
        { heading: 'រឿងដូនពេញ និងដើមឈើអណ្តែត', paragraphs: ['តាមរឿងព្រេង ដូនពេញបានរកឃើញព្រះពុទ្ធរូបក្នុងដើមឈើដែលអណ្តែតតាមទឹក។ គាត់និងអ្នកស្រុកបានពូនដីជាភ្នំ ហើយសង់ទីសក្ការៈសម្រាប់តម្កល់ព្រះពុទ្ធរូប។ ឈ្មោះ «ភ្នំពេញ» ត្រូវបានពន្យល់ថាជាភ្នំរបស់ដូនពេញ។', 'ប្រភពខ្លះរៀបរាប់ឆ្នាំ ១៣៧២ និងខ្លះឆ្នាំ ១៣៧៣ សម្រាប់ទីសក្ការៈដំបូង។ គួរយល់ថាជាកាលបរិច្ឆេទប្រហាក់ប្រហែលក្នុងរឿងព្រេង។'] },
        { heading: 'អ្វីដែលអាចមើលឃើញសព្វថ្ងៃ', paragraphs: ['ភ្នំដែលមានដើមឈើគ្របដណ្តប់មានកម្ពស់ប្រហែល ២៧ ម៉ែត្រ។ ព្រះវិហារ ជណ្តើរ រូបចម្លាក់ការពារ និងចេតិយបានឆ្លងកាត់ការជួសជុលជាច្រើនដង។', 'សូមសង្កេតដំបូល ចម្លាក់ និងទេសភាពសួនខាងក្រោម។ ការសាងសង់ឡើងវិញដ៏សំខាន់មួយត្រូវបានរៀបរាប់ថាកើតឡើងនៅឆ្នាំ ១៩២៦។'] },
        { heading: 'ការគោរពពិធីសាសនា', paragraphs: ['នៅទីនេះអាចមានអ្នកបួងសួង ធូប និងគ្រឿងសក្ការៈ។ សូមរក្សាសំឡេងទាប កុំរារាំងអ្នកគោរពបូជា និងសុំការអនុញ្ញាតមុនថតរូបមនុស្ស។', 'ការដើរបន្តទៅមាត់ទន្លេនៃទីក្រុងចាស់ជួយឱ្យយល់ពីទំនាក់ទំនងរវាងវត្តភ្នំ និងប្រវត្តិទីក្រុង។'] },
      ], routeTitle: 'ផ្លូវដើរសិក្សាប្រវត្តិ ៤០–៦០ នាទី', route: ['ចាប់ផ្តើមនៅជើងភ្នំ និងមើលជណ្តើរនិងរូបចម្លាក់។', 'ឡើងភ្នំដោយស្ងប់ស្ងាត់ និងកុំរំខានការបួងសួង។', 'សង្កេតព្រះវិហារ ដំបូល និងចេតិយពីតំបន់អនុញ្ញាត។', 'មើលទីសក្ការៈពាក់ព័ន្ធនឹងដូនពេញ និងអានផ្លាកពន្យល់។', 'ចុះពីភ្នំ ហើយអាចដើរបន្តទៅតំបន់មាត់ទន្លេ។'], practicalTitle: 'មុនពេលទស្សនា', practical: ['ផ្លូវនេះអាចដើរដោយខ្លួនឯងបាន។ សូមពិនិត្យថ្លៃចូល និងម៉ោងបើកនៅច្រកចូល។', 'ស្លៀកពាក់សមរម្យ និងដោះស្បែកជើងនៅកន្លែងដែលមានស្លាកណែនាំ។', 'សូមមើលមគ្គុទ្ទេសក៍ខ្លីសម្រាប់ព័ត៌មានសំបុត្រនិងម៉ោង។'], questions: [{ q: 'ហេតុអ្វីបានជាឈ្មោះទីក្រុងភ្នំពេញ?', a: 'រឿងព្រេងភ្ជាប់ឈ្មោះទីក្រុងទៅនឹងភ្នំដែលដូនពេញបានពូនសម្រាប់តម្កល់ព្រះពុទ្ធរូប។' }, { q: 'តើព្រះវិហារសព្វថ្ងៃជាសំណង់ដើមពីសតវត្សទី១៤ឬ?', a: 'មិនមែនទេ។ ព្រះវិហារត្រូវបានជួសជុល និងសង់ឡើងវិញជាច្រើនដង។' }],
    },
    'how-to-get-there': {
      title: 'របៀបទៅវត្តភ្នំ៖ ពីមាត់ទន្លេ កណ្ដាលក្រុង និងព្រលាន KTI', description: 'ជម្រើសធ្វើដំណើរទៅវត្តភ្នំពីកណ្ដាលរាជធានីភ្នំពេញ និងអាកាសយានដ្ឋានអន្តរជាតិតេជោ (KTI) ព្រមទាំងផែនទីទីតាំង។', eyebrow: 'ការធ្វើដំណើរ', intro: 'វត្តភ្នំស្ថិតនៅភាគខាងជើងនៃតំបន់ប្រវត្តិសាស្ត្រកណ្ដាលរាជធានីភ្នំពេញ។ សូមប្រើទីតាំង Wat Phnom Daun Penh ជាក់លាក់ក្នុងផែនទី មិនមែនទីតាំងទូទៅនៃកណ្ដាលក្រុងទេ។',
      sections: [
        { heading: 'ពីមាត់ទន្លេ និងកណ្ដាលក្រុង', paragraphs: ['ពីផ្នែកខាងជើងនៃមាត់ទន្លេ អ្នកអាចដើរទៅបាននៅពេលអាកាសធាតុសមរម្យ។ សូមប្រុងប្រយ័ត្នពេលឆ្លងផ្លូវដែលមានចរាចរណ៍មមាញឹក។', 'រ៉ឺម៉កកង់បី ឬតាក់ស៊ីអាចសមស្របជាងពេលក្តៅ ឬភ្លៀង។ ពិនិត្យទីតាំង គម្លាតផ្លូវ និងតម្លៃមុនចេញដំណើរ។'] },
        { heading: 'ពីអាកាសយានដ្ឋានអន្តរជាតិតេជោ (KTI)', paragraphs: ['អាកាសយានដ្ឋានអន្តរជាតិតេជោ (KTI) បានចាប់ផ្តើមប្រតិបត្តិការនៅខែកញ្ញា ឆ្នាំ២០២៥ ហើយជំនួសអាកាសយានដ្ឋានភ្នំពេញចាស់សម្រាប់ជើងហោះហើរដឹកអ្នកដំណើរពាណិជ្ជកម្មតាមកាលវិភាគ។', 'មានរថយន្តក្រុង Airport Express Bus ភ្ជាប់ព្រលានជាមួយរាជធានី។ ពិនិត្យចំណត និងកាលវិភាគថ្មីពីគេហទំព័រផ្លូវការរបស់ព្រលាន រួចរៀបចំដំណើរបន្តទៅវត្តភ្នំ។ ជម្រើសមួយទៀតគឺតាក់ស៊ីព្រលាន។', 'ពេលធ្វើដំណើរអាស្រ័យលើចរាចរណ៍ និងទីតាំងចាប់ផ្តើម។ មិនគួរពឹងផ្អែកលើការប៉ាន់ស្មានពេលវេលាថេរទេ។'] },
        { heading: 'ស្វែងរកច្រកចូលឱ្យត្រឹមត្រូវ', paragraphs: ['ស្វែងរក Wat Phnom Daun Penh, Phnom Penh, Cambodia នៅក្នុង Google Maps។ Plus Code គឺ HWGF+F6។ ទីតាំងចុះពីរថយន្តអាចខុសពីជណ្តើរឡើងភ្នំ។', 'ពេលទៅដល់ សូមមើលស្លាកច្រកចូល និងបញ្ជរសំបុត្រជាក់ស្តែង។'] },
      ], routeTitle: 'បញ្ជីត្រួតពិនិត្យមុនមកដល់', route: ['បើកផែនទី Google Maps របស់វត្តភ្នំ។', 'បញ្ជាក់ថាចេញពីសណ្ឋាគារ មាត់ទន្លេ ចំណតរថយន្ត ឬ KTI។', 'ជ្រើសដើរសម្រាប់ចម្ងាយខ្លី ឬកក់យានជំនិះសម្រាប់ចម្ងាយឆ្ងាយ។', 'រកជណ្តើរថ្មើរជើង និងធ្វើតាមស្លាកនៅជើងភ្នំ។', 'ទុកពេលបន្ថែមសម្រាប់បួងសួង ថតរូប និងដំណើរបន្ត។'], practicalTitle: 'ការប្រុងប្រយ័ត្ន', practical: ['រថយន្តក្រុងព្រលានមិនចាំបាច់ឈប់ផ្ទាល់នៅវត្តភ្នំទេ។ សូមពិនិត្យចំណតផ្លូវការ។', 'តម្លៃនិងពេលវេលាតាមអ៊ីនធឺណិតគ្រាន់តែជាការប៉ាន់ស្មាន។', 'ម៉ោងបើក និងថ្លៃចូលសូមពិនិត្យនៅទីតាំងនៅថ្ងៃទស្សនា។'], questions: [{ q: 'តើអាកាសយានដ្ឋានណាបម្រើភ្នំពេញឥឡូវនេះ?', a: 'អាកាសយានដ្ឋានអន្តរជាតិតេជោ (KTI) បានទទួលប្រតិបត្តិការជើងហោះហើរដឹកអ្នកដំណើរពាណិជ្ជកម្មនៅខែកញ្ញា ឆ្នាំ២០២៥។' }, { q: 'អាចដើរពីមាត់ទន្លេទៅវត្តភ្នំបានទេ?', a: 'អាចបានពីផ្នែកខ្លះនៃមាត់ទន្លេភាគខាងជើង ប៉ុន្តែគួរគិតពីអាកាសធាតុ និងស្ថានភាពផ្លូវ។' }],
    },
  },
};
