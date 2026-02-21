/**
 * ============================================================
 *  SITE CONTENT – 臺大資管系友會
 * ============================================================
 *  All user-facing text lives here. Edit this file to update
 *  the website content without touching any component code.
 * ============================================================
 */

const siteContent = {
  /* ── Site-wide ──────────────────────────────────────────── */
  siteName: "臺大資管系友會",
  siteDescription: "連結過去、現在與未來的資管人",

  /* ── Navigation ─────────────────────────────────────────── */
  nav: [
    { label: "創會宗旨", href: "#mission" },
    { label: "理事長的話", href: "#chairman" },
    { label: "組織幹部", href: "#leadership" },
    { label: "會務大事紀", href: "#milestones" },
    { label: "活動集錦", href: "#gallery" },
    { label: "入會資訊", href: "#membership" },
  ],

  /* ── Hero ────────────────────────────────────────────────── */
  hero: {
    title: "臺大資管系友會",
    subtitle: "匯聚資管菁英，共創卓越未來",
    description:
      "我們致力於搭建系友交流平台，促進產學合作，攜手為社會創造更大價值。",
    cta: {
      text: "立即加入",
      href: "#membership",
    },
    stats: [
      { value: "1000+", label: "系友人數" },
      { value: "30+", label: "屆數傳承" },
      { value: "50+", label: "年度活動" },
    ],
  },

  /* ── 創會宗旨 ───────────────────────────────────────────── */
  mission: {
    sectionTitle: "創會宗旨",
    sectionSubtitle: "凝聚力量，共創未來",
    items: [
      {
        icon: "🤝",
        title: "聯繫情誼",
        description:
          "建立系友間的溝通橋樑，維繫同窗情誼，讓畢業後的連結不中斷，共同回憶在台大資管的美好時光。",
      },
      {
        icon: "🌐",
        title: "促進交流",
        description:
          "搭建產業與學術交流平台，分享專業知識與產業趨勢，促進跨屆、跨領域的合作與資源共享。",
      },
      {
        icon: "🎓",
        title: "回饋母系",
        description:
          "匯集系友力量回饋資管系所，協助在學學弟妹職涯發展、提供實習機會與業師指導。",
      },
      {
        icon: "🚀",
        title: "共創價值",
        description:
          "結合系友在各行各業的專業與資源，共同推動資訊管理領域的創新發展，為社會創造更大價值。",
      },
    ],
  },

  /* ── 理事長的話 ─────────────────────────────────────────── */
  chairmanMessage: {
    sectionTitle: "理事長的話",
    name: "王大明",
    title: "第十屆理事長",
    graduation: "資管系第 15 屆",
    photo: null, // replace with image URL
    paragraphs: [
      "各位親愛的系友大家好！很榮幸能擔任臺大資管系友會第十屆理事長，感謝大家的信任與支持。",
      "回首過去，資管系培育了無數優秀人才，在科技、金融、管理等各領域發光發熱。我們系友會的使命，就是要讓這些散布在世界各地的資管人，能夠保持連結、相互扶持。",
      "展望未來，我們將持續舉辦各類活動，包括年度系友大會、產業論壇、職涯分享會等，也會加強與母系的合作，為在校學弟妹提供更多實習與就業的機會。",
      "誠摯邀請所有系友加入我們，一起為臺大資管的大家庭注入更多活力！",
    ],
    signature: "王大明 敬上",
  },

  /* ── 組織幹部 ───────────────────────────────────────────── */
  leadership: {
    sectionTitle: "組織幹部",
    sectionSubtitle: "為系友服務的核心團隊",
    members: [
      {
        role: "理事長",
        name: "王大明",
        graduation: "第 15 屆",
        company: "ABC 科技公司 執行長",
        email: "chairman@ntuim-alumni.org",
        phone: "02-3366-XXXX",
        photo: null,
      },
      {
        role: "秘書長",
        name: "李小華",
        graduation: "第 18 屆",
        company: "XYZ 顧問公司 合夥人",
        email: "secretary@ntuim-alumni.org",
        phone: "02-3366-XXXX",
        photo: null,
      },
      {
        role: "聯絡窗口",
        name: "陳美玲",
        graduation: "第 22 屆",
        company: "臺大資管系辦公室",
        email: "contact@ntuim-alumni.org",
        phone: "02-3366-XXXX",
        photo: null,
      },
    ],
  },

  /* ── 會務大事紀 ─────────────────────────────────────────── */
  milestones: {
    sectionTitle: "會務大事紀",
    sectionSubtitle: "系友會的重要足跡",
    items: [
      {
        year: "2024",
        title: "第十屆理監事改選",
        description:
          "順利完成第十屆理監事改選，新任理事長王大明帶領團隊，持續推動會務發展。",
      },
      {
        year: "2023",
        title: "30 週年慶祝大會",
        description:
          "舉辦系友會成立 30 週年慶祝晚會，超過 500 位系友齊聚一堂，場面溫馨感人。",
      },
      {
        year: "2022",
        title: "產學合作論壇",
        description:
          "與母系合辦「AI 時代的資訊管理」產學合作論壇，邀請多位業界知名系友擔任講者。",
      },
      {
        year: "2021",
        title: "線上系友聯誼",
        description:
          "因應疫情舉辦多場線上系友聯誼活動，成功維繫系友間的情感交流。",
      },
      {
        year: "2020",
        title: "系友獎學金設立",
        description:
          "募集系友捐款成立「資管系友獎學金」，每年資助 10 名優秀在學學生。",
      },
      {
        year: "2018",
        title: "國際系友分會成立",
        description: "於美國矽谷、日本東京成立海外系友分會，拓展國際交流網絡。",
      },
      {
        year: "1994",
        title: "系友會正式成立",
        description:
          "臺大資管系友會正式成立，首任理事長為第一屆系友張志成教授。",
      },
    ],
  },

  /* ── 活動集錦 ───────────────────────────────────────────── */
  gallery: {
    sectionTitle: "活動集錦",
    sectionSubtitle: "精彩活動回顧",
    items: [
      {
        caption: "2024 年度系友大會",
        description: "超過 300 位系友出席，共同回顧年度成果。",
      },
      {
        caption: "職涯分享講座",
        description: "邀請各界傑出系友分享職涯歷程與產業趨勢。",
      },
      {
        caption: "系友企業參訪",
        description: "參訪系友創辦的新創公司，了解最新科技發展。",
      },
      {
        caption: "春季高爾夫球賽",
        description: "系友間的友誼競賽，增進彼此交流。",
      },
      {
        caption: "家庭日親子活動",
        description: "系友攜家帶眷的溫馨聚會活動。",
      },
      {
        caption: "海外系友聯誼",
        description: "矽谷系友分會年度聚會，連結海內外系友。",
      },
    ],
  },

  /* ── 入會資訊 ───────────────────────────────────────────── */
  membership: {
    sectionTitle: "入會資訊",
    sectionSubtitle: "歡迎加入臺大資管系友會大家庭",
    eligibility: {
      title: "入會資格",
      items: [
        "臺大資管系（所）畢業之校友",
        "臺大資管系（所）肄業之校友",
        "曾任臺大資管系（所）專任教師",
        "經理事會審核通過之榮譽會員",
      ],
    },
    steps: {
      title: "入會流程",
      items: [
        { step: "1", title: "填寫申請", description: "下載並填寫入會申請書" },
        {
          step: "2",
          title: "繳交會費",
          description: "年費 NT$1,000 或永久會員 NT$10,000",
        },
        {
          step: "3",
          title: "審核確認",
          description: "經秘書處審核後通知入會結果",
        },
        {
          step: "4",
          title: "歡迎加入",
          description: "收到會員證，開始享受會員權益",
        },
      ],
    },
    benefits: {
      title: "會員權益",
      items: [
        "參加系友會舉辦之各項活動",
        "收到定期電子報與活動通知",
        "使用系友會專屬交流平台",
        "享有合作廠商之系友優惠",
        "優先參與產學合作與職涯媒合",
      ],
    },
    contact: {
      title: "聯絡我們",
      email: "contact@ntuim-alumni.org",
      phone: "02-3366-XXXX",
      address: "臺北市大安區羅斯福路四段一號 管理學院二館",
    },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copyright: "© 2024 臺大資管系友會 版權所有",
    links: [
      { label: "臺大資管系", href: "https://www.im.ntu.edu.tw/" },
      { label: "臺灣大學", href: "https://www.ntu.edu.tw/" },
    ],
  },
};

export default siteContent;
