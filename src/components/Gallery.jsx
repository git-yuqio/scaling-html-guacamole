const photos = [
  {
    id: 1,
    url: 'https://picsum.photos/seed/hainan/900/600',
    title: '海南 · 西沙群岛',
    desc: '海水从透明到浅绿再到深蓝，层次分明得像是时间在缓慢分层。',
    span: 'wide',
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/guilin/600/900',
    title: '桂林 · 漓江',
    desc: '船行江上，两岸青山如黛，薄雾缠绕山腰，每一转弯都是一帧宋人笔意。',
    span: 'tall',
  },
  {
    id: 3,
    url: 'https://picsum.photos/seed/chengdu/600/600',
    title: '成都 · 宽窄巷子',
    desc: '茶香、灯笼、街边掏耳朵的吆喝，慵懒而鲜活。',
    span: 'square',
  },
  {
    id: 4,
    url: 'https://picsum.photos/seed/zhangjiajie/900/600',
    title: '张家界',
    desc: '奇峰险峻如大地竖起的指骨，雾起时仿若仙境。',
    span: 'wide',
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
    title: '上海 · 外滩',
    desc: '万国建筑与玻璃幕墙隔江相望，新与旧在这里碰撞却不刺耳。',
    span: 'wide',
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
                <div className="gallery__overlay">
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
