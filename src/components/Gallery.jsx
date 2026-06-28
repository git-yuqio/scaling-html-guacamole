const photos = [
  {
    id: 1,
    url: '/photos/xisha-screenshot.png',
    title: '海南 · 西沙群岛',
    desc: '海水从透明到浅绿再到深蓝，层次分明得像时间在缓慢分层。',
    span: 'wide',
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/guilin/600/600',
    title: '桂林 · 阳朔',
    desc: '船行江上，两岸青山如黛，薄雾缠绕山腰，每一个转弯都是一帧画。',
    span: 'square',
  },
  {
    id: 3,
    url: 'https://picsum.photos/seed/chengdu/600/600',
    title: '成都 · 宽窄巷子',
    desc: '茶香灯影，街边掏耳朵的吆喝声，慵懒又鲜活。',
    span: 'square',
  },
  {
    id: 4,
    url: 'https://picsum.photos/seed/zhangjiajie/600/600',
    title: '张家界 · 武陵源',
    desc: '奇峰险峻如大地竖起的指骨，雾起时宛如仙境。',
    span: 'square',
  },
  {
    id: 5,
    url: 'https://picsum.photos/seed/xian/600/600',
    title: '西安 · 城墙',
    desc: '每一步都踩在唐朝的尘埃上。',
    span: 'square',
  },
  {
    id: 6,
    url: 'https://picsum.photos/seed/shanghai/900/600',
    title: '上海 · 浦东',
    desc: '万国建筑与玻璃幕墙隔江相望，新与旧碰撞却不刺眼。',
    span: 'wide',
  },
  {
    id: 7,
    url: 'https://picsum.photos/seed/lijiang/600/600',
    title: '丽江 · 古城',
    desc: '雪山与老城的对话，钟声在这里变慢。',
    span: 'square',
  },
  {
    id: 8,
    url: 'https://picsum.photos/seed/suzhou/600/600',
    title: '苏州 · 园林',
    desc: '平江路的雨，长廊下的一抹绿。',
    span: 'square',
  },
  {
    id: 9,
    url: 'https://picsum.photos/seed/hangzhou/600/600',
    title: '杭州 · 西湖',
    desc: '斜风细雨，湖面泛起时间的涟漪。',
    span: 'square',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <p className="section-label">精选影像</p>
        <h2 className="section-title">镜头下的风景</h2>
        <div className="gallery__grid">
          {photos.map(photo => (
            <div key={photo.id} className={`gallery__card gallery__card--${photo.span}`}>
              <div className="gallery__img-wrapper">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="gallery__img"
                  loading="lazy"
                />
                <div className="gallery__meta">
                  <div className="gallery__info">
                    <h3 className="gallery__card-title">{photo.title}</h3>
                    <p className="gallery__card-desc">{photo.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

