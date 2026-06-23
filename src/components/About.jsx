import { useCallback, useEffect, useRef } from 'react'

const cities = [
  { name: '海口', country: '中国' },
  { name: '三亚', country: '中国' },
  { name: '桂林', country: '中国' },
  { name: '成都', country: '中国' },
  { name: '张家界', country: '中国' },
  { name: '长沙', country: '中国' },
  { name: '西安', country: '中国' },
  { name: '上海', country: '中国' },
  { name: '大理', country: '中国' },
  { name: '东京', country: '日本' },
  { name: '大阪', country: '日本' },
  { name: '京都', country: '日本' },
  { name: '旧金山', country: '美国' },
  { name: '洛杉矶', country: '美国' },
]

const cityCoords = {
  海口: [20.04, 110.34],
  三亚: [18.25, 109.51],
  桂林: [25.27, 110.29],
  成都: [30.57, 104.07],
  张家界: [29.40, 110.48],
  长沙: [28.23, 112.94],
  西安: [34.34, 108.94],
  上海: [31.23, 121.47],
  大理: [25.59, 100.23],
  东京: [35.68, 139.69],
  大阪: [34.69, 135.50],
  京都: [35.01, 135.77],
  旧金山: [37.77, -122.42],
  洛杉矶: [34.05, -118.24],
}

const countryColors = {
  '中国': '#00b4d8',
  '日本': '#f77f00',
  '美国': '#6d8cff',
}


export default function About() {
  const mapInitRef = useRef(false)
  const mapRef = useRef(null)

  useEffect(() => {
  function initMap() {
    if (!window.L || mapInitRef.current) return false
    try {
      mapInitRef.current = true
      const map = window.L.map('travel-map', {
        center: [30, 110],
        zoom: 3,
        minZoom: 2,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: false,
      })
      mapRef.current = map

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        noWrap: true,
      }).addTo(map)

      const markers = []
      cities.forEach(city => {
        const coords = cityCoords[city.name]
        if (!coords) return
        const marker = window.L.circleMarker(coords, {
          radius: 6,
          fillColor: '#6d8cff',
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
        }).addTo(map)
        marker.bindTooltip(city.name, {
          direction: 'top',
          offset: [0, -6],
          className: 'map-tooltip',
        })
        markers.push(marker)
      })

      const group = window.L.featureGroup(markers)
      map.fitBounds(group.getBounds().pad(0.3))
      return true
    } catch (err) {
      console.error('[Map] init error:', err)
      mapInitRef.current = false
      return false
    }
  }

  if (initMap()) return

  const retryTimer = setInterval(() => {
    if (initMap()) clearInterval(retryTimer)
  }, 300)

  return () => {
    clearInterval(retryTimer)
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
      mapInitRef.current = false
    }
  }
}, [])

  const groupedCities = cities.reduce((acc, city) => {
    if (!acc[city.country]) acc[city.country] = []
    acc[city.country].push(city)
    return acc
  }, {})

  const flyToCity = useCallback((cityName) => {
    const coords = cityCoords[cityName]
    if (mapRef.current && coords) {
      mapRef.current.flyTo(coords, 8, {
        duration: 1.2,
        easeLinearity: 0.25,
      })
    }
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about__grid">
          {/* Avatar & intro */}
          <div className="about__intro">
            <div className="about__avatar-wrapper">
              <div className="about__avatar">
                <img src="/avatar.jpg" alt="头像" className="about__avatar-img" />
                <div className="about__avatar-ring" />
              </div>
            </div>

            <h2 className="section-title" style={{marginBottom: 16}}>
              用脚步&#x2003;收集世界
            </h2>
            <p className="about__bio">
              我始终迷恋着"出发"这件事。离开熟悉的街道，去另一座城市吹不一样的风，
              看另一种天色如何暗下来。作为一名视觉设计专业的学生和摄影爱好者，
              镜头是我丈量世界的方式，设计则是我整理记忆的语言。
            </p>
            <p className="about__bio">
              这些年，国内的山海城林、海外的异域街巷，都曾留下我的脚印。
              它们渐渐拼凑成我内心的版图——每一帧画面都是一段故事的开端。
            </p>
          </div>

          {/* Stats */}
          <div className="about__stats">
            <div className="about__stat-item glass-card">
              <span className="about__stat-number">14</span>
              <span className="about__stat-label">座城市</span>
            </div>
            <div className="about__stat-item glass-card">
              <span className="about__stat-number">2</span>
              <span className="about__stat-label">个国家</span>
            </div>
            <div className="about__stat-item glass-card">
              <span className="about__stat-number">&#x221e;</span>
              <span className="about__stat-label">段回忆</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="about__map-section">
          <p className="section-label">足迹地图</p>
          <h3 className="about__map-title">我曾抵达的地方</h3>

          <div className="about__cities">
            {Object.entries(groupedCities).map(([country, groupCities]) => (
              <div key={country} className="about__city-group">
                <span
                  className="about__country-label"
                  style={{ color: countryColors[country] }}
                >
                  {country}
                </span>
                <div className="about__city-tags">
                  {groupCities.map(city => (
                    <button
                      key={city.name}
                      className="about__city-tag glass-card"
                      onClick={() => flyToCity(city.name)}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="about__map glass-card">
            <div id="travel-map" className="about__leaflet-map"></div>
          </div>
        </div>
      </div>
    </section>
  )
}



