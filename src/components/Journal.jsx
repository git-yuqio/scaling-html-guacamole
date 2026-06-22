const entries = [
  {
    id: 1,
    date: '2025 · 夏',
    location: '海南 · 西沙群岛',
    image: 'https://picsum.photos/seed/xisha/1000/700',
    text: '最先闯入记忆的，是海南。海口是悠闲的，棕榈树影铺满街道，海风常年带着温润的咸。三亚则把蓝色用到了极致——澄澈的海与洁白的沙滩绵延到天际，日出时海面碎金万顷，日落时又沉作一壶琥珀色的酒。而更远的西沙，是真正的秘境：海水从透明到浅绿再到深蓝，层次分明得像时间缓慢分层；无人岛安静得只听得见浪花拍岸，那种原始的美，让人不敢大声说话。',
  },
  {
    id: 2,
    date: '2025 · 秋',
    location: '桂林 &amp; 成都',
    image: 'https://picsum.photos/seed/guilincd/1000/700',
    text: '从热带海风里抽身，我跌进桂林的水墨画。漓江蜿蜒于喀斯特峰林之间，船行江上，两岸青山如黛，薄雾缠绕山腰，每一转弯都是一帧宋人笔意。成都则把水墨换成烟火——宽窄巷子的茶香、锦里的灯笼、街边掏耳朵的吆喝，慵懒而鲜活，像这座城市从不急着天亮。',
  },
  {
    id: 3,
    date: '2025 · 秋末',
    location: '湖南',
    image: 'https://picsum.photos/seed/hunan/1000/700',
    text: '湖南是另一种张力：张家界的奇峰险峻如大地竖起的指骨，而长沙的湘江夜风裹着小龙虾的辣味和年轻人的笑闹，热烈得不容你沉默。从极致的自然奇观到喧闹的人间烟火，只在同一个省份里。',
  },
  {
    id: 4,
    date: '2025 · 冬',
    location: '西安',
    image: 'https://picsum.photos/seed/xiancity/1000/700',
    text: '西安是沉下去的。城墙的青砖、大雁塔的剪影、兵马俑的沉默，每一步都踩在唐朝的尘埃上。而上海是浮起来的——外滩的万国建筑与陆家嘴的玻璃幕墙隔江相望，白天的车水马龙，入夜后化作星河，新与旧在这里碰撞，却不刺耳。',
  },
  {
    id: 5,
    date: '2026 · 春',
    location: '云南 · 大理',
    image: 'https://picsum.photos/seed/dali/1000/700',
    text: '云南，是最后一块温柔的补丁。苍山洱海间，时间被拉长，古城的石板路映着银饰的光，雪山脚下开着不知名的野花。少数民族的歌声从木楼里飘出来，和着风，让人忘了归期。',
  },
  {
    id: 6,
    date: '2026 · 春末',
    location: '日本 &amp; 美国',
    image: 'https://picsum.photos/seed/jpusa/1000/700',
    text: '跨过太平洋，日本的城市像一本精心装订的册子——街道干净，神社的朱红与商圈的霓虹各安其位，礼貌而细腻。美国则截然不同：旧金山的坡道起伏如人生，彩色小屋依山面海；洛杉矶敞开着它的胸怀，海岸线绵长，阳光免费，自由得像一场不做计划的旅行。',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="journal-section">
      <div className="section-container">
        <p className="section-label">旅途纪实</p>
        <h2 className="section-title">山河与故事</h2>
      </div>

      {entries.map((entry, i) => (
        <div key={entry.id} className={`journal__entry ${i % 2 === 1 ? 'journal__entry--reverse' : ''}`}>
          <div className="journal__image-wrapper">
            <div className="journal__image-inner glass-card">
              <img src={entry.image} alt={entry.location} className="journal__image" loading="lazy" />
            </div>
          </div>
          <div className="journal__content">
            <div className="journal__meta">
              <span className="journal__date">{entry.date}</span>
              <span className="journal__divider" />
              <span className="journal__location">{entry.location}</span>
            </div>
            <p className="journal__text">{entry.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
